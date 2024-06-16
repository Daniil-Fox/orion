import './_components.js';


const siteTel = document.querySelector('.site-tel')

const siteTelBtn = siteTel.querySelector('.site-tel__header')
const siteTelClose = siteTel.querySelector('.site-tel__close')
const siteTelContent = siteTel.querySelector('.site-tel__content')

siteTelBtn?.addEventListener('click', e => {
  siteTelBtn.style.display = 'none'

  siteTelContent.style.display = 'block'
  siteTelContent.style.maxHeight = siteTelContent.scrollHeight + 'px'
})

siteTelClose.addEventListener('click', e => {
  siteTelBtn.style.display = null
  siteTelContent.style.display = null
  siteTelContent.style.maxHeight = null
})



const menu = document.querySelector('.menu')
const menuBtn = document.querySelector('.header__burger')
const menuItems = menu.querySelectorAll('.nav__link')

menuBtn.addEventListener('click', e => {
  menu.classList.toggle('active')
  menuBtn.classList.toggle('active')
})

menuItems.forEach(link => {
  link.addEventListener('click', e => {
    menu.classList.remove('active')
    menuBtn.classList.remove('active')
  })
})
