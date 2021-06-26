import axios from 'axios';
import { getToken } from '../Utils';

export const baseURL = 'https://backend.yogshem.com';
export const commonHeaders = {
  Accept: 'application/json',
  'Content-Type': 'application/json'
};

export const server = axios.create({
  baseURL,
  timeout: 30000,
  headers: commonHeaders
});

server.interceptors.request.use(
  (config) => {
    const token = getToken();
    if (token) config.headers.Authorization = 'Bearer ' + token;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

server.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(
      error.response && error.response.data && error.response.data.error
    );
  }
);
