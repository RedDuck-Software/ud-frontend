import {
  useSafeAppConnection,
  SafeAppConnector,
} from '@gnosis.pm/safe-apps-web3-react';
import React, { FC } from 'react';
import { BrowserRouter } from 'react-router-dom';

import LandingPage from './pages/LandingPage/LandingPage';

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
      <BrowserRouter>
        <LandingPage />
      </BrowserRouter>
    </>
  );
};

export default App;
