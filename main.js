const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuBurguer = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuBurguer.addEventListener('click',toogleMobileMenu);
menuCarIcon.addEventListener('click',toogleCarAside);



function toggleDesktopMenu(){
    desktopMenu.classList.toggle('inactive');
}

function toogleMobileMenu(){
    const isAsideClosed = aside.classList.contains('inactive');

    if (!isAsideClosed){
        mobileMenu.classList.add('inactive')
    }
    mobileMenu.classList.toggle('inactive');
}

function toogleCarAside(){
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
   // aside.classList.toggle('inactive');

    if (!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive')
        //abrir el aside
    }
}