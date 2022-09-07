import React from 'react';
import { Navigate, RouteObject } from 'react-router-dom';

import { AppRouteComponent } from '../../AppRouteComponent';
import { ROUTES } from '../../config/routes';
import ConnectWallet from '../../pages/ConnectWallet/ConnectWallet';
import MintPage from '../../pages/MintPage/MintPage';

export const ROUTES_CONFIG: RouteObject[] = [
  {
    path: ROUTES.App,
    element: <AppRouteComponent />,
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
      {
        path: '*',
        element: <Navigate to={ROUTES.Dashboard} replace />,
      },
    ],
  },
  {
    path: '*',
    element: <Navigate to={ROUTES.Dashboard} replace />,
  },
];
