import { combineReducers } from 'redux';

import locationReducer from './locationReducer';
import sidebarReducer from './sidebarReducer';
import mapReducer from './mapReducer';
import hospitalsReducer from './hospitalsReducer';
import sessionReducer from './sessionReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  locationState: locationReducer,
  sidebarState: sidebarReducer,
  mapState: mapReducer,
  hospitalsState: hospitalsReducer,
  sessionState: sessionReducer,
  userState: userReducer,
});

export default rootReducer;
