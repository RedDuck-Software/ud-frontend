import React, { FC } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { RenderRoutes } from './components/RenderRoutes';

const App: FC = () => {
  return (
    <>
      <BrowserRouter>
        <RenderRoutes />
      </BrowserRouter>
    </>
  );
};

export default App;
