import axios, { AxiosError } from "axios";
import { errorNotifier } from "./event-notifier";
import type { ErrorType } from "../interfaces/error.interface";



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
  (error: AxiosError<ErrorType>) => {
    if (!error.response) {
      errorNotifier.publish({
        statusCode: 500,
        message: "مطمین شوید به انترنت متصل هستید",
      });
      return Promise.reject(error);
    }

    const { status, data } = error.response;

    if (status === 401) {
      window.location.href = "/login";
      return Promise.reject(error);
    }

    errorNotifier.publish({
      statusCode: status >= 500 ? 500 : status,
      message: data.message,
    });

    return Promise.reject(error);
  }
);

export default api;
