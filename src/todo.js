const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    todoId: { type: String, required: true }, 
    classId: { type: String, required: true }, 
    topic: { type: String, required: true }, 
    detail: String, 
    dueDate: { type: String, required: true },
    comment: String
});

const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;
