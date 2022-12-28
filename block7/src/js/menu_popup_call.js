let callButtonOpen = document.querySelector('.menu__contacts__icons-call')
let callMenu = document.querySelector('.menu__popup-call')
let callButtonClose = document.querySelector('.menu__popup-call__close')
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