import initialState from './initialState';
import {
  USER_LOGIN_REQUESTED,
  USER_LOGIN_REJECTED,
  USER_LOGIN_FULFILLED,
  USER_REGISTER_REQUESTED,
  USER_REGISTER_REJECTED,
  USER_REGISTER_FULFILLED,
  USER_LOGOUT,
} from '../actions/actionTypes';

const userReducer = (state = initialState.userState, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUESTED:
      return {
        pending: true,
        user: null,
      };

    case USER_LOGIN_REJECTED:
      return {
        pending: false,
        error: action.error || 'There was an error logging you in.',
      };

    case USER_LOGIN_FULFILLED:
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
      return {
        pending: false,
        token: null,
        error: action.error || 'There was an error registering you.',
      };

    case USER_REGISTER_FULFILLED:
      return {
        pending: false,
        token: action.token || {},
        user: action.user || {},
      };

    case USER_LOGOUT:
      return initialState.userState;

    default:
      return state;
  }
};

export default userReducer;
