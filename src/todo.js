const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    todoId: { type: String, required: true }, 
    classId: { type: String, required: true }, 
    topic: { type: String, required: true }, 
    detail: String, 
    dueDate: { type: Date, required: true } 
});

const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;
