// models/session.model.js
const mongoose = require('mongoose');

const sessionSchema = new mongoose.Schema({
    unit_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Unit' },
    session_name: String,
    lecture_content: String,
});

module.exports = mongoose.model('Session', sessionSchema);