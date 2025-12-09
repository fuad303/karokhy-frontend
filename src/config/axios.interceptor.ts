import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
  withCredentials: true,
});
// REQUEST INTERCEPTOR
api.interceptors.request.use(
  (config) => {
    console.log("url;", config.baseURL);
    return config;
  },
  (error) => Promise.reject(error)
);

// RESPONSE INTERCEPTOR
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 401) {
      window.location.href = "/login";
    }
    if (error.response.status === 403) {
      console.log(
        "Use the custom model to tell the user they don't have access to this part"
      );
    }
    return Promise.reject(error);
  }
);

export default api;
