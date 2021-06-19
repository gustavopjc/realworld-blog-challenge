import Vue from 'vue';

import {
  AxiosInstance, AxiosError, AxiosRequestConfig, AxiosResponse,
} from 'axios';
import { setAutencationToken } from './onRequestInterceptors';
import { validationErrors } from './onResponseErrorInterceptor';
import { getAutencationToken } from './onResponseInterceptor';

const onRequest = (config: AxiosRequestConfig): AxiosRequestConfig => {
  setAutencationToken(config);
  return config;
};

const onResponse = (response: AxiosResponse): AxiosResponse => {
  getAutencationToken(response);
  return response;
};

const onResponseError = (error: AxiosError): AxiosError => {
  validationErrors(error);
  return error;
};

export function setupInterceptorsTo(axiosInstance: AxiosInstance): AxiosInstance {
  axiosInstance.interceptors.request.use(onRequest);
  axiosInstance.interceptors.response.use(onResponse, onResponseError);
  return axiosInstance;
}
