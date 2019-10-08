import { combineReducers } from 'redux';

import { routing } from './routing.reducers.js';
import { auth } from './auth.reducers.js';
import { device } from './device.reducers.js';

const rootReducer = combineReducers({
  routing,
  auth,
  device,
});

export default rootReducer;