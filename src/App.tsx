import {
  useSafeAppConnection,
  SafeAppConnector,
} from '@gnosis.pm/safe-apps-web3-react';
import React, { FC } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { RenderRoutes } from './components/RenderRoutes';

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
        <RenderRoutes />
      </BrowserRouter>
    </>
  );
};

export default App;
