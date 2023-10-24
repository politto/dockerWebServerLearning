<<<<<<< HEAD
let popup = document.getElementById("popup");

function openPopup() {
=======
const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

function openPopup() {
  console.log(popup);
>>>>>>> c9e3df3840eb4c1b324afc2613357d35a54bae08
  popup.classList.add("open-popup");
}

function closePopup() {
  popup.classList.remove("open-popup");
<<<<<<< HEAD
}
=======
}

const locationHandler = require('../routes/pageRouter');

console.log("hello world");

// create a function that watches the hash and calls the urlLocationHandler
window.addEventListener("hashchange", locationHandler);
// call the urlLocationHandler to load the page
locationHandler();
openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget)
    openSetting(modal)
  })
})

 closeModalButtons.forEach(button => {
   button.addEventListener('click', () => {
     const set = button.closest('.modal')
     closeSetting(set)
  })
 })

function openSetting(set) {
  if (set == null) return
  set.classList.add('active')
  overlay.classList.add('active')
}

function closeSetting(set) {
  if (set == null) return
  set.classList.remove('active')
  overlay.classList.remove('active')
}

overlay.addEventListener('click', () => {
  const over = document.querySelectorAll('.modal.active')
 over.forEach(set => {
    closeSetting(set)
  })
})
>>>>>>> c9e3df3840eb4c1b324afc2613357d35a54bae08
