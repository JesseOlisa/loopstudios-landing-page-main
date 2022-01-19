//VARIABLE DECLARATION

const hamburger = document.querySelector('.hamburger');
const navbar = document.querySelector('.nav-links');
const closebtn = document.querySelector('.close-btn');


//ADDING EVENTS LISTENERS

hamburger.addEventListener('click', () => {
    navbar.style.display = 'block';
});


closebtn.addEventListener('click', () => {
    navbar.style.display = 'none';
})