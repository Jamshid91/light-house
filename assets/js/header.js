const mobileMenu = document.querySelector('.mobile-menu'),
      menuBurger = document.querySelector('.menu-burger'),
      body = document.querySelector('body');

menuBurger.addEventListener('click', () => {
    menuBurger.classList.toggle('change');
    mobileMenu.classList.toggle('showMobileMenu');
    body.classList.toggle('showScroll')
});
