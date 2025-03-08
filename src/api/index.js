import axios from 'axios';
import config from '../config';

const API = axios.create({
  baseURL: config.backendUrl,
  headers: {
    'Content-Type': 'application/json',
  },
});

API.interceptors.request.use((config) => {
  const token = sessionStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const login = (credentials) => API.post('/login', credentials);
export const register = (data) => API.post('/register', data);
// Add more API calls as needed