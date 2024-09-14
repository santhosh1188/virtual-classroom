// models/user.model.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    email: { type: String, unique: true },
    password: String,
    role: { type: String, default: 'Student' },
});

module.exports = mongoose.model('User', userSchema);