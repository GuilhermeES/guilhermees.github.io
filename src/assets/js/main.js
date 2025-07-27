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


document.addEventListener("DOMContentLoaded", function () {
  const video = document.querySelector(".hero-banner__video");
  const overlay = document.querySelector(".hero-banner__overlay");

  const setFullPageHeight = () => {
    const totalHeight = Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight
    );

    if (video) {
      video.style.height = `${totalHeight}px`;
    }

    if (overlay) {
      overlay.style.height = `${totalHeight}px`;
    }
  };

  setFullPageHeight();
  window.addEventListener("resize", setFullPageHeight);
});