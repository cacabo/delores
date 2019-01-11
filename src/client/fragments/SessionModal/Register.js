import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { loginSessionModal } from '../../actions/sessionActions';

const Register = ({ dispatchLoginSessionModal }) => (
  <>
    <h1>This is the register form</h1>
    <p>
      Already have an account?
      <a onClick={dispatchLoginSessionModal}> {/* eslint-disable-line */}
        Login.
      </a>
    </p>
  </>
);

Register.propTypes = {
  dispatchLoginSessionModal: PropTypes.func.isRequired,
};

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  dispatchLoginSessionModal: () => dispatch(loginSessionModal()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Register);
