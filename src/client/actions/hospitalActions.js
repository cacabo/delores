import axios from 'axios';

import {
  GET_HOSPITALS_REJECTED,
  GET_HOSPITALS_FULFILLED,
  GET_HOSPITALS_REQUESTED,
} from './actionTypes';
import { GET_HOSPITALS_PATH } from '../routes';

export function getHospitals(token) {
  return async (dispatch) => {
    dispatch({
      type: GET_HOSPITALS_REQUESTED,
    });

    const authStr = 'bearer '.concat(token);

    axios.get(GET_HOSPITALS_PATH, {
      headers: { Authorization: authStr },
    })
      .then((res) => {
        dispatch({
          type: GET_HOSPITALS_FULFILLED,
          hospitals: res.data.hospitals,
        });
      })
      .catch((error) => {
        dispatch({
          type: GET_HOSPITALS_REJECTED,
          error: error.message || 'There was an error pulling hospitals data',
        });
      });
  };
}
