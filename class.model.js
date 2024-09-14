// models/class.model.js
const mongoose = require('mongoose');

const classSchema = new mongoose.Schema({
    class_name: String,
    created_by: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});

module.exports = mongoose.model('Class', classSchema);