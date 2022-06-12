const menu = document.querySelector('.menu');
const logo = document.querySelector('header h3');
const hamburger = document.querySelector('#openmenu');
const closeHamburger = document.querySelector('#closemenu');
const ul = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links li');
const menuBg = document.querySelector('.menu-bg');
const lis = Array.from(navLinks);
const btn = document.querySelectorAll('.action-btn');

function toggler() {
  logo.classList.toggle('hide');
  ul.classList.toggle('hide');
  menuBg.classList.toggle('remove');
}

menu.addEventListener('click', () => {
  toggler();
  hamburger.classList.toggle('remove');
  closeHamburger.classList.toggle('remove');
  document.body.classList.toggle('no-scroll');
});

for (let i = 0; i < lis.length; i += 1) {
  lis[i].addEventListener('click', () => {
    toggler();
    closeHamburger.classList.add('remove');
    hamburger.classList.remove('remove');
    document.body.classList.remove('no-scroll');
  });
}

// mobile
const myProject = [{
  id: 1,
  name: 'Awesome Books',
  description: 'Awesome books app is a basic website that allows users to add/remove books from a list. It is a single page app (SPA) which allow switching to different pages of the app without page load. Built with JavaScript.',
  technologies: ['JavaScript', 'CSS', 'ES6 modules'],
  source: 'https://github.com/abdulhamiid/awesome-books-es6-modules',
  image: 'img/awesome-list.PNG',
  'live version': 'https://abdulhamiid.github.io/awesome-books-es6-modules',
}, {
  id: 2,
  name: 'Conference Website',
  description: 'This project I built the home and the about page of the conference page. The template I used to create this template was originally designed by Cindy Shin in Behance.',
  technologies: ['Html', 'saa', 'JavaScript'],
  source: 'https://github.com/abdulhamiid/capstone-project',
  image: 'img/conference-page.PNG',
  'live version': 'https://abdulhamiid.github.io/capstone-project',
}, {
  id: 3,
  name: 'Third Project',
  description: 'Third Project Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever tandard dummy text ever since the 1500',
  technologies: ['Html', 'Bootstrap', 'JavaScript'],
  source: 'https://github.com/abdulhamiid',
  image: 'img/Snapshoot-Portfolio.png',
  'live version': 'https://abdulhamiid.github.io/portfolio',
}, {
  id: 4,
  name: 'Fourth Project',
  description: 'Fourth Project Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipstype and scrambled it 1960s with the releaLorem th the relea',
  technologies: ['Ruby on rails', 'sass', 'JavaScipt'],
  source: 'https://github.com/abdulhamiid',
  image: 'img/Snapshoot-Portfolio.png',
  'live version': 'https://abdulhamiid.github.io/portfolio',
}, {
  id: 5,
  name: 'Fifth Project',
  description: 'FifthProject Lorems with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has and scrambled it 1960s with the relea',
  technologies: ['Html', 'CSS', 'JavaScript'],
  source: 'https://github.com/abdulhamiid',
  image: 'img/Snapshoot-Portfolio.png',
  'live version': 'https://abdulhamiid.github.io/portfolio',
}, {
  id: 6,
  name: 'Sixth Project',
  description: 'Sixth Project Lorem Ipsum ithe industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
  technologies: ['Html', 'css', 'React'],
  source: 'https://github.com/abdulhamiid',
  image: 'img/Snapshoot-Portfolio.png',
  'live version': 'https://abdulhamiid.github.io/portfolio',
}];

