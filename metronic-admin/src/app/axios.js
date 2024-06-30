import axios from "axios";

const baseURL = import.meta.env.VITE_DOG_API_URL;
const axiosInstance = axios.create({
  baseURL,
  timeout: 2000,
});

axiosInstance.interceptors.request.use(
  config => {
    config.headers.set('App-type', "React.js");
    config.headers.set('x-api-key', import.meta.env.VITE_X_API_KEY);
    
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);
axiosInstance.interceptors.response.use(
  response => response,
  async error => {
    return Promise.reject(error);
  },
);

export default axiosInstance;