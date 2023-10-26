const dataAndPageRouter = require('../routes/dbAndPageRouter');

console.log("hello world");
window.addEventListener("hashchange", dataAndPageRouter);
// call the urlLocationHandler to load the page
locationHandler();