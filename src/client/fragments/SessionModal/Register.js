import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { loginSessionModal, closeSessionModal } from '../../actions/sessionActions';
import { registerUser } from '../../actions/userActions';
import { Input } from '../../components/forms';
import { Btn, Heading, ErrorMessage } from '../../components';

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
    };

    this.isDisabled = this.isDisabled.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidUpdate(prevProps) {
    const { user, token, pending } = this.props;

    if (pending) return;

    const prevUser = prevProps.user;
    const prevToken = prevProps.token;

    if (prevUser && prevToken) return;
    if (!user || !token) return;

    const { dispatchCloseSessionModal } = this.props;
    dispatchCloseSessionModal();
  }

  isDisabled() {
    const {
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
    } = this.state;

    if (
      !firstName
      || !lastName
      || !email
      || !password
      || !confirmPassword
    ) return true;

    if (
      firstName.length > 1000
      || lastName.length > 1000
      || email.length > 1000
      || password.length > 1000
      || confirmPassword.length > 1000
    ) return true;

    if (password !== confirmPassword) return true;

    return false;
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    if (this.isDisabled()) return;

    const { dispatchRegisterUser } = this.props;
    const {
      email,
      password,
      firstName,
      lastName,
      confirmPassword,
    } = this.state;

    dispatchRegisterUser({
      email,
      password,
      firstName,
      lastName,
      confirmPassword,
    });
  }

  render() {
    const {
      dispatchLoginSessionModal,
      error,
      pending,
    } = this.props;
    const {
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
    } = this.state;

    return (
      <>
        <Heading>Get started</Heading>

        <form onSubmit={this.handleSubmit}>
          <ErrorMessage message={error} />

          <Input
            label="First name"
            value={firstName}
            name="firstName"
            type="text"
            placeholder=""
            handleChange={this.handleChange}
          />

          <Input
            label="Last name"
            value={lastName}
            name="lastName"
            type="text"
            placeholder=""
            handleChange={this.handleChange}
          />

          <Input
            label="Email"
            value={email}
            name="email"
            type="email"
            placeholder=""
            handleChange={this.handleChange}
          />

          <Input
            label="Password"
            value={password}
            name="password"
            type="password"
            placeholder=""
            handleChange={this.handleChange}
          />

          <Input
            label="Confirm password"
            value={confirmPassword}
            name="confirmPassword"
            type="password"
            placeholder=""
            handleChange={this.handleChange}
          />

          <Btn
            input
            value={pending ? 'Registering...' : 'Register'}
            disabled={this.isDisabled() || pending}
          />
        </form>

        <p>
          Already have an account?
          <a onClick={dispatchLoginSessionModal}> {/* eslint-disable-line */}
            Login.
          </a>
        </p>
      </>
    );
  }
}

Register.defaultProps = {
  token: null,
  user: null,
};

Register.propTypes = {
  dispatchLoginSessionModal: PropTypes.func.isRequired,
  dispatchCloseSessionModal: PropTypes.func.isRequired,
  dispatchRegisterUser: PropTypes.func.isRequired,
  token: PropTypes.string,
  user: PropTypes.object, // eslint-disable-line
  pending: PropTypes.bool.isRequired,
};

const mapStateToProps = ({ userState }) => (userState);

const mapDispatchToProps = dispatch => ({
  dispatchLoginSessionModal: () => dispatch(loginSessionModal()),
  dispatchCloseSessionModal: () => dispatch(closeSessionModal()),
  dispatchRegisterUser: data => dispatch(registerUser(data)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Register);
