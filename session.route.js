// routes/session.route.js
const express = require('express');
const { createSession, getSessions } = require('../controllers/session.controller');
const router = express.Router();
const authMiddleware = require('../middleware/auth');

router.post('/', authMiddleware, createSession);
router.get('/:class_id', authMiddleware, getSessions);

module.exports = router;