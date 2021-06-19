import { AxiosResponse } from 'axios';

export function getAutencationToken(response: AxiosResponse) {
  if (response.headers.authorization) {
    const token = response.headers.authorization;
    window.localStorage.setItem('Token', token);
  }
}
