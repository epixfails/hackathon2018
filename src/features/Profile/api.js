import axios from 'axios';
import { setDefaultHeaders } from '../../common/utils';

setDefaultHeaders();

export const fetchProfileRequest = () => axios.get(`/users/current`);
