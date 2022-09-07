import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import { ROUTES } from '../../config/routes';

export const Dashboard: FC = () => {
  return (
    <div>
      <h1>Donate to military Buggy</h1>
      <h3>Multiply your donation by x3</h3>
      <Link
        to={ROUTES.MintPage}>
        <button>Shut up and take my money!</button>
      </Link>
      <p>Buggy is manufactured...</p>
      <Link
        to={ROUTES.MintPage}>
        <button>Open app</button>
      </Link>
    </div>
  );
};
