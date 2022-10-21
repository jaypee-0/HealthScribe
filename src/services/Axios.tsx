import axios from "axios";

const instance = axios.create({
  baseURL: 'https://healthscribe.herokuapp.com/api',
  headers: {
    "Content-Type": "application/json",
    withCredentials: true,
  },
});

instance.defaults.xsrfHeaderName = "X-CSRF-Token";

export default instance;