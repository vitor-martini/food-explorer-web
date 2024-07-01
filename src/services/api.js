import axios from "axios";

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true
});

api.interceptors.response.use(
  response => response,
  error => {
    const { response } = error;
    if (response.status === 401) {
      localStorage.removeItem("@food-explorer:user");
      window.location.reload();
    }

    return Promise.reject(error); 
  }
);