import { Web3Provider } from '@ethersproject/providers';
import {
  useSafeAppConnection,
  SafeAppConnector,
} from '@gnosis.pm/safe-apps-web3-react';
import { Web3ReactProvider } from '@web3-react/core';
import React, { FC } from 'react';
import { Routes, Route } from 'react-router-dom';

import LandingPage from './pages/LandingPage/LandingPage';
import MintPage from './pages/MintPage/MintPage';
import StatisticPage from './pages/StatisticPage/Statistic';

const safeMultisigConnector = new SafeAppConnector();

const App: FC = () => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment, @typescript-eslint/no-explicit-any
  function getLibrary(provider: any) {
    return new Web3Provider(provider);
  }

  const triedToConnectToSafe = useSafeAppConnection(safeMultisigConnector);

  React.useEffect(() => {
    if (triedToConnectToSafe) {
      console.log('It tries to connect');
    }
  }, [triedToConnectToSafe]);

  return (
    <>
      <Web3ReactProvider getLibrary={getLibrary}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/mint-page" element={<MintPage />} />
          <Route path="/statistic-page" element={<StatisticPage />} />
        </Routes>
      </Web3ReactProvider>
    </>
  );
};

export default App;
