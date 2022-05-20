const menuButton = document.querySelector('#menu-button');
const menu = document.querySelector('#menu');

menuButton.addEventListener('click', () => {
  menu.style.visibility = 'visible';
  menu.classList.add('menu-animation');
});

const closeButton = document.querySelector('.close-button');

closeButton.addEventListener('click', () => {
  menu.style.visibility = 'hidden';
  menu.classList.remove('menu-animation');
});
