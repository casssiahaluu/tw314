import axios from "axios";
import { getToken } from "./auth";

const now = new Date();

// For dev
// const api = axios.create({
//   baseURL: "http://127.0.0.1:8080"
// });

// For prod
const api = axios.create({
  baseURL: "https://tw-mock-api.herokuapp.com"
});

api.interceptors.request.use(async config => {
  const token = getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  if (config.method === "post")
    config.data = {...config.data, createdAt: now.toISOString(), updatedAt: now.toISOString()};
  if (config.method === "put")
    config.data = {...config.data, updatedAt: now.toISOString()};
  
  return config;
});

export default api;