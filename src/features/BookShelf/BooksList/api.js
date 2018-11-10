import axios from 'axios';

export const getBooksListRequest = () => axios.get(`books`);
