import axios from "axios";

export const instanceLogin = axios.create({
  baseURL: "https://tensor-project-backend.onrender.com",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

export const instanceRegister = axios.create({
  baseURL: "https://tensor-project-backend.onrender.com",
  headers: {
    "Content-Type": "application/json",
  },
});

export const getCity = axios.create({
  baseURL: "https://tensor-project-backend.onrender.com",
  headers: {
    "Content-Type": "application/json",
  },
});

export const instanceWeather = axios.create({
  baseURL: "https://tensor-project-backend.onrender.com",
  headers: {
    "Content-Type": "application/json",
  },
});
