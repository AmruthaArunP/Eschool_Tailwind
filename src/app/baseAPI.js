import Axios from "axios";

const API_URL = process.env.URL || "http://localhost:8000/api";

const createInstance = (URL) => {
  const instance = Axios.create({
    baseURL: URL,
    headers: {
      Authorization: `Bearer ${localStorage.getItem('studentManagment') || ""}`,
    },
  });

  // Add an interceptor to update headers before each request
  instance.interceptors.request.use(
    (config) => {
      // Update Authorization header with the latest token
      config.headers.Authorization = `Bearer ${localStorage.getItem('studentManagment') || ""}`;
      // Add other dynamic headers as needed
      return config;
    },
    (error) => {
      return error;
    }
  );

  return instance;
};

export const backendAPI = createInstance(API_URL);
