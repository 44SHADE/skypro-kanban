import axios from "axios";
import { getUserFromLocalStorage } from "../../../utils/localStorage";

const apiUrl = import.meta.env.VITE_BASE_URL || "https://wedev-api.sky.pro/api";

const axiosInstance = axios.create({
  baseURL: apiUrl,
  headers: {
    "Content-Type": " ",
  },
});

axiosInstance.interceptors.request.use(function (config) {
  const user = getUserFromLocalStorage();
  if(user) config.headers.Authorization = `Bearer ${user.token}`;
  return config;
})
export default axiosInstance;