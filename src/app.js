const express  = require('express');

const app = express();
app.use(express.json());

app.get('/', async (req, res) => {
  await res.sendFile('index.html', { root: "./src/static"});
});
app.get('/style.css', function(req, res) {
  res.sendFile('style.css', { root: "./src/static"});
});


const crud = require('./routes/dbCrud');
const port = 555;

app.listen(port, () => {
    console.log("API server started on port " + port);
})