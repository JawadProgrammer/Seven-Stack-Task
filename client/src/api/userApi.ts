import axios from "axios";
import Cookie from "js-cookie";

const baseURL = import.meta.env.VITE_AUTH_URL;

console.log("baseURL: ", baseURL);

const userAPI = axios.create({
  baseURL,
});

userAPI.interceptors.request.use(
  (config) => {
    const token = Cookie.get("token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default userAPI;
