// src/api/auth.api.js
const API_URL = 'http://localhost:5000/api/auth';

export const register = async (userData) => {
    const response = await fetch(`${API_URL}/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
    });
    return response.json();
};

export const login = async (credentials) => {
    const response = await fetch(`${API_URL}/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
    });
    return response.json();
};