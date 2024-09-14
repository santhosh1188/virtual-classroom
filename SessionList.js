// src/components/SessionList.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchSessions } from '../api/session.api';

const SessionList = () => {
    const { classId } = useParams();
    const [sessions, setSessions] = useState([]);

    useEffect(() => {
        const getSessions = async () => {
            const data = await fetchSessions(classId);
            setSessions(data);
        };
        getSessions();
    }, [classId]);

    return (
        <div>
            <h2>Sessions for Class ID: {classId}</h2>
            <ul>
                {sessions.map(session => (
                    <li key={session._id}>{session.session_name}</li>
                ))}
            </ul>
        </div>
    );
};

export default SessionList;