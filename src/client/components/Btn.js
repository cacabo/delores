import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import s from 'styled-components';
import { WHITE } from '../constants/colors';

const styles = `
  padding: 0.75rem 1rem;
  font-weight: bold;
  color: ${WHITE} !important;
`;

const StyledLink = s(Link)`${styles}`;

const StyledInput = s.input`${styles}`;

export const Btn = ({
  to,
  children,
  input,
  value,
  disabled,
}) => {
  const className = disabled ? 'btn btn-primary disabled' : 'btn btn-primary';

  if (input) {
    return (
      <StyledInput
        type="submit"
        value={value || children}
        className={className}
      />
    );
  }

  return (
    <StyledLink
      to={to}
      className={className}
    >
      {children}
    </StyledLink>
  );
};

Btn.defaultProps = {
  to: '',
  input: false,
  value: '',
  children: '',
  disabled: false,
};

Btn.propTypes = {
  value: PropTypes.string,
  input: PropTypes.bool,
  to: PropTypes.string,
  children: PropTypes.any, // eslint-disable-line
  disabled: PropTypes.bool,
};
