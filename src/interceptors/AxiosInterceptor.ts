/* eslint-disable */
import {
  AxiosInstance, AxiosError, AxiosRequestConfig, AxiosResponse,
} from 'axios';
import Vue from 'vue';
import store from '@/store';

const onRequest = (config: AxiosRequestConfig): AxiosRequestConfig => {
  const token = store.state.Auth.currentUser.token;
  if (token) {
    config.headers['Authorization'] = 'Token ' + token;
  }
  return config;
};

const onRequestError = (error: AxiosError): Promise<AxiosError> => {
  return Promise.reject(error);
};

const onResponse = (response: AxiosResponse): AxiosResponse => {
  if (response.headers.authorization) {
    const token = response.headers.authorization;
    window.localStorage.setItem('Token', token);
  }
  return response;
};

const onResponseError = (error: AxiosError): Promise<AxiosError> => {
  if(error.response?.data.errors) {
    Object.entries(error.response?.data.errors).forEach(([key, value]) => {
      Vue.$toast.error(key + '' +  value);
    })
  }
  return Promise.reject(error);
};

export function setupInterceptorsTo(axiosInstance: AxiosInstance): AxiosInstance {
  axiosInstance.interceptors.request.use(onRequest, onRequestError);
  axiosInstance.interceptors.response.use(onResponse, onResponseError);
  return axiosInstance;
}
