import { combineReducers } from 'redux';

import { routing } from './routing.reducers.js'

const rootReducer = combineReducers({
  routing,
});

export default rootReducer;