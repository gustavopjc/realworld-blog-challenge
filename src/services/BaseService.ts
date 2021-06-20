/* eslint-disable */
import axios, { AxiosResponse } from 'axios';
import { setupInterceptorsTo } from '@/interceptors/AxiosInterceptor';


export default class BaseService {
  constructor(protected path:string) {
    axios.defaults.baseURL = 'https://conduit.productionready.io/api';
    this.path = path;
    setupInterceptorsTo(axios);
  }

  getOne(identifier:any) {
    return axios.get(`${this.path}/${identifier}`).then((response) => response.data);
  }

  get(filters = {}) {
    return axios.get(`${this.path}`, {
      params: filters,
    }).then((response) => response.data);
  }

  post(data= {}, subPath = '') {
    const fullPath = (subPath) ? `${this.path}/${subPath}` : this.path;
    const promise = axios.post(fullPath, data);
    return promise.then((response) => response.data);
  }

  delete(data= {}, subPath = '') {
    const fullPath = (subPath) ? `${this.path}/${subPath}` : this.path;
    const promise = axios.delete(fullPath, data);
    return promise.then((response) => response.data);
  }

  save(data: any, subPath = '') {
    const fullPath = (subPath) ? `${this.path}/${subPath}` : this.path;
    let promise: Promise<AxiosResponse<any>>;
    if (data.id) {
      promise = axios.put(fullPath, data);
    } else {
      promise = axios.post(fullPath, data);
    }
    return promise.then((response) => response.data);
  }
}
