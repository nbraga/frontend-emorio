import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_HOST_API,
  headers: {
    "content-type": "application/json",
  },
});

export default api;
