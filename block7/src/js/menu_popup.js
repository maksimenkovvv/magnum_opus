let callButtonOpen = document.querySelector('.menu__media__burger')
let callMenu = document.querySelector('.menu-popup__container')
let callButtonClose = document.querySelector('.menu-popup__close')
let noScroll = document.querySelector('body')

callButtonOpen.addEventListener('click', function(){
    callButtonOpen.classList.toggle('active');
    callMenu.classList.toggle('active');
    noScroll.classList.toggle('no-scroll');
})

callButtonClose.addEventListener('click', function(){
    callButtonClose.classList.toggle('active');
    callMenu.classList.toggle('active');
    noScroll.classList.toggle('no-scroll');
})