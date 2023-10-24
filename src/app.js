const express  = require('express');
const connectDBs = require('./db');
const Classes = require('./classes');
const front = require('./index');
const Todo = require('./todo');

const app = express();
app.use(express.json());

connectDBs();
// export default class App {
//     constructor(public name: string, public price: number, public category: string, public id?: ObjectId) {}
// }
app.get('/', (req, res) => {
    res.send("สวัสดีครับท่านผู้ชม ขอต้อนรับสู่ island แยากมีแฟ้น is a chance ในดินแดนมหัศจรรย์");
  });
app.get('/classes', async (req, res) => {
    try {
        let classesInDb = await Classes.find();
        res.json(classesInDb);
    }
    catch (err) {
        res.status(500).send(err.message);
    }
})

app.post('/classes', async (req, res) => {
    try {
        const {classId, section, subject, classDay, startTime, endTime} = req.body;
        const klass = new Classes({classId, section, subject, classDay, startTime, endTime});
        await klass.save();
        res.json({success: true});
    }
    catch (err) {
        res.status(500).send(err.message);
    }
})

app.put('/classes:id', async (req, res) => {
    try {
        const klass = await Classes.findByIdAndUpdate(req.params.id, req.body, {new: true});
        if (!klass) throw new Error("Class not found");
        res.json({success: true})
        
    }
    catch (err) {
        res.status(500).send(err.message);
    }
})

app.delete('/classes:id', async (req, res) => {
    try {
        const klass = await Classes.findByIdAndDelete(req.params.id);
        if (!klass) throw new Error("Class not found");
        res.json({success: true})
        
    }
    catch (err) {
        res.status(500).send(err.message);
    }
})
//TodoAPI
app.get('/todos', async (req, res) => {
    try {
      const todosInDb = await Todo.find();
      res.json(todosInDb);
    } catch (err) {
      res.status(500).send(err.message);
    }
  });
  
  app.post('/todos', async (req, res) => {
    try {
      const { todoId, classId, topic, detail, dueDate } = req.body;
      const todo = new Todo({ todoId, classId, topic, detail, dueDate });
      await todo.save();
      res.json({ success: true });
    } catch (err) {
      res.status(500).send(err.message);
    }
  });
  
  app.put('/todos/:id', async (req, res) => {
    try {
      const todo = await Todo.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!todo) throw new Error("Todo not found");
      res.json({ success: true });
    } catch (err) {
      res.status(500).send(err.message);
    }
  });
  
  app.delete('/todos/:id', async (req, res) => {
    try {
      const todo = await Todo.findByIdAndDelete(req.params.id);
      if (!todo) throw new Error("Todo not found");
      res.json({ success: true });
    } catch (err) {
      res.status(500).send(err.message);
    }
  });
  


const port = 555;

app.listen(port, () => {
    console.log("API server started on port " + port);
})