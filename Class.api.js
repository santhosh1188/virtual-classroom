// src/api/class.api.js
const API_URL = 'http://localhost:5000/api/classes';

export const fetchClasses = async () => {
    const response = await fetch(API_URL);
    return response.json();
};

export const createClass = async (classData) => {
    const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(classData),
    });
    return response.json();
};