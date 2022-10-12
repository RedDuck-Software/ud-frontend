import { useWeb3React, UnsupportedChainIdError } from '@web3-react/core';
import { ethers } from 'ethers';
import React, { useEffect, useState } from 'react';

import { injected } from '../../helper/connectors';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment, @typescript-eslint/no-explicit-any
declare let window: any;

function MetamaskProvider({
  children,
}: {
  children: JSX.Element;
}): JSX.Element {
  const {
    active: networkActive,
    error: networkError,
    activate: activateNetwork,
    error,
  } = useWeb3React();
  const [loaded, setLoaded] = useState(false);
  const isWrongNetwork = error && error instanceof UnsupportedChainIdError;
  const chainId = process.env.REACT_APP_NETWORK_CHAINID;
  const chainHex = ethers.utils.hexlify(Number(chainId!));

  useEffect(() => {
    injected
      .isAuthorized()
      .then((isAuthorized: boolean) => {
        setLoaded(true);
        const isDisconnected = localStorage.getItem('disconnect');
        if (
          isAuthorized &&
          !networkActive &&
          !networkError &&
          isDisconnected !== 'true'
        ) {
          activateNetwork(injected);
          localStorage.setItem('disconnect', 'false');
        }
      })
      .catch(() => {
        setLoaded(true);
      });

    if (isWrongNetwork) {
      window.ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: chainHex }],
      });
    }
  }, [activateNetwork, networkActive, networkError]);

  if (loaded) {
    return children;
  }
  return <></>;
}

export default MetamaskProvider;
