import axios from 'axios';
// import store from '_redux/store'; // Import the store
// import {logout} from '_redux/auth'; // Import the logout action

const BASE_URL = 'http://localhost:4000'; // Change this to the port you're using for json-server

const api = axios.create({
  baseURL: BASE_URL,
});

api.interceptors.request.use(
  (config) => {
    // Please note i've disabled this just to avoid cros issue since i dont have a BE server here
    // let token = localStorage.getItem('token');
    // console.log({token});
    // if (token) {
    //   config.headers.Authorization = `${token}`; // Add token to headers
    // }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      localStorage.removeItem('token');
      window.location.href = '/auth/login'; // Redirect to login page
    }
    return Promise.reject(error);
  }
);

export default api;
