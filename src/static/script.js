const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

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