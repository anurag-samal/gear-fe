import axios from "axios";

import { ApiError } from "./api.types";

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,

  withCredentials: true,

  headers: {
    "Content-Type": "application/json",
  },

  timeout: 10000,
});

api.interceptors.response.use(
  (response) => response,

  (error) => {
    if (error.response) {
      throw new ApiError(
        error.response.data?.error ??
          error.response.data?.message ??
          "Something went wrong.",
        error.response.status,
      );
    }

    if (error.request) {
      throw new ApiError(
        "Unable to connect to the server.",
        0,
      );
    }

    throw new ApiError(
      error.message,
      0,
    );
  },
);