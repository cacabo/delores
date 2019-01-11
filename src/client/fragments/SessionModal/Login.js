import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { registerSessionModal } from '../../actions/sessionActions';
import { Input } from '../../components/forms';
import { Btn } from '../../components';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };

    this.isDisabled = this.isDisabled.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  isDisabled() {
    const { email, password } = this.state;

    if (!email || !password) return true;
    if (email.length > 1000 || password.length > 1000) return true;

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
    const { dispatchRegisterSessionModal } = this.props;
    const { email, password } = this.state;

    return (
      <>
        <h2>Welcome back</h2>

        <form onSubmit={this.handleSubmit}>
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

          <Btn input value="Login" disabled={this.isDisabled()} />
        </form>

        <p>
          {'Don\'t have an account?'}
          <a onClick={dispatchRegisterSessionModal}> {/* eslint-disable-line */}
            Register.
          </a>
        </p>
      </>
    );
  }
}

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
