import cookies from 'js-cookie';
import axios from 'axios';
import { API_URL, APP_URL } from './constants';

export const redirect = url => {
  window.location.href = url;
};

export const logout = () => {
  cookies.remove('token');
  window.location.href = APP_URL;
};

export const setDefaultHeaders = () => {
  const token = cookies.get('token');

  axios.defaults.baseURL = API_URL;

  if (token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  }
};
