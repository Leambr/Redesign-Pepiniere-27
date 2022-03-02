const navbar = document.querySelector('.navbar');

function changeNav() {
    let windowPosition = window.scrollY > 690;
    console.log(top);
    navbar.classList.toggle('navbar-active', windowPosition)
}

window.onscroll = changeNav;