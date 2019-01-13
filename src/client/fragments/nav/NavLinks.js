import React from 'react';
import { Link } from 'react-router-dom';
import s from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { HOME_PATH, HOSPITALS_PATH, APP_PATH } from '../../routes';
import { WHITE } from '../../constants/colors';
import { loginSessionModal, registerSessionModal } from '../../actions/sessionActions';
import { logoutUser } from '../../actions/userActions';

const Links = s.div`
  padding-top: 0.1rem;
  margin-left: auto;
  width: auto;
  display: inline-block;
`;

const styles = `
  color: ${WHITE};
  opacity: 0.8;
  margin-left: 1rem;
  text-decoration: none;
  cursor: pointer;

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

const StyledSpan = s.span`${styles}`;

const StyledLink = s(Link)`${styles}`;

const NavLinks = ({
  dispatchLoginSessionModal,
  dispatchRegisterSessionModal,
  dispatchLogoutUser,
  token,
}) => (
  <Links>
    <StyledLink to={HOME_PATH}>Home</StyledLink>
    {(token) ? (
      <>
        <StyledLink to={APP_PATH}>App</StyledLink>
        <StyledLink to={HOSPITALS_PATH}>Hospitals</StyledLink>
        <StyledSpan onClick={dispatchLogoutUser}>Logout</StyledSpan>
      </>
    ) : (
      <>
        <StyledSpan onClick={dispatchLoginSessionModal}>Login</StyledSpan>
        <StyledSpan onClick={dispatchRegisterSessionModal}>Register</StyledSpan>
      </>
    )}
  </Links>
);

NavLinks.defaultProps = {
  token: '',
};

NavLinks.propTypes = {
  dispatchLoginSessionModal: PropTypes.func.isRequired,
  dispatchRegisterSessionModal: PropTypes.func.isRequired,
  dispatchLogoutUser: PropTypes.func.isRequired,
  token: PropTypes.string,
};

const mapStateToProps = ({ userState }) => (userState);

const mapDispatchToProps = dispatch => ({
  dispatchLoginSessionModal: () => dispatch(loginSessionModal()),
  dispatchRegisterSessionModal: () => dispatch(registerSessionModal()),
  dispatchLogoutUser: () => dispatch(logoutUser()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NavLinks);
