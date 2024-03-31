import axios from 'axios'


const instance = axios.create({
  baseURL: 'api/',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest'
  },
  timeout: 30 * 1000,
  // withCredentuals: true
});

// 添加请求拦截器
instance.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
  if(response.status === 200){
    return response.data.data;
  }
  return response
}, function (error) {
  return Promise.reject(error);
});

export default instance
