import { useWeb3React } from '@web3-react/core';
import React from 'react';
import { useState } from 'react';

import { uauth } from '../../helper/connectors';

const ConnectWallet = () => {
  const { activate, deactivate } = useWeb3React();
  const [user, setUser] = useState<string>();

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
  }

  return (
    <div>
      <span>Connected user: {user}</span>
      <button onClick={handleLogin}>ConnectWallet</button>
      <button onClick={handleLogout}>Disconnect wallet</button>
    </div>
  );
};

export default ConnectWallet;
