import { AxiosRequestConfig } from 'axios';
import store from '@/store';

export function setAutencationToken(config: AxiosRequestConfig) {
  const { token } = store.getters.getCurrentUser;
  if (token) {
    config.headers.Authorization = `Token ${token}`;
  }
}
