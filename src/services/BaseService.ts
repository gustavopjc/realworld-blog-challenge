/* eslint-disable */
import axios from 'axios';
import { setupInterceptorsTo } from '@/interceptors/AxiosInterceptor';


export default class BaseService {
  constructor(protected path:string) {
    axios.defaults.baseURL = 'https://conduit.productionready.io/api';
    this.path = path;
    setupInterceptorsTo(axios);
  }

  getOne(id:number, filters = {}) {
    return axios.get(`${this.path}/${id}`).then((response) => response.data);
  }

  getAll(filters = {}) {
    return axios.get(`${this.path}`, {
      params: filters,
    }).then((response) => response.data);
  }

  post(subPath = '', data: any) {
    const fullPath = (subPath) ? `${this.path}/${subPath}` : this.path;
    const promise = axios.post(fullPath, data);
    return promise.then((response) => response.data);
  }
}
