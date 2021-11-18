const mobileMenu = document.getElementById('menu');
const close = document.querySelector('.close');
const body = document.querySelector('body');
const hamburger = document.querySelector('.menu-bars');
const mobileMenuLinks = document.querySelectorAll('.classList');

hamburger.addEventListener('click', () => {
  mobileMenu.style.top = '0';
  body.style.position = 'fixed';
});

const closeMenu = () => {
  mobileMenu.style.top = '-110%';
  body.style.position = 'static';
};

close.addEventListener('click', closeMenu);

mobileMenuLinks.forEach((link) => {
  link.addEventListener('click', closeMenu);
});
