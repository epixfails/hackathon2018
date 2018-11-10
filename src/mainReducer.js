import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { authReducer } from './features/Auth';
import { profileReducer } from './features/Profile';
import { booksReducer } from './features/BookShelf';

export const mainReducer = history =>
  combineReducers({
    auth: authReducer,
    router: connectRouter(history),
    profile: profileReducer,
    books: booksReducer,
  });
