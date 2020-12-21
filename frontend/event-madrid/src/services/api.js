import axios from 'axios';
import * as urlsApi from 'constants/endpoints';
const API = axios.create({
  baseURL: urlsApi.URL_API,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default API;
