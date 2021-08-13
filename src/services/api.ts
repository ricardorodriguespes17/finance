import axios from "axios";

export const TOKEN = process.env.REACT_APP_IEX_TOKEN;

const api = axios.create({
  baseURL: "https://cloud.iexapis.com/stable",
});

export default api;
