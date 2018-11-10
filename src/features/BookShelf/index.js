import { combineReducers } from 'redux';
import { booksListReducer } from './BooksList';
import { addBookSearchReducer } from './BookSearch';

export { BooksListContainer as BooksList } from './container';
export { BookShelf } from './BookShelf';

export const booksReducer = combineReducers({
  add: addBookSearchReducer,
  list: booksListReducer,
});
