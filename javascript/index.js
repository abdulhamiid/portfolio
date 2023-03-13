const menu = document.querySelector('.menu');
const logo = document.querySelector('header h3');
const hamburger = document.querySelector('#openmenu');
const closeHamburger = document.querySelector('#closemenu');
const ul = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links li');
const menuBg = document.querySelector('.menu-bg');
const lis = Array.from(navLinks);
const btn = document.querySelectorAll('.action-btn');

const navbar = document.querySelector('.mynav');
window.onscroll = () => {
  if (window.scrollY > 40) {
    navbar.classList.add('nav-active');
  } else {
    navbar.classList.remove('nav-active');
  }
};

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
  id: 0,
  name: 'Conference Website',
  description: 'This is a responsive website about BDS common summit which is about Internation medical tourist visit in Nigeria for a whole range of dental care. The template was originally designed by Cindy Shin in Behance.',
  technologies: ['HTML', 'CSS', 'JavaScript'],
  source: 'https://github.com/abdulhamiid/capstone-project',
  image: 'img/bdsconference.PNG',
  'live version': 'https://bds-conference.netlify.app',
}, {
  id: 1,
  name: 'GymFit',
  description: 'GymFit is a web application that allows users to view and reserve multiple fitness activities and a fitness activity can have multiple reservations on separate dates.',
  technologies: ['Ruby on rails', 'Ruby', 'JavaScript', 'Divise', 'React'],
  source: 'https://github.com/abdulhamiid/final-capstone-back-end',
  image: 'img/gym.PNG',
  'live version': 'https://final-capstone-front-lfmdhnejp-developerwaleed.vercel.app/',
}, {
  id: 2,
  name: 'Covid-19 Tracker',
  description: 'Covid Tracker is a web application to present the numerical data about corona virus pandemic in world, fetching the data from an API.',
  technologies: ['React', 'Redux', 'Bootstrap'],
  source: 'https://github.com/abdulhamiid/covid-19',
  image: './img/covid.PNG',
  'live version': 'https://vcovid-19-tracker.netlify.app',
}, {
  id: 3,
  name: 'Math Magicians',
  description: 'Math magicians is a website for all fans of mathematics. It is a Single Page App (SPA) that allows users to make simple calculations, App also display random math-related quote.',
  technologies: ['HTML', 'CSS', 'React'],
  source: 'https://github.com/abdulhamiid/calculator',
  image: 'img/maath-magicains.jpg',
  'live version': 'https://maths-magician-webapp.netlify.app',
}, {
  id: 4,
  name: 'Awesome Books',
  description: 'Awesome books is a single page app (SPA) website that allows users to keep track of books in their library by adding to and removing books from a list.',
  technologies: ['JavaScript', 'CSS', 'ES6 modules'],
  source: 'https://github.com/abdulhamiid/awesome-books-es6-modules',
  image: 'img/awesome-list.PNG',
  'live version': 'https://abdulhamiid.github.io/awesome-books-es6-modules',
}, {
  id: 5,
  name: 'Bookstore',
  description: 'This is an Online library application that enables user to keep track of books in their library by adding to and removing books from a list, user can also check the percentage read per book.',
  technologies: ['React', 'HTML', 'CSS'],
  source: 'https://github.com/abdulhamiid/bookstore',
  image: './img/bookstorecms.PNG',
  'live version': 'https://grand-entremet-4178eb.netlify.app/',
}];

function createPopup(idx, prop) {
  document.body.classList.add('no-scroll');
  const subject = document.querySelector('#work-section');
  subject.insertAdjacentHTML('afterend',
    `<div id="popup-window" class="">
  <div>
  <div>
  <i class="bi bi-x-circle-fill"></i>
  <img src="${prop[idx].image}" alt="project" class="stretch project-img">
  </div>
  <div class="flex-column">
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
    document.querySelector('#popup-window').setAttribute('style', 'left: -2000px; transition: 0.7s ease;' )
  });
}

// popup
function handleClick(e) {
  const index = e.target.id;
  createPopup(index, myProject);
  const btnClose = document.querySelector('.bi-x-circle-fill');
  dltbtn(btnClose);
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
    if (!errorMsg.classList.contains('error')) {
      errorMsg.classList.add('error');
      const icon = document.createElement('i');
      icon.classList.add('fa-sharp', 'fa-solid', 'fa-circle-info');
      errorMsg.appendChild(icon);
      const p = document.createElement('p');
      p.innerHTML = 'Email should be in lower case';
      errorMsg.appendChild(p);

      setTimeout(() => {
        errorMsg.innerHTML = '';
        errorMsg.classList.remove('error');
      }, 3000);
    }
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