import cookies from 'js-cookie';
import axios from 'axios';
import { API_URL } from './constants';

export const redirect = url => {
  window.location.href = url;
};

export const setDefaultHeaders = () => {
  const token = cookies.get('token');

  axios.defaults.baseURL = API_URL;

  if (token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  }
};
