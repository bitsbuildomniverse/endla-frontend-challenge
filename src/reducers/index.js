import { combineReducers } from 'redux';

import { wellProfileApi } from '../services/wellProfile';

export default combineReducers({
  [wellProfileApi.reducerPath]: wellProfileApi.reducer,
});
