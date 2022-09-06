import React from 'react';
import { Navigate, RouteObject } from 'react-router-dom';

import { AppRouteComponent } from '../../AppRouteComponent';
import { ROUTES } from '../../config/routes';
import { Dashboard } from '../../pages/Dashboard/Dashboard';

export const ROUTES_CONFIG: RouteObject[] = [
  {
    path: ROUTES.App,
    element: <AppRouteComponent />,
    children: [
      {
        path: ROUTES.Dashboard,
        element: <Dashboard />,
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
