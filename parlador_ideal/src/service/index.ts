import axios from 'axios';
import Async from '@react-native-async-storage/async-storage';

export const service = axios.create({
  baseURL: 'http://127.0.0.1:3333',
});

service.interceptors.request.use(async function (config) {
  const token = await Async.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});
