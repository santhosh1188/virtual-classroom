// models/comment.model.js
const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    session_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Session' },
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    content: String,
    parent_comment_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Comment' },
    timestamp: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Comment', commentSchema);