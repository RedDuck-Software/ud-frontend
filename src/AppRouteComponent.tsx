import React, { FC } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

import { ROUTES } from './config/routes';

export const AppRouteComponent: FC = () => {
  return (
    <div>
      <div>
        <NavLink to={ROUTES.App}>App</NavLink>
        <br />
        <NavLink to={ROUTES.Dashboard}>Dashboard</NavLink>
        <br />
        <NavLink to={ROUTES.ConnectWallet}>Connect Wallet</NavLink>
      </div>
      <Outlet />
    </div>
  );
};
