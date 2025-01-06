import axios from 'axios';

const apiUrl = "https://narutodb.xyz/api";

export const api = axios.create({
  baseURL: apiUrl,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json'
  },
});
