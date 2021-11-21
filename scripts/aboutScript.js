const menuButton = document.querySelector('.sm-header');
const menu = document.querySelector('.menuContainer');
const closeButton = document.querySelector('.closeButton');
const container = document.querySelector('.container');

menuButton.addEventListener('click', () => {
  menuButton.classList.toggle('isActive');
  menu.classList.toggle('isActive');
  container.classList.toggle('menuActive');
  document.body.style.overflow = 'hidden';
});

closeButton.addEventListener('click', () => {
  menuButton.classList.remove('isActive');
  menu.classList.remove('isActive');
  container.classList.remove('menuActive');
  document.body.style.overflow = 'scroll';
});
