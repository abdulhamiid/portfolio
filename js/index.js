const menu = document.querySelector('.menu');
const logo = document.querySelector('header h3');
const hamburger = document.querySelector('#openmenu');
const closeHamburger = document.querySelector('#closemenu');
const ul = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links li');
const menuBg = document.querySelector('.menu-bg');
const lis = Array.from(navLinks);
const btn = document.querySelectorAll('.action-btn');
const nav = document.querySelector('.nav-links');

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

// mobile
const myProject = [{
  id: 1,
  name: 'Keeping track of hundreds of component',
  description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
  technologies: ['Ruby on rails', 'css', 'JavaScript'],
  source: 'https://github.com/abdulhamiid',
  image: 'img/Snapshoot-Portfolio.png',
  'live version': '#',
}, {
  id: 2,
  name: 'Multi-Post Stories Gain+Glory',
  description: 'Second Project Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
  technologies: ['Html', 'saa', 'JavaScript'],
  source: 'https://github.com/abdulhamiid',
  image: 'img/Snapshoot-Portfolio.png',
  'live version': '#',
}, {
  id: 3,
  name: 'Third Project',
  description: 'Third Project Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
  technologies: ['Html', 'Bootstrap', 'JavaScript'],
  source: 'https://github.com/abdulhamiid',
  image: 'img/Snapshoot-Portfolio.png',
  'live version': '#',
}, {
  id: 4,
  name: 'Fourth Project',
  description: 'Fourth Project Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
  technologies: ['Ruby on rails', 'sass', 'JavaScipt'],
  source: 'https://github.com/abdulhamiid',
  image: 'img/Snapshoot-Portfolio.png',
  'live version': '#',
}, {
  id: 5,
  name: 'Fifth Project',
  description: 'FifthProject Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
  technologies: ['Html', 'CSS', 'JavaScript'],
  source: 'https://github.com/abdulhamiid',
  image: 'img/Snapshoot-Portfolio.png',
  'live version': '#',
}, {
  id: 6,
  name: 'Sixth Project',
  description: 'Sixth Project Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
  technologies: ['Html', 'css', 'React'],
  source: 'https://github.com/abdulhamiid',
  image: 'img/Snapshoot-Portfolio.png',
  'live version': '#',
}];

// desktop
const myProjectPc = [{
  id: 1,
  name: 'Keeping track of hundreds of component',
  description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
  technologies: ['Codekit', 'Github', 'JavaScript', 'Bootstrap', 'Terminal', 'Codepen'],
  source: 'https://github.com/abdulhamiid',
  image: 'img/Snapshoot-Portfolio-pc.png',
  'live version': '#',
}, {
  id: 2,
  name: 'Multi-Post Stories Gain+Glory',
  description: 'Second Project Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
  technologies: ['Html', 'saa', 'JavaScript'],
  source: 'https://github.com/abdulhamiid',
  image: 'img/Snapshoot-Portfolio.png',
  'live version': '#',
}, {
  id: 3,
  name: 'Third Project',
  description: 'Third Project Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
  technologies: ['Html', 'Bootstrap', 'JavaScript'],
  source: 'https://github.com/abdulhamiid',
  image: 'img/Snapshoot-Portfolio.png',
  'live version': '#',
}, {
  id: 4,
  name: 'Fourth Project',
  description: 'Fourth Project Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
  technologies: ['Ruby on rails', 'sass', 'JavaScipt'],
  source: 'https://github.com/abdulhamiid',
  image: 'img/Snapshoot-Portfolio.png',
  'live version': '#',
}, {
  id: 5,
  name: 'Fifth Project',
  description: 'FifthProject Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
  technologies: ['Html', 'CSS', 'JavaScript'],
  source: 'https://github.com/abdulhamiid',
  image: 'img/Snapshoot-Portfolio.png',
  'live version': '#',
}, {
  id: 6,
  name: 'Sixth Project',
  description: 'Sixth Project Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
  technologies: ['Html', 'css', 'React'],
  source: 'https://github.com/abdulhamiid',
  image: 'img/Snapshoot-Portfolio.png',
  'live version': '#',
}];

// popup
function handleClick(e) {
    const index = e.path[0].id;
    if (window.innerWidth < 600){
      createPopup(index, myProject)
    }else {
      createPopup(index, myProjectPc);
      const btnClose = document.querySelector('.close-menu-btn');
      btnClose.addEventListener('click', (e) => {
        e.path[3].remove();
        document.body.classList.remove('no-scroll');
      });
    }
}

btn.forEach((item) => {
  item.addEventListener('click', handleClick);
});

function createPopup(idx, prop) {
  document.body.classList.add('no-scroll');
  const subject = document.querySelector('#my-info h2');
  subject.insertAdjacentHTML('afterend',
    `<div id="popup-window" class="">
  <div>
  <div class="flex-column">
  <span id="closemenu-mobile"><i class="bi bi-x-lg"></i></span>
  <img class="close-menu-btn" src="img/Disabled2.png" alt="closemenu-btn">
  <img src="${prop[idx].image}" alt="project" class="stretch project-img">
  <h2>${prop[idx].name}</h2>
  <ul class="flex">
  ${prop[idx].technologies.map(item => `<li class="li-padding bg-ash tech">${item}</li>`)}
  </ul>
  <p>${prop[idx].description}</p>
  <div class="btn-action stretch flex">
  <button type="button" class="btn-bg-green"><a href="#" class="flex">See Live<img src="img/see-live-icon.png" alt="see-live-icon"></a></button>
  <button type="button" class="btn-bg-green"><a href="" target="_blank" class="flex source">See Source<img src="img/Vector.png" alt="github-logo"></a></button>
  </div>
  </div>
  </div>
  </div>`);
}