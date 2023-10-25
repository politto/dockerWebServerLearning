const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

function openPopup() {
  console.log(popup);
  popup.classList.add("open-popup");
}

function closePopup() {
  popup.classList.remove("open-popup");
}

// openModalButtons.forEach(button => {
//   button.addEventListener('click', () => {
//     const modal = document.querySelector(button.dataset.modalTarget)
//     openSetting(modal)
//   })
// })
// 
//  closeModalButtons.forEach(button => {
//    button.addEventListener('click', () => {
//      const set = button.closest('.modal')
//      closeSetting(set)
//   })
//  })

function openSetting(set) {
  if (set == null) return
  set.classList.add('active')
  overlay.classList.add('active')
}

function openSetting(){
  document.getElementsByClassName("modal")[0].style.display = 'block';
  // document.getElementsByClassName("modal")[0].classList.add('active');
}
function closeSetting(){
  document.getElementsByClassName("modal")[0].style.display = 'none';
  console.log("dfsdf");
  // document.getElementsByClassName("modal")[0].classList.add('active');
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


// code for change image background
const body = document.getElementById("bg");
const toggleSwitch = document.getElementById("backgroundToggle");

// Check if there's a saved background choice in localStorage
const savedBackground = localStorage.getItem("backgroundChoice");

// Set the initial background based on the saved choice
if (savedBackground === "image1") {
    body.style.backgroundImage = "url('img/background_night.png')";
    toggleSwitch.checked = true; // Set the switch to "on"
} else {
    body.style.backgroundImage = "url('img/background_day.png')";
    toggleSwitch.checked = false; // Set the switch to "off"
}

toggleSwitch.addEventListener("change", function() {
    if (this.checked) {
        body.style.backgroundImage = "url('img/background_night.png')";
        localStorage.setItem("backgroundChoice", "image1"); // Save the choice
    } else {
        body.style.backgroundImage = "url('img/background_day.png')";
        localStorage.setItem("backgroundChoice", "image2"); // Save the choice
    }
});