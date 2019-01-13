import React from 'react';

import { RowSpace, Heading, Btn } from '../../components';

export default () => (
  <div className="container">
    <RowSpace />
    <Heading>404!</Heading>
    <p>The page you were looking for was not found</p>
    <Btn to="/">Back to home</Btn>
  </div>
);