// desktop
const myProjectPc = [{
  id: 1,
  name: 'Awesome Books',
  description: 'Awesome books app is a basic website that allows users to add/remove books from a list. It is a single page app (SPA) which allow switching to different pages of the app without page load. Built with JavaScript.',
  technologies: ['Github', 'JavaScript', 'CSS', 'Terminal', 'HTML', 'ES6 modules'],
  source: 'https://github.com/abdulhamiid/awesome-books-es6-modules',
  image: 'img/awesome-list.PNG',
  'live version': 'https://abdulhamiid.github.io/awesome-books-es6-modules',
}, {
  id: 2,
  name: 'Conference Website',
  description: 'This project I built the home and the about page of the conference page. The template I used to create this template was originally designed by Cindy Shin in Behance.',
  technologies: ['Html', 'saa', 'JavaScript'],
  source: 'https://github.com/abdulhamiid/capstone-project',
  image: 'img/conference-page.PNG',
  'live version': 'https://abdulhamiid.github.io/capstone-project',
}, {
  id: 3,
  name: 'Third Project',
  description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
  technologies: ['Codekit', 'Github', 'JavaScript', 'Bootstrap', 'Terminal', 'Codepen'],
  source: 'https://github.com/abdulhamiid',
  image: 'img/Snapshoot-Portfolio-pc.png',
  'live version': 'https://abdulhamiid.github.io/portfolio',
}, {
  id: 4,
  name: 'Fourth Project',
  description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
  technologies: ['Codekit', 'Github', 'JavaScript', 'Bootstrap', 'Terminal', 'Codepen'],
  source: 'https://github.com/abdulhamiid',
  image: 'img/Snapshoot-Portfolio-pc.png',
  'live version': 'https://abdulhamiid.github.io/portfolio',
}, {
  id: 5,
  name: 'Fifth Project',
  description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
  technologies: ['Codekit', 'Github', 'JavaScript', 'Bootstrap', 'Terminal', 'Codepen'],
  source: 'https://github.com/abdulhamiid',
  image: 'img/Snapshoot-Portfolio-pc.png',
  'live version': 'https://abdulhamiid.github.io/portfolio',
}, {
  id: 6,
  name: 'Sixth Project',
  description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
  technologies: ['Codekit', 'Github', 'JavaScript', 'Bootstrap', 'Terminal', 'Codepen'],
  source: 'https://github.com/abdulhamiid',
  image: 'img/Snapshoot-Portfolio-pc.png',
  'live version': 'https://abdulhamiid.github.io/portfolio',
}];

function createPopup(idx, prop) {
  document.body.classList.add('no-scroll');
  const subject = document.querySelector('#work-section');
  subject.insertAdjacentHTML('afterend',
    `<div id="popup-window" class="">
  <div>
  <i class="bi bi-x-lg" id="closemenu-mobile"></i>
  <img class="close-menu-btn" src="img/Disabled2.png" alt="closemenu-btn">
  <div class="flex-column">
  <img src="${prop[idx].image}" alt="project" class="stretch project-img">
  <h2>${prop[idx].name}</h2>
  <ul class="flex">
  ${prop[idx].technologies.map((item) => `<li class="li-padding bg-ash tech">${item}</li>`).join('')}
  </ul>
  <p>${prop[idx].description}</p>
  <div class="btn-action stretch flex">
  <button type="button" class="btn-bg-green" id="popup-btn"><a href="${prop[idx]['live version']}" target="_blank" class="flex">See Live<img src="img/see-live-icon.png" alt="see-live-icon"></a></button>
  <button type="button" class="btn-bg-green" id="popup-btn"><a href="${prop[idx].source}" target="_blank" class="flex source">See Source<img src="img/Vector.png" alt="github-logo"></a></button>
  </div>
  </div>
  </div>
  </div>`);
}

function dltbtn(dbtn) {
  dbtn.addEventListener('click', (e) => {
    document.body.classList.remove('no-scroll');
    e.target.parentElement.parentElement.remove();
  });
}

// popup
function handleClick(e) {
  const index = e.target.id;
  if (window.innerWidth < 768) {
    createPopup(index, myProject);
    const menuCloseMobile = document.querySelector('#closemenu-mobile');
    dltbtn(menuCloseMobile);
  } else {
    createPopup(index, myProjectPc);
    const btnClose = document.querySelector('.close-menu-btn');
    dltbtn(btnClose);
  }
}

btn.forEach((item) => {
  item.addEventListener('click', handleClick);
});
const email = document.querySelector('#mail');
const form = document.querySelector('form');
const errorMsg = document.querySelector('#message');

function handleSubmit(e) {
  e.preventDefault();
  const regex = /[A-Z]/g;
  const userEmail = email.value;
  if (userEmail.match(regex)) {
    errorMsg.innerHTML = 'Email should be in lower case';
    errorMsg.classList.add('error');
  } else {
    errorMsg.remove();
    form.submit();
  }
}

form.addEventListener('submit', handleSubmit);

let formxx = { name: '', mail: '', msg: '' };

if (localStorage.getItem('portfolio') !== null) {
  const newdata = localStorage.getItem('portfolio');
  formxx = JSON.parse(newdata);
}
const inputs = document.querySelectorAll('input, textarea');
inputs.forEach((item) => {
  item.value = formxx[item.id];
  item.addEventListener('input', (e) => {
    formxx[e.target.id] = e.target.value;
    const data = JSON.stringify(formxx);
    localStorage.setItem('portfolio', data);
  });
});