import axios from "axios";

const api = axios.create({
  baseURL: "https://constock-api.herokuapp.com"
});

export default api;