const menu = document.querySelector('.menu');
const logo = document.querySelector('header h3');
const hamburger = document.querySelector('#openmenu');
const closeHamburger = document.querySelector('#closemenu');
const ul = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links li');
const menuBg = document.querySelector('.menu-bg');
const background = document.querySelector("#profile");
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

// mobile
const myProject = [{
  id: 1,
  name: `Keeping track of hundreds of component`,
  description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
  technologies: ['Ruby on rails', 'css', 'JavaScript'],
  source: 'https://github.com/abdulhamiid',
  image: 'img/Snapshoot-Portfolio.png',
  'live version': '#'
}, {
  id: 2,
  name: 'Multi-Post Stories Gain+Glory',
  description: 'Second Project Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
  technologies: ['Html', 'saa', 'JavaScript'],
  source: 'https://github.com/abdulhamiid',
  image: 'img/Snapshoot-Portfolio.png',
  'live version': '#'
}, {
  id: 3,
  name: 'Third Project',
  description: 'Third Project Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
  technologies: ['Html', 'Bootstrap', 'JavaScript'],
  source: 'https://github.com/abdulhamiid',
  image: 'img/Snapshoot-Portfolio.png',
  'live version': '#'
}, {
  id: 4,
  name: 'Fourth Project',
  description: 'Fourth Project Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
  technologies: ['Ruby on rails', 'sass', 'JavaScipt'],
  source: 'https://github.com/abdulhamiid',
  image: 'img/Snapshoot-Portfolio.png',
  'live version': '#'
}, {
  id: 5,
  name: 'Fifth Project',
  description: 'FifthProject Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
  technologies: ['Html', 'CSS', 'JavaScript'],
  source: 'https://github.com/abdulhamiid',
  image: 'img/Snapshoot-Portfolio.png',
  'live version': '#'
}, {
  id: 6,
  name: 'Sixth Project',
  description: 'Sixth Project Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
  technologies: ['Html', 'css', 'React'],
  source: 'https://github.com/abdulhamiid',
  image: 'img/Snapshoot-Portfolio.png',
  'live version': '#'
}]

// desktop
const myProjectPc = [{
  id: 1,
  name: 'Keeping track of hundreds of component',
  description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
  technologies: ['Codekit', 'Github', 'JavaScript', 'Bootstrap', 'Terminal', 'Codepen'],
  source: 'https://github.com/abdulhamiid',
  image: 'img/Snapshoot-Portfolio-pc.png',
  'live version': '#'
}, {
  id: 2,
  name: 'Multi-Post Stories Gain+Glory',
  description: 'Second Project Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
  technologies: ['Html', 'saa', 'JavaScript'],
  source: 'https://github.com/abdulhamiid',
  image: 'img/Snapshoot-Portfolio.png',
  'live version': '#'
}, {
  id: 3,
  name: 'Third Project',
  description: 'Third Project Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
  technologies: ['Html', 'Bootstrap', 'JavaScript'],
  source: 'https://github.com/abdulhamiid',
  image: 'img/Snapshoot-Portfolio.png',
  'live version': '#'
}, {
  id: 4,
  name: 'Fourth Project',
  description: 'Fourth Project Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
  technologies: ['Ruby on rails', 'sass', 'JavaScipt'],
  source: 'https://github.com/abdulhamiid',
  image: 'img/Snapshoot-Portfolio.png',
  'live version': '#'
}, {
  id: 5,
  name: 'Fifth Project',
  description: 'FifthProject Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
  technologies: ['Html', 'CSS', 'JavaScript'],
  source: 'https://github.com/abdulhamiid',
  image: 'img/Snapshoot-Portfolio.png',
  'live version': '#'
}, {
  id: 6,
  name: 'Sixth Project',
  description: 'Sixth Project Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
  technologies: ['Html', 'css', 'React'],
  source: 'https://github.com/abdulhamiid',
  image: 'img/Snapshoot-Portfolio.png',
  'live version': '#'
}]


let work = document.querySelector('#popup-window');
let workPc = document.querySelector('#popup-window-pc');
let btn = document.querySelectorAll('.action-btn');
let title = document.querySelector('#popup-window h2')
let titlePc = document.querySelector('#popup-window-pc h3')
let projectDiscription = document.querySelector('#popup-window p')
let projectDiscriptionPc = document.querySelector('#popup-window-pc p')
let projectImage = document.querySelector('.project-img');
let projectImagePc = document.querySelector('.project-img-pc');
let tech = document.querySelectorAll('.tech');
let techPc = document.querySelectorAll('.tech-pc');
let sourceCode = document.querySelector('.source');
let sourceCodePc = document.querySelector('.source-pc');
let btnClose = document.querySelector('.close-menu-btn');

btnClose.addEventListener('click', () => {
  workPc.classList.add('hide')
})

btn.forEach(item => {
  item.addEventListener('click', handleClick)
})

// mobile

// desktop

  function handleClick(e){
    if(window.innerWidth > 600){
      workPc.classList.toggle('hide')
      background.classList.toggle("blur")
      let index = e.path[0].id;
      projectImagePc.setAttribute('src', myProjectPc[index]['image']);
      sourceCodePc.setAttribute('href', myProjectPc[index]['source']);
      titlePc.textContent = myProjectPc[index].name;
      projectDiscriptionPc.textContent = myProjectPc[index].description;
      let i = 0;
      while(i < myProjectPc[index].technologies.length) {
        techPc.forEach(li => {
        li.textContent = myProjectPc[index].technologies[i];
        i += 1;
        })
      }
    }else {
        let index = e.path[0].id;
        work.classList.remove('remove');
        title.textContent = myProject[index].name;
        projectDiscription.textContent = myProject[index].description;
        projectImage.setAttribute('src', myProject[index]['image']);
        sourceCode.setAttribute('href', myProject[index]['source']);
        let i = 0;
        while(i < myProject[index].technologies.length) {
          tech.forEach(li => {
          li.textContent = myProject[index].technologies[i];
          i += 1;
          })
        }
      }
  }