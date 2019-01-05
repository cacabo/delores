import initialState from './initialState';
import {
  CHANGE_RADIUS_TYPE,
  CHANGE_RADIUS,
} from '../actions/actionTypes';

const mapReducer = (state = initialState.mapState, action) => {
  const newState = Object.assign({}, state);

  switch (action.type) {
    case CHANGE_RADIUS_TYPE:
      newState.radiusType = action.radiusType;
      return newState;

    case CHANGE_RADIUS:
      newState.radius = action.radius;
      return newState;

    default:
      return state;
  }
};

export default mapReducer;
