let menu = document.querySelector(".menu");
let logo= document.querySelector("header h3");
let hamburger = document.querySelector('#openmenu');
let closeHamburger = document.querySelector('#closemenu');
let links= document.querySelector(".nav-links");

menu.addEventListener("click", function(e){
  logo.classList.toggle("hide");  
  links.classList.toggle("hide");
  hamburger.classList.toggle('remove');
  closeHamburger.classList.toggle('remove')
})
