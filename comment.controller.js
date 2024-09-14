// controllers/comment.controller.js
const Comment = require('../models/comment.model');

// Add a comment
exports.addComment = async (req, res) => {
    const { session_id, content, parent_comment_id } = req.body;
    const newComment = new Comment({ session_id, user_id: req.user.id, content, parent_comment_id });
    await newComment.save();
    res.status(201).json(newComment);
};

// Get comments for a session
exports.getComments = async (req, res) => {
    const comments = await Comment.find({ session_id: req.params.session_id });
    res.json(comments);
};