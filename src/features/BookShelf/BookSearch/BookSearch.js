import React from 'react';
import { AddBook } from './components/AddBook';

export const BookSearch = ({ setBookSearch, setSelectedBook, search }) => (
  <AddBook
    setBookSearch={setBookSearch}
    search={search}
    setSelectedBook={setSelectedBook}
  />
);
