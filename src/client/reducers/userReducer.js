/* globals window */

import initialState from './initialState';
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
} from '../actions/actionTypes';

const Store = window.localStorage;

const clearToken = () => {
  Store.removeItem('token');
};

const setToken = (token) => {
  Store.setItem('token', token);
};

const userReducer = (state = initialState.userState, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUESTED:
      return {
        pending: true,
        user: null,
        token: null,
      };

    case USER_LOGIN_REJECTED:
      clearToken();
      return {
        pending: false,
        error: action.error || 'There was an error logging you in.',
      };

    case USER_LOGIN_FULFILLED:
      setToken(action.token);
      return {
        pending: false,
        user: action.user || {},
        token: action.token || {},
      };

    case USER_REGISTER_REQUESTED:
      return {
        pending: true,
        user: null,
        token: null,
      };

    case USER_REGISTER_REJECTED:
      clearToken();
      return {
        pending: false,
        token: null,
        error: action.error || 'There was an error registering you.',
      };

    case USER_REGISTER_FULFILLED:
      setToken(action.token);
      return {
        pending: false,
        token: action.token || {},
        user: action.user || {},
      };

    case USER_LOGOUT:
      return initialState.userState;

    case USER_REHYDRATE_REQUESTED:
      return Object.assign({}, initialState.userState, { pending: true });

    case USER_REHYDRATE_REJECTED:
      clearToken();
      return initialState.userState;

    case USER_REHYDRATE_FULFILLED:
      setToken(action.token);
      return {
        pending: false,
        token: action.token || {},
        user: action.user || {},
      };

    default:
      return state;
  }
};

export default userReducer;
