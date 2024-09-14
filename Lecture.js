// src/components/Lecture.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchComments } from '../api/comment.api';

const Lecture = () => {
    const { sessionId } = useParams();
    const [comments, setComments] = useState([]);

    useEffect(() => {
        const getComments = async () => {
            const data = await fetchComments(sessionId);
            setComments(data);
        };
        getComments();
    }, [sessionId]);

    return (
        <div>
            <h2>Lecture for Session ID: {sessionId}</h2>
            <h3>Comments:</h3>
            <ul>
                {comments.map(comment => (
                    <li key={comment._id}>{comment.content}</li>
                ))}
            </ul>
        </div>
    );
};

export default Lecture;