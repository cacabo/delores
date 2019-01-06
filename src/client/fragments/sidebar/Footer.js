import React from 'react';
import s from 'styled-components';

import { GRAY } from '../../constants/colors';

const Footer = s.footer`
  padding-top: 1.5rem;
  color: ${GRAY};

  p {
    margin-bottom: 0;
    font-size: 0.8rem;

    a {
      text-decoration: underline;
      color: ${GRAY} !important;
    }
  }
`;

export default () => (
  <Footer>
    <p>
      Delores &copy; 2018, all rights reserved.
      <br />
      Developed by&nbsp;
      <a href="https://www.cameroncabo.com">Cameron Cabo.</a>
    </p>
  </Footer>
);
