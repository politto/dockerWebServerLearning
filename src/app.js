const express  = require('express');
const path = require('path');
const app = express();
const htmlPath = path.join("./src")
app.use(express.static(htmlPath));

app.get('/', async (req, res) => {
  await res.sendFile('index.html', { root: "./src/static"});
});

app.get('/style.css', function(req, res) {
  res.sendFile('style.css', { root: "./src/static"});
});

app.get('/script.js', function(req, res) {
  res.sendFile('script.js', { root: "./src/static"});
});

app.get('/index2.html', function(req, res) {
  res.sendFile('index2.html', { root: "./src/static"});
});

app.get('/section1.html', function(req, res) {
  res.sendFile('section1.html', { root: "./src/static"});
});

app.get('/section2.html', function(req, res) {
  res.sendFile('section2.html', { root: "./src/static"});
});

const crud = require('./routes/dbCrud');
const port = 555;

app.listen(port, () => {
    console.log("API server started on port " + port);
})