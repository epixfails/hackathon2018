import { createSelector } from 'reselect';
import { bookStatus } from '../constants';

const listSelector = state => state.books.list;

export const booksListSelector = createSelector(listSelector, list => ({
  personal: list.filter(book => book.categoryId === bookStatus.personal),
  free: list.filter(book => book.categoryId === bookStatus.free),
  read: list.filter(book => book.categoryId === bookStatus.reading),
}));
