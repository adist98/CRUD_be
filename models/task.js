const mongoose = require("mongoose");

// Schema defines how the data will be stored in the database
const todoSchema = new mongoose.Schema({
    task_description: {
        type: String,
        required: true
    }
})

const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;
