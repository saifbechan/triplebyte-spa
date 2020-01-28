import { combineReducers } from 'redux';

import bytesReducer from './bytes/bytes.reducer';

export default combineReducers({
  bytes: bytesReducer
});
