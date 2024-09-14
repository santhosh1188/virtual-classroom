// routes/comment.route.js
const express = require('express');
const { addComment, getComments } = require('../controllers/comment.controller');
const router = express.Router();
const authMiddleware = require('../middleware/auth');

router.post('/', authMiddleware, addComment);
router.get('/:session_id', authMiddleware, getComments);

module.exports = router;