import axios from "axios";

const apiUrl = import.meta.env.VITE_BASE_URL || "https://wedev-api.sky.pro/api";

const axiosInstance = axios.create({
  baseURL: apiUrl,
  headers: {
    "Content-Type": " ",
  },
});

axiosInstance.defaults.headers.common["Authorization"] =
  "Bearer " + import.meta.env.VITE_API_TOKEN || " ";

export default axiosInstance;