import { combineReducers } from 'redux';
import locationReducer from './locationReducer';
import sidebarReducer from './sidebarReducer';
import mapReducer from './mapReducer';
import hospitalsReducer from './hospitalsReducer';

const rootReducer = combineReducers({
  locationState: locationReducer,
  sidebarState: sidebarReducer,
  mapState: mapReducer,
  hospitalsState: hospitalsReducer,
});

export default rootReducer;
