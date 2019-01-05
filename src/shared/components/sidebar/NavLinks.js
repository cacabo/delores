import React from 'react';
import { Link } from 'react-router-dom';

import { HOME_PATH, HOSPITALS_PATH, APP_PATH } from '../../routes';

export default () => (
  <div className="links">
    <Link to={HOME_PATH}>Home</Link>
    <Link to={APP_PATH}>App</Link>
    <Link to={HOSPITALS_PATH}>Hospitals</Link>
  </div>
);
