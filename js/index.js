let menu = document.querySelector(".menu");
let logo= document.querySelector("header h3");
let hamburger = document.querySelector('#openmenu');
let closeHamburger = document.querySelector('#closemenu');
let ul= document.querySelector('.nav-links');
let navLinks = document.querySelectorAll('.nav-links li');
let menuBg = document.querySelector('.menu-bg')
let lis = Array.from(navLinks);

menu.addEventListener("click", function() {
  toggler();
  hamburger.classList.toggle('remove');
  closeHamburger.classList.toggle('remove');  
})

for (let i = 0; i < lis.length; i++) {
  lis[i].addEventListener('click', function() {
    toggler()
    closeHamburger.classList.add('remove');
    hamburger.classList.remove('remove');
  })
}

function toggler () {
  logo.classList.toggle('hide');  
  ul.classList.toggle('hide');
  menuBg.classList.toggle('remove')
  document.body.classList.toggle("no-scroll")
}