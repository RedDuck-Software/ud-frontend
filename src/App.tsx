import {
  useSafeAppConnection,
  SafeAppConnector,
} from '@gnosis.pm/safe-apps-web3-react';
import React, { FC } from 'react';
import { Routes, Route } from 'react-router-dom';

import LandingPage from './pages/LandingPage/LandingPage';
import MintPage from './pages/MintPage/MintPage';

const safeMultisigConnector = new SafeAppConnector();

const App: FC = () => {
  const triedToConnectToSafe = useSafeAppConnection(safeMultisigConnector);

  React.useEffect(() => {
    if (triedToConnectToSafe) {
      console.log('It tries to connect');
    }
  }, [triedToConnectToSafe]);

  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/mint-page" element={<MintPage />} />
      </Routes>
    </>
  );
};

export default App;
