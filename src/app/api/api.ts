import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.github.com', // Base URL GitHub API
  headers: {
    Accept: 'application/vnd.github.v3+json',
  },
});

export default api;