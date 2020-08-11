import axios from 'axios';
import store from '@/store/index';
import qs from 'qs';

const BASE_URL=process.env.VUE_APP_API;
axios.defaults.baseURL =BASE_URL;
axios.defaults.timeout = 30000;
const instance = axios.create({
  headers: { 'Content-Type': 'application/json' },
  transformRequest: [
    (data) => {
      if (data instanceof FormData) {
        return data;
      }
      return JSON.stringify(data);
    },
  ],
  withCredentials: true,
});

instance.interceptors.request.use(
  (config) => {
  
    return config;
  },
  (err) => {
 
    return Promise.reject(err);
  }
);

instance.interceptors.response.use(
  (response) => {
    //非200code 页面弹出错误提示窗口
    if (response.data.code && response.data.code != 200) {
    
    }
    return response.data;
  },
  (error) => {
    //后端抛错处理
    if (error && error.response) {
      const status = error.response.status;
      if (status >= 500) {
        return Promise.reject(error.response);
      }
    
    }
    return Promise.reject(error.response);
  }
);
export const http = instance;
