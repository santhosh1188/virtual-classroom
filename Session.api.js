// src/api/session.api.js
const API_URL = 'http://localhost:5000/api/sessions';

export const fetchSessions = async (classId) => {
    const response = await fetch(`${API_URL}/${classId}`);
    return response.json();
};

export const createSession = async (sessionData) => {
    const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(sessionData),
    });
    return response.json();
};