import * as types from './actionTypes';

export function changeLocation(location) {
  return {
    type: types.CHANGE_LOCATION,
    location,
  };
}
