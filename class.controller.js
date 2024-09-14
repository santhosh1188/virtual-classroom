// controllers/class.controller.js
const Class = require('../models/class.model');

// Create a new class
exports.createClass = async (req, res) => {
    const { class_name } = req.body;
    const newClass = new Class({ class_name, created_by: req.user.id });
    await newClass.save();
    res.status(201).json(newClass);
};

// Get all classes
exports.getClasses = async (req, res) => {
    const classes = await Class.find();
    res.json(classes);
};