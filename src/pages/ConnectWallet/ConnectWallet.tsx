import { useWeb3React } from '@web3-react/core';
import React from 'react';
import { useState } from 'react';

import { uauth, gnosisconnect } from '../../helper/connectors';

const ConnectWallet = () => {
  const { activate, deactivate, account } = useWeb3React();
  const [user, setUser] = useState<string>();
  const [isGnosisError, setGnosisError] = useState(false);

  async function connectGnosis() {
    await activate(gnosisconnect);
    const isSafeApp = await gnosisconnect.isSafeApp();

    if (!isSafeApp) {
      setGnosisError(true);
    } else {
      setGnosisError(false);
    }
  }

  async function handleLogin() {
    await activate(uauth);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const userObj = JSON.parse(uauth.options.uauth.store.storage.username);
    if (userObj.value) {
      setUser(userObj.value);
    }
  }

  async function handleLogout() {
    deactivate();
    setUser('');
    setGnosisError(false);
  }

  return (
    <div>
      {user && <span>Connected user: {user}</span>}
      {account && !user && <span>Connected account: {account}</span>}
      <button onClick={handleLogin}>ConnectWallet</button>
      <button onClick={connectGnosis}>Connect Gnosis</button>
      <button onClick={handleLogout}>Disconnect wallet</button>
      {isGnosisError && <span>The app is loaded outside safe context</span>}
    </div>
  );
};

export default ConnectWallet;
