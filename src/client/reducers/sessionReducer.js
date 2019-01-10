import initialState from './initialState';
import {
  CLOSE_SESSION_MODAL,
  LOGIN_SESSION_MODAL,
  REGISTER_SESSION_MODAL,
} from '../actions/actionTypes';

const sessionReducer = (state = initialState.sessionState, action) => {
  const newState = Object.assign({}, state);

  switch (action.type) {
    case CLOSE_SESSION_MODAL:
      newState.registerModal = false;
      newState.loginModal = false;
      return newState;

    case LOGIN_SESSION_MODAL:
      newState.loginModal = true;
      newState.registerModal = false;
      return newState;

    case REGISTER_SESSION_MODAL:
      newState.loginModal = false;
      newState.registerModal = true;
      return newState;

    default:
      return state;
  }
};

export default sessionReducer;
