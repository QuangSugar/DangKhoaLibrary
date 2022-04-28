import axios from "axios";
import { BACKEND_URL } from "../constants/config";

const axiosClient = axios.create({
  baseURL: BACKEND_URL,
});
axiosClient.interceptors.request.use((config) => { //tất cả request đều phải qua đây 
  const access_token = localStorage.getItem("access_token");
  if (access_token) {
    config.headers.common.Authorization = `${access_token}`;
  }
  return config;
})

export default axiosClient;
