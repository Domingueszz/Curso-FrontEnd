import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000', // seu backend local
});

export default api;
