const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
    task_description: {
        type: String,
        required: true
    }
})

const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;