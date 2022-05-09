let hamburger = document.querySelector(".menu");
let logo= document.querySelector("header h3");
let links= document.querySelector(".nav-links");
hamburger.addEventListener("click", function(e){
 logo.classList.toggle("hide");  
 links.classList.toggle("hide");
})
