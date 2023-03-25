const mongoose = require('mongoose');

// designing schema for todo
const todoSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true
    }
});

const ToDo = mongoose.model('ToDo', todoSchema);

// exporting the Schema
module.exports = ToDo; 