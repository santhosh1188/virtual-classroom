// controllers/session.controller.js
const Session = require('../models/session.model');

// Create a new session
exports.createSession = async (req, res) => {
    const { unit_id, session_name, lecture_content } = req.body;
    const newSession = new Session({ unit_id, session_name, lecture_content });
    await newSession.save();
    res.status(201).json(newSession);
};

// Get sessions for a class
exports.getSessions = async (req, res) => {
    const sessions = await Session.find({ unit_id: req.params.class_id });
    res.json(sessions);
};