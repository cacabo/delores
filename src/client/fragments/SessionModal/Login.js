import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { registerSessionModal, closeSessionModal } from '../../actions/sessionActions';
import { loginUser } from '../../actions/userActions';
import { Input } from '../../components/forms';
import { Btn, ErrorMessage } from '../../components';

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

    const { dispatchLoginUser } = this.props;

    const { email, password } = this.state;

    dispatchLoginUser({ email, password });
  }

  render() {
    const {
      dispatchRegisterSessionModal,
      error,
      pending,
    } = this.props;

    const { email, password } = this.state;

    return (
      <>
        <h2>Welcome back</h2>

        <form onSubmit={this.handleSubmit}>
          <ErrorMessage message={error} />

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

          <Btn
            input
            value={pending ? 'Logging in...' : 'Login'}
            disabled={this.isDisabled() || pending}
          />
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

Login.defaultProps = {
  error: '',
  user: null,
  token: null,
};

Login.propTypes = {
  dispatchRegisterSessionModal: PropTypes.func.isRequired,
  dispatchLoginUser: PropTypes.func.isRequired,
  dispatchCloseSessionModal: PropTypes.func.isRequired,
  pending: PropTypes.bool.isRequired,
  error: PropTypes.string,
  user: PropTypes.object, // eslint-disable-line
  token: PropTypes.string,
};

const mapStateToProps = ({ userState }) => (userState);

const mapDispatchToProps = dispatch => ({
  dispatchRegisterSessionModal: () => dispatch(registerSessionModal()),
  dispatchCloseSessionModal: () => dispatch(closeSessionModal()),
  dispatchLoginUser: data => dispatch(loginUser(data)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);
