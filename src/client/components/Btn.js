import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import s from 'styled-components';

const StyledLink = s(Link)`
  padding: 0.75rem 1rem;
  font-weight: bold;
`;

export const Btn = ({ to, children }) => (
  <StyledLink to={to} className="btn btn-primary">
    {children}
  </StyledLink>
);

Btn.defaultProps = {
  to: '',
};

Btn.propTypes = {
  to: PropTypes.string,
  children: PropTypes.any.isRequired, // eslint-disable-line
};
