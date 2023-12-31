const express  = require('express');
const connectDB = require('./db.ts');
const Classes = require('./Classes.ts');

const app = express();
app.use(express.json());

connectDB();

app.get('./classes', async (req, res) => {
    try {
        let classesInDb = await Classes.find();
        res.json(classesInDb);
    }
    catch (err) {
        res.status(500).send(err.message);
    }
})

app.post('./classes', async (req, res) => {
    try {
        const {classId, section, subject, date, startTime, endTime} = req.body;
        const klass = new Classes({classId, section, subject, date, startTime, endTime});
        await Classes.save();
        res.json({success: true});
    }
    catch (err) {
        res.status(500).send(err.message);
    }
})

app.put('./classes:id', async (req, res) => {
    try {
        const klass = await Classes.findByIdAndUpdate(req.params.id, req.body, {new: true});
        if (!klass) throw new Error("Class not found");
        res.json({success: true})
        
    }
    catch (err) {
        res.status(500).send(err.message);
    }
})

app.delete('./classes:id', async (req, res) => {
    try {
        const klass = await Classes.findByIdAndDelete(req.params.id);
        if (!klass) throw new Error("Class not found");
        res.json({success: true})
        
    }
    catch (err) {
        res.status(500).send(err.message);
    }
})


const port = 555;

app.listen(port, () => {
    console.log("API server started on port " + port);
})