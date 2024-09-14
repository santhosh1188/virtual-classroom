// routes/class.route.js
const express = require('express');
const { createClass, getClasses } = require('../controllers/class.controller');
const router = express.Router();
const authMiddleware = require('../middleware/auth');

router.post('/', authMiddleware, createClass);
router.get('/', authMiddleware, getClasses);

module.exports = router;