import axios from 'axios';

const apiUrl = "https://pokeapi.co/api/v2/pokemon/?limit=12";

export const api = axios.create({
  baseURL: apiUrl,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json'
  },
});
