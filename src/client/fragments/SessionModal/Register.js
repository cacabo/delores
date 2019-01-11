import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { loginSessionModal } from '../../actions/sessionActions';
import { Input } from '../../components/forms';
import { Btn } from '../../components';

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

    console.log('Submitted'); // eslint-disable-line
    console.log(this.state); // eslint-disable-line
  }

  render() {
    const { dispatchLoginSessionModal } = this.props;
    const {
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
    } = this.state;

    return (
      <>
        <h2>Get started</h2>

        <form onSubmit={this.handleSubmit}>
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

          <Btn input value="Register" disabled={this.isDisabled()} />
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
