import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { registerSessionModal } from '../../actions/sessionActions';

const Login = ({ dispatchRegisterSessionModal }) => (
  <>
    <h1>This is the login form</h1>
    <p>
      {'Don\'t have an account?'}
      <a onClick={dispatchRegisterSessionModal}> {/* eslint-disable-line */}
        Register.
      </a>
    </p>
  </>
);

Login.propTypes = {
  dispatchRegisterSessionModal: PropTypes.func.isRequired,
};

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  dispatchRegisterSessionModal: () => dispatch(registerSessionModal()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);
