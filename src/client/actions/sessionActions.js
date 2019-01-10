import {
  CLOSE_SESSION_MODAL,
  LOGIN_SESSION_MODAL,
  REGISTER_SESSION_MODAL,
} from './actionTypes';

export const closeSessionModal = () => ({ type: CLOSE_SESSION_MODAL });

export const loginSessionModal = () => ({ type: LOGIN_SESSION_MODAL });

export const registerSessionModal = () => ({ type: REGISTER_SESSION_MODAL });
