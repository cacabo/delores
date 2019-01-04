import initialState from './initialState';
import { CHANGE_LOCATION } from '../actions/actionTypes';

const locationReducer = (state = initialState.locationState, action) => {
  let newState;

  switch(action.type) {
    case CHANGE_LOCATION:
      newState = action.location;
      return newState;

    default:
      return state;
  }
};

export default locationReducer;
