/* eslint-disable prefer-object-spread */
import axios from 'axios';

/**
 * Classe base para a criação de serviços
 * Está é uma classe abstrata, é necessário herdar de BaseService para utiliza-la
 */

axios.defaults.baseURL = 'https://conduit.productionready.io/api';

export default class BaseService {
  constructor(domain) {
    this.domain = domain;
  }

  /**
   * Metodo responsavel por realizar um get por id.
   * @param {*} id
   */
  get(id) {
    return axios.get(`${this.domain}/${id}`).then((response) => response.data);
  }

  /**
   * Metodo responsavel por realizar um post simples.
   * @param {*} id
   * @param {*} path
   */
  post(data, subPath = null) {
    const fullPath = (subPath) ? `${this.domain}/${subPath}` : this.domain;
    const promise = axios.post(fullPath, data);
    return promise.then((response) => response.data);
  }

  /**
   * Metodo responsavel por realizar um get com filtros.
   * @param {*} filters
   */
  query(filters = {}) {
    return axios
      .get(this.domain, {
        params: filters,
      })
      .then((response) => response.data);
  }

  /**
   * Metodo responsavel por realizar um get com filtros e paginado.
   * @param {*} filters
   * @param {*} perPage
   * @param {*} page
   */

  /**
   * Metodo responsavel por realizar um post ou put.
   * Caso o objeto possua id ele realiza put.
   * @param {*} data
   */
  save(data, reqConfig = {}, subPath = null) {
    let promise = null;
    const id = (data instanceof FormData) ? data.get('id') : data.id;
    const fullPath = (subPath) ? `${this.domain}/${subPath}` : this.domain;
    if (id === undefined || id === null) {
      promise = axios.post(fullPath, data, reqConfig);
    } else {
      promise = axios.put(`${fullPath}/${id}`, data, reqConfig);
    }

    return promise.then((response) => response.data);
  }

  /**
   * Metodo responsavel por realizar um metodo de delete.
   * @param {*} id
   */
  destroy(id) {
    return axios.delete(`${this.domain}/${id}`).then((response) => response.data);
  }

  /**
   * Metodo responsavel por realizar requests dinamicos.
   * @param {*} method
   * @param {*} path
   * @param {*} data
   * @param {*} options
   */
  request(method, path, data = {}, options = {}) {
    return BaseService.request(method, `${this.domain}/${path}`, data, options);
  }

  static request(method, path, data = {}, options = {}) {
    const defaultOptions = Object.assign(
      { url: path, overridePath: false },
      options,
      { method, data },
    );

    if (defaultOptions.overridePath) defaultOptions.url = path;
    delete defaultOptions.overridePath;

    return axios.request(defaultOptions).then((response) => response.data);
  }
}

export abstract class AbstractRestService<T> {
  constructor(protected _http: Http, protected actionUrl:string){
  }

  getAll():Observable<T[]> {
    return this._http.get(this.actionUrl).map(resp=>resp.json() as T[]);
  }
  getOne(id:number):Observable<T> {
    return this._http.get(`${this.actionUrl}${id}`).map(resp=>resp.json() as T);
  }
}
