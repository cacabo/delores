import initialState from './initialState';
import { TOGGLE_SIDEBAR } from '../actions/actionTypes';

const sidebarReducer = (state = initialState.sidebarState, action) => {
  let newState;

  switch(action.type) {
    case TOGGLE_SIDEBAR:
      newState = Object.assign({}, state);
      newState.active = !newState.active;
      return newState;

    default:
      return state;
  }
};

export default sidebarReducer;
