const open_btn = document.querySelector('.open-btn')
const close_btn = document.querySelector('.close-btn')
const nav = document.querySelector('.nav')

open_btn.addEventListener('click', () => {
    nav.classList.add('visible')
    nav.style.zIndex = 2
})

close_btn.addEventListener('click', () => {
    nav.classList.remove('visible')
})
