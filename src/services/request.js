import axios from "axios";

import { BASE_URL, TIMEOUT } from "./config";

const instance = axios.create({
  baseURL: BASE_URL,
  timeout: TIMEOUT,
  withCredentials: true
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
  (res) => {
    return res.data;
  },
  (err) => {
    if (err && err.response) {
      switch (err.response.status) {
        case 400:
          Promise.reject("Request Error");
          break;
        case 401:
          Promise.reject("No authorization");
          break;
        case 504:
          Promise.reject("server getway out");
          break;
        default:
          Promise.reject("Unknow Error");
      }
    }
    return err;
  }
);

export default instance;
