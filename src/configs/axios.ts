import axios, { AxiosInstance } from "axios";
import environments from "./environments";

const axiosInstance: AxiosInstance = axios.create({
  baseURL: environments.baseUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
