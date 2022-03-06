// Change navbar on scroll
const navbar = document.querySelector('.navbar');

function changeNav() {
    let windowPosition = window.scrollY > 690;
    console.log(top);
    navbar.classList.toggle('navbar-active', windowPosition)
}

window.onscroll = changeNav;


// Small screens menu
let toggleMenu = document.querySelector('.toggle-menu');
let body = document.querySelector('body');

toggleMenu.addEventListener('click', function(){
    body.classList.toggle('open');
})