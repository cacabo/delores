import axios from 'axios';

import {
  USER_LOGIN_REQUESTED,
  USER_LOGIN_REJECTED,
  USER_LOGIN_FULFILLED,
  USER_REGISTER_REQUESTED,
  USER_REGISTER_REJECTED,
  USER_REGISTER_FULFILLED,
  USER_LOGOUT,
} from './actionTypes';

export function logoutUser() {
  return USER_LOGOUT;
}

export function registerUser({
  email,
  password,
  firstName,
  lastName,
  confirmPassword,
}) {
  return async (dispatch) => {
    dispatch({
      type: USER_REGISTER_REQUESTED,
    });

    try {
      axios.post('/api/users/login', {
        email,
        password,
        firstName,
        lastName,
        confirmPassword,
      })
        .then((res) => {
          dispatch({
            type: USER_REGISTER_FULFILLED,
            user: res.data.user,
            token: res.data.token,
          });
        });
    } catch (error) {
      dispatch({
        type: USER_REGISTER_REJECTED,
        error: error.message || 'There was an error registering you.',
      });
    }
  };
}

export function loginUser({ email, password }) {
  return async (dispatch) => {
    dispatch({
      type: USER_LOGIN_REQUESTED,
    });

    try {
      axios.post('/api/users/login', { email, password })
        .then((res) => {
          dispatch({
            type: USER_LOGIN_FULFILLED,
            user: res.data.user,
            token: res.data.token,
          });
        });
    } catch (error) {
      dispatch({
        type: USER_LOGIN_REJECTED,
        error: error.message || 'There was an error logging you in.',
      });
    }
  };
}
