import { combineReducers } from 'redux';
import locationReducer from './locationReducer';
import sidebarReducer from './sidebarReducer';
import mapReducer from './mapReducer';

const rootReducer = combineReducers({
  locationState: locationReducer,
  sidebarState: sidebarReducer,
  mapState: mapReducer,
});

export default rootReducer;
