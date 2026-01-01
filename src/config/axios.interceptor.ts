import axios, { AxiosError } from "axios";
import { errorNotifier } from "./event-notifier";

const api = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
  withCredentials: true,
});
// REQUEST INTERCEPTOR
api.interceptors.request.use(
  (config) => {
    const token = sessionStorage.getItem("token");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// RESPONSE INTERCEPTOR
api.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    if (error.response) {
      const status = error.response.status;

      if (status === 400) {
        errorNotifier.publish({
          statusCode: 400,
          message: "Form is not complete",
        });
      }

      if (status === 401) {
        window.location.href = "/login";
      }

      if (status === 404) {
        errorNotifier.publish({
          statusCode: 404,
          message: "Resource not found do u understand!",
        });
      }

      if (status >= 500) {
        errorNotifier.publish({
          statusCode: 500,
          message: "Internal server error.",
        });
      }

      return Promise.reject(error);
    } else {
      errorNotifier.publish({
        statusCode: 500,
        message: "مطمین شوید به انترنت متصل هستید",
      });

      return Promise.reject(error);
    }
  }
);

export default api;
