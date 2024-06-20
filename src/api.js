import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://date.nager.at/api/v3',
  timeout: 10000, // Timeout 10s
  headers: {
    'Content-Type': 'application/json',
  },
});

export default instance;