const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuBurguer = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuBurguer.addEventListener('click',toogleMobileMenu)

function toggleDesktopMenu(){
    desktopMenu.classList.toggle('inactive');
}

function toogleMobileMenu(){
    mobileMenu.classList.toggle('inactive')
}