import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const registerUser = async (username, password) => {
    const response = await axios.post(`${API_URL}/register`, { username, password });
    return response.data;
};

export const loginUser = async (username, password) => {
    const response = await axios.post(`${API_URL}/login`, { username, password });
    return response.data;
};

export const checkUser = async (username) => {
    const response = await axios.post(`${API_URL}/checkUser`, { username });
    return response.data;
};
