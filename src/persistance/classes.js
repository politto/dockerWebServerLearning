//class
let { time } = require('console');
mongoose = require('mongoose');


const classesSchema = new mongoose.Schema(
    {
        classId: {
            type: String,
            required: true
        },
        section: {
            type: String,
            required: false
        },
        subject: {
            type: String,
            required: true
        },
        classDay: {
            type: String,
            required: true
        },
        startTime : {
            type: String,
            required: true
        },
        endTime : {
            type : String,
            required: true
        }

    });

const classes = mongoose.model('Class', classesSchema);

module.exports = classes;