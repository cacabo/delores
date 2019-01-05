import * as types from './actionTypes';

export function changeRadiusType(radiusType) {
  return {
    type: types.CHANGE_RADIUS_TYPE,
    radiusType,
  };
}

export function changeRadius(radius) {
  return {
    type: types.CHANGE_RADIUS,
    radius,
  };
}
