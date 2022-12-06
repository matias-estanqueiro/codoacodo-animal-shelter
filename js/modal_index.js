const modal = document.getElementById('modal-index')
const buttonModal = document.getElementById('button-close')

buttonModal.addEventListener('click', (e)=> {
    e.preventDefault()
    modal.classList.add('modal-close')
})