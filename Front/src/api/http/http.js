import axios from "axios";
import config from "../../config";

const instance = axios.create({
  baseURL: config.baseURL,
  timeout: 1000
});

// 添加请求拦截器
instance.interceptors.request.use(
  // success
  function(config) {
    return config;
  },
  // error
  function(error) {
    return Promise.reject(error);
  }
);

// 添加响应拦截器
instance.interceptors.response.use(
  // success
  function(response) {
    return response.data;
  },
  // error
  function() {
    return {
      message: "网络故障，连接失败！"
    };
  }
);

const HttpService = instance;

export default HttpService;
