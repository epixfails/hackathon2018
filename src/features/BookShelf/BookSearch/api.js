import axios from 'axios';

export const fetchSuggestionsRequest = query =>
  axios.get(`/books/search?q=${query}`);

export const setBookSelectedRequest = payload =>
  axios.post(`books/link`, payload);
