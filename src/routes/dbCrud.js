//unused

// const express  = require('express');
// const connectDBs = require('../persistance/db');
// const Classes = require('../persistance/classes');
// const Todo = require('../persistance/todo');
// const port = 544;
// const app = express();
// app.use(express.json());
// 
// connectDBs();
// 
// app.use((req, res, next) => {
//     res.setHeader('Access-Control-Allow-Origin', 'http://localhost:555');
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
//     res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
//     res.setHeader('Access-Control-Allow-Credentials', 'true');
//     next();
// });
// 
// app.get('/', async (req, res) => {
//     await res.sendFile('index.html', { root: "./src/static"});
//   });
// app.get('/classes', async (req, res) => {
//     try {
//         let classesInDb = await Classes.find();
//         res.json(classesInDb);
//     }
//     catch (err) {
//         res.status(500).send(err.message);
//     }
// })
// 
// app.post('/classes', async (req, res) => {
//     try {
//         const {classId, section, subject, classDay, startTime, endTime} = req.body;
//         const klass = new Classes({classId, section, subject, classDay, startTime, endTime});
//         await klass.save();
//         res.json({success: true});
//     }
//     catch (err) {
//         res.status(500).send(err.message);
//     }
// })
// 
// app.put('/classes:id', async (req, res) => {
//     try {
//         const klass = await Classes.findByIdAndUpdate(req.params.id, req.body, {new: true});
//         if (!klass) throw new Error("Class not found");
//         res.json({success: true})
//         
//     }
//     catch (err) {
//         res.status(500).send(err.message);
//     }
// })
// 
// app.delete('/classes:id', async (req, res) => {
//     try {
//         const klass = await Classes.findByIdAndDelete(req.params.id);
//         if (!klass) throw new Error("Class not found");
//         res.json({success: true})
//         
//     }
//     catch (err) {
//         res.status(500).send(err.message);
//     }
// })
// //TodoAPI
// app.get('/todos', async (req, res) => {
//     try {
//       const todosInDb = await Todo.find();
//       res.json(todosInDb);
//     } catch (err) {
//       res.status(500).send(err.message);
//     }
//   });
//   
//   app.post('/todos', async (req, res) => {
//     try {
//       const { todoId, classId, topic, detail, dueDate } = req.body;
//       const todo = new Todo({ todoId, classId, topic, detail, dueDate });
//       await todo.save();
//       res.json({ success: true });
//     } catch (err) {
//       res.status(500).send(err.message);
//     }
//   });
//   
//   app.put('/todos/:id', async (req, res) => {
//     try {
//       const todo = await Todo.findByIdAndUpdate(req.params.id, req.body, { new: true });
//       if (!todo) throw new Error("Todo not found");
//       res.json({ success: true });
//     } catch (err) {
//       res.status(500).send(err.message);
//     }
//   });
//   
//   app.delete('/todos/:id', async (req, res) => {
//     try {
//       const todo = await Todo.findByIdAndDelete(req.params.id);
//       if (!todo) throw new Error("Todo not found");
//       res.json({ success: true });
//     } catch (err) {
//       res.status(500).send(err.message);
//     }
//   });
//   
// 
// app.listen(port, () => {
//     console.log("API server started on port " + port);
// })
// 
// module.exports = app;