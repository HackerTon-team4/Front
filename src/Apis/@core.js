import axios from "axios";
import Token from "../LocalStorage/token";

export const Axios = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
  headers: {
    Authorization: `Bearer ${Token.getToken()}`,
  },
});
