import { message as $toast } from 'antd';
import axios, { AxiosError, AxiosRequestConfig } from 'axios';

import globalData from './globalData';

export interface RequestConfig extends AxiosRequestConfig {
  skipHandlerError?: boolean;
}

export interface ErrorResponseData {
  code: string;
  message: string;
  error: string;
}

axios.interceptors.request.use(
  (config) => {
    config.headers = Object.assign(
      {
        'X-Requested-With': 'XMLHttpRequest',
      },
      config.headers,
    );
    config.url = config.url && /^https?:\/\//.test(config.url) ? config.url : `${globalData.baseUrl}${config.url}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error: AxiosError) => {
    const config = error.config;
    const { skipHandlerError = false } = config as RequestConfig;
    if (skipHandlerError) {
      return Promise.reject(error);
    }

    const response = error.response;
    const { status, data = {} } = response || {};
    let { message = '请求异常' } = data as ErrorResponseData;

    switch (status) {
      case 401:
        // message = '暂无访问权限';
        // history.replace('/user/login');
        break;
      case 403:
        message = '请求被拒绝';
        break;
      case 404:
        message = '访问资源不存在';
        break;
      case 405:
        message = '请求接口无效';
        break;
      case 500:
        message = '服务器出现异常';
        break;
      case 502:
      case 504:
        message = '服务器维护中，请稍后访问';
        break;
      default:
    }

    $toast.error(message);
    return Promise.reject(error);
  },
);

async function request<T extends any>(url: string, config?: RequestConfig) {
  const { data } = await axios<T>(url, config);
  return data;
}

export default request;
