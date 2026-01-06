import qs from "qs";

import { AxiosRequestConfig } from "axios";
const axiosConfig: AxiosRequestConfig = {
  baseURL: process.env.BACK_END_URL,
  headers: {}, //??
  withCredentials: true, //??
  paramsSerializer: (param) => qs.stringify(param, { indices: false }), //??
};

export default axiosConfig;
