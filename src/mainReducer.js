import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { authReducer } from './features/Auth';

export const mainReducer = history =>
  combineReducers({
    auth: authReducer,
    router: connectRouter(history),
  });
