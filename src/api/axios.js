import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000", // backend của bạn
});

export default api;
