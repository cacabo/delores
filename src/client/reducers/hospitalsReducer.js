import initialState from './initialState';
import {
  GET_HOSPITALS_REQUESTED,
  GET_HOSPITALS_REJECTED,
  GET_HOSPITALS_FULFILLED,
} from '../actions/actionTypes';

const hospitalsReducer = (state = initialState.hospitalsState, action) => {
  switch (action.type) {
    case GET_HOSPITALS_REQUESTED:
      return {
        pending: true,
        hospitals: null,
      };

    case GET_HOSPITALS_REJECTED:
      return {
        pending: false,
        error: action.error || 'There was an error',
      };

    case GET_HOSPITALS_FULFILLED:
      return {
        pending: false,
        hospitals: action.hospitals || {},
      };

    default:
      return state;
  }
};

export default hospitalsReducer;
