import React, { FC } from 'react';
import { useRoutes } from 'react-router-dom';

import { ROUTES_CONFIG } from '../AppRoutes';

export const RenderRoutes: FC = () => {
  const routes = useRoutes(ROUTES_CONFIG);
  return <>{routes}</>;
};
