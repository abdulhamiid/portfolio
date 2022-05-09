const menu = document.querySelector('.menu');
const logo = document.querySelector('header h3');
const hamburger = document.querySelector('#openmenu');
const closeHamburger = document.querySelector('#closemenu');
const ul = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links li');
const menuBg = document.querySelector('.menu-bg');
const lis = Array.from(navLinks);

function toggler() {
  logo.classList.toggle('hide');
  ul.classList.toggle('hide');
  menuBg.classList.toggle('remove');
  document.body.classList.toggle('no-scroll');
}

menu.addEventListener('click', () => {
  toggler();
  hamburger.classList.toggle('remove');
  closeHamburger.classList.toggle('remove');
});

for (let i = 0; i < lis.length; i += 1) {
  lis[i].addEventListener('click', () => {
    toggler();
    closeHamburger.classList.add('remove');
    hamburger.classList.remove('remove');
  });
}