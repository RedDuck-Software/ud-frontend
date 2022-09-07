import React from 'react';
import { RouteObject } from 'react-router-dom';

import App from '../../App';
import { ROUTES } from '../../config/routes';
import ConnectWallet from '../../pages/ConnectWallet/ConnectWallet';
import LandingPage from '../../pages/LandingPage/LandingPage';
import MintPage from '../../pages/MintPage/MintPage';

export const ROUTES_CONFIG: RouteObject[] = [
  {
    children: [
      {
        path: ROUTES.MintPage,
        element: <MintPage />,
        caseSensitive: true,
      },
      {
        path: ROUTES.ConnectWallet,
        element: <ConnectWallet />,
        caseSensitive: true,
      },
    ],
  },
];
