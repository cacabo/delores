import React from 'react';
import { Link } from 'react-router-dom';
import s from 'styled-components';

import { HOME_PATH, HOSPITALS_PATH, APP_PATH } from '../../routes';
import { WHITE } from '../../constants/colors';

const Links = s.div`
  padding-top: 0.1rem;
  margin-left: auto;
  width: auto;
  display: inline-block;
`;

const StyledLink = s(Link)`
  color: ${WHITE};
  opacity: 0.8;
  margin-left: 1rem;
  text-decoration: none;

  &:visited {
    color: ${WHITE};
    opacity: 0.8;
    text-decoration: none;
  }

  &:hover,
  &:active,
  &:focus {
    color: ${WHITE};
    opacity: 1;
    text-decoration: none;
  }
`;

export default () => (
  <Links>
    <StyledLink to={HOME_PATH}>Home</StyledLink>
    <StyledLink to={APP_PATH}>App</StyledLink>
    <StyledLink to={HOSPITALS_PATH}>Hospitals</StyledLink>
  </Links>
);
