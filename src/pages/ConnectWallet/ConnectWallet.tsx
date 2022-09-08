import { useWeb3React } from '@web3-react/core';
import React from 'react';
import './connectWallet.scss';

import { uauth, gnosisconnect, injected } from '../../helper/connectors';

const ConnectWallet = (props: any) => {
  const {
    setIsActive,
    setUser,
    setGnosisError,
    isGnosisError } = props;
  const { activate } = useWeb3React();

  async function connectMetamask() {
    try {
      await activate(injected);
      setIsActive(false);
    } catch (e) {
      console.log(e);
    }
  };

  async function connectGnosis() {
    await activate(gnosisconnect);
    const isSafeApp = await gnosisconnect.isSafeApp();

    if (!isSafeApp) {
      setGnosisError(true);
    } else {
      setGnosisError(false);
      setIsActive(false);
    }
  };

  async function handleLogin() {
    await activate(uauth);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const userObj = JSON.parse(uauth.options.uauth.store.storage.username);
    if (userObj.value) {
      setUser(userObj.value);
      setIsActive(false);
    }
  };

  return (
    <div
      className="modal"
      onClick={() => setIsActive(false)}>
      <div
        className='modal__content'
        onClick={e => e.stopPropagation()}
      >
        <div className='modal__content-buttons-wrapper'>
          <button onClick={handleLogin}>Connect Unstoppable Domains</button>
          <button onClick={connectGnosis}>Connect Gnosis</button>
          <button onClick={connectMetamask}>Connect Metamask</button>
          {isGnosisError && <span>The app is loaded outside safe context</span>}
        </div>
      </div >
    </div>
  );
};

export default ConnectWallet;
