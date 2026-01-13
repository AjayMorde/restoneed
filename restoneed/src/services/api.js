// import axios from 'axios';

// const api = axios.create({
//   baseURL: 'http://localhost:5000/api',
// });

// export default api;

import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 
    "https://restoneed-backend-dev.onrender.com/api",
});

export default api;
