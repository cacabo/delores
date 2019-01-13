/* globals window */

import axios from 'axios';

import {
  USER_LOGIN_REQUESTED,
  USER_LOGIN_REJECTED,
  USER_LOGIN_FULFILLED,
  USER_REGISTER_REQUESTED,
  USER_REGISTER_REJECTED,
  USER_REGISTER_FULFILLED,
  USER_LOGOUT,
  USER_REHYDRATE_REQUESTED,
  USER_REHYDRATE_REJECTED,
  USER_REHYDRATE_FULFILLED,
} from './actionTypes';
import { LOGIN_PATH, REGISTER_PATH, REHYDRATE_PATH } from '../routes';

const Store = window.localStorage;

export const logoutUser = () => ({ type: USER_LOGOUT });

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

    axios.post(REGISTER_PATH, {
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
      })
      .catch((error) => {
        dispatch({
          type: USER_REGISTER_REJECTED,
          error: error.message || 'There was an error registering you.',
        });
      });
  };
}

export function loginUser({ email, password }) {
  return async (dispatch) => {
    dispatch({
      type: USER_LOGIN_REQUESTED,
    });

    axios.post(LOGIN_PATH, { email, password })
      .then((res) => {
        dispatch({
          type: USER_LOGIN_FULFILLED,
          user: res.data.user,
          token: res.data.token,
        });
      })
      .catch((error) => {
        dispatch({
          type: USER_LOGIN_REJECTED,
          error: error.message || 'There was an error logging you in.',
        });
      });
  };
}

export function rehydrate() {
  const token = Store.getItem('token');

  if (!token) {
    return ({ type: USER_REHYDRATE_REJECTED });
  }

  return async (dispatch) => {
    dispatch({ type: USER_REHYDRATE_REQUESTED });

    const authStr = 'bearer '.concat(token);

    axios.get(REHYDRATE_PATH, {
      headers: { Authorization: authStr },
    })
      .then((res) => {
        dispatch({
          type: USER_REHYDRATE_FULFILLED,
          user: res.data.user,
          token,
        });
      })
      .catch(() => {
        dispatch({ type: USER_REHYDRATE_REJECTED });
      });
  };
}
