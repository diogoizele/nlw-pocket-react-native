import axios from "axios";

export const client = axios.create({
  baseURL: "http://192.168.0.105:3333",
  timeout: 7000,
});
