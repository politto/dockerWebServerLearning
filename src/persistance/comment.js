const mongoose = require('mongoose');

const comemntSchema = new mongoose.Schema(
    {
        commentId: {
            type: String,
            required: true
        },
        classId: {
            type: String,
            required: true
        },
        comment: {
            type: String,
            required: true
        },
        commentDate: {
            type: String,
            required: true
        },
    });

const Comment = mongoose.model('Comment', comemntSchema);

module.exports = Comment;