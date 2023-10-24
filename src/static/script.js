let popup = document.getElementById("popup");

function openPopup() {
  console.log(popup);
  popup.classList.add("open-popup");
}

function closePopup() {
  popup.classList.remove("open-popup");
}

const locationHandler = require('../routes/pageRouter');

console.log("hello world");

// create a function that watches the hash and calls the urlLocationHandler
window.addEventListener("hashchange", locationHandler);
// call the urlLocationHandler to load the page
locationHandler();