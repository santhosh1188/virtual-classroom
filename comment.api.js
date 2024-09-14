// src/api/comment.api.js
const API_URL = 'http://localhost:5000/api/comments';

export const fetchComments = async (sessionId) => {
    const response = await fetch(`${API_URL}/${sessionId}`);
    return response.json();
};

export const addComment = async (commentData) => {
    const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(commentData),
    });
    return response.json();
};