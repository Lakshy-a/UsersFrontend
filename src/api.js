import axios from 'axios';

const API_URL = 'http://localhost:3000/auth'; 

export const signup = (userData) => {
  return axios.post(`${API_URL}/signup`, userData);
};

export const login = (userData) => {
  return axios.post(`${API_URL}/login`, userData);
};