let a1 = document.querySelector('#a1')
let a2 = document.querySelector('#a2')
let a3 = document.querySelector('#a3')
let button1 = document.querySelector('#b1')
let button2 = document.querySelector('#b2')
let button3 = document.querySelector('#b3')
a1.addEventListener('click', function () {
    a1.classList.add('selected');
    a2.classList.remove('selected');
    a3.classList.remove('selected');
    button1.classList.add('actived');
    button2.classList.remove('actived')
    button3.classList.remove('actived')
}) 

a2.addEventListener('click', function () {
    a2.classList.add('selected');
    a1.classList.remove('selected');
    a3.classList.remove('selected');
    button2.classList.add('actived');
    button1.classList.remove('actived')
    button3.classList.remove('actived')
}) 

a3.addEventListener('click', function () {
    a3.classList.add('selected');
    a2.classList.remove('selected');
    a1.classList.remove('selected');
    button3.classList.add('actived');
    button2.classList.remove('actived')
    button1.classList.remove('actived')
}) 