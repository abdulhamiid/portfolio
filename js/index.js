let menu = document.querySelector(".menu");
let logo= document.querySelector("header h3");
let hamburger = document.querySelector('#openmenu');
let closeHamburger = document.querySelector('#closemenu');
let links= document.querySelector('.nav-links');
let navLinks = document.querySelectorAll('.nav-links li');
let lis = Array.from(navLinks);

menu.addEventListener("click", function(e){
  logo.classList.toggle('hide');  
  links.classList.toggle("hide");
  hamburger.classList.toggle('remove');
  closeHamburger.classList.toggle('remove');
  document.body.classList.toggle("no-scroll")
})

for (let i = 0; i<lis.length; i++){
  lis[i].addEventListener('click', function(e){
    links.classList.toggle('hide');
    logo.classList.toggle('hide');  
    closeHamburger.classList.add('remove');
    hamburger.classList.remove('remove');
    document.body.classList.toggle('no-scroll')

  })
}
