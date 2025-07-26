const menu = document.querySelector('.header__menu');
const overlay = document.querySelector('.hero-banner__overlay');
const toggle = document.querySelector('.header__hamburguer');

toggle.addEventListener('click', () => {
  menu.classList.add('is-open');
  overlay.classList.add('blur');
});

overlay.addEventListener('click', () => {
  menu.classList.remove('is-open');
  overlay.classList.remove('blur');
});
