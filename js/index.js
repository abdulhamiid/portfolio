const btn = document.querySelectorAll('.action-btn');
const btnClose = document.querySelector('.close-menu-btn');
const workPc = document.querySelector('#popup-window-pc');
const nav = document.querySelector('.nav-links');
btn.forEach((item) => {
  item.addEventListener('click', handleClick);
});

// btnClose.addEventListener('click', () => {
//   // workPc.classList.add('hide');
//   nav.classList.remove('blur');
// });

function handleClick(e){
  if (window.innerWidth < '600'){
    const index = e.path[0].id;
    const subject = document.querySelector('#my-info h2');
    subject.insertAdjacentHTML('afterend', 
   `<div id="popup-window" class="">
    <div>
    <div class="flex-column">
    <img src="${myProject[index].image}" alt="project" class="stretch project-img">
    <h2>${myProject[index].name}</h2>
    <ul class="flex">
    <li class="li-padding bg-ash tech">${myProject[index].technologies[0]}</li>
    <li class="li-padding bg-ash tech">${myProject[index].technologies[1]}</li>
    <li class="li-padding bg-ash tech">${myProject[index].technologies[2]}</li>
    </ul>
    <p>${myProject[index].description}</p>
    <div class="btn-action stretch flex">
    <button type="button" class="btn-bg-green"><a href="#" class="flex">See Live<img src="img/see-live-icon.png" alt="see-live-icon"></a></button>
    <button type="button" class="btn-bg-green"><a href="" target="_blank" class="flex source">See Source<img src="img/Vector.png" alt="github-logo"></a></button>
    </div>
    </div>
    </div>
    </div>`)
  }else if (window.innerWidth > '700'){
    const index = e.path[0].id;
    const subject = document.querySelector('#my-info h2');
    nav.classList.add('blur');
    subject.insertAdjacentHTML('afterend', 
   `<div id="popup-window-pc" class="flex">
    <div>
    <div class="flex-column">
    <img class="close-menu-btn" src="img/Disabled2.png" alt="closemenu-btn">
    <img src="${myProjectPc[index].image}" alt="project-img" class="stretch project-img-pc">
    <div class="flex project-item stretch">
    <div class="flex-column project-title">
    <h3>${myProjectPc[index].name}</h3>
    <ul class="flex">
    <li class="li-padding bg-ash tech-pc">${myProjectPc[index].technologies[0]}</li>
    <li class="li-padding bg-ash tech-pc">${myProjectPc[index].technologies[1]}</li>
    <li class="li-padding bg-ash tech-pc">${myProjectPc[index].technologies[2]}</li>
    <li class="li-padding bg-ash tech-pc">${myProjectPc[index].technologies[3]}</li>
    <li class="li-padding bg-ash tech-pc">${myProjectPc[index].technologies[4]}</li>
    <li class="li-padding bg-ash tech-pc">${myProjectPc[index].technologies[5]}</li>
    </ul>
    </div>
    <div class="btn-action-pc stretch flex">
    <button type="button" class="btn-bg-green"><a href="#" class="flex">See Live<img src="img/see-live-icon.png" alt="see-live-icon"></a></button>
    <button type="button" class="btn-bg-green"><a href="" target="_blank" class="flex source-pc">See Source<img src="img/Vector.png" alt="github-logo"></a></button>
    </div>
    </div>
    <p>${myProjectPc[index].description}</p>
    </div>
    </div>
    </div>`)
  }
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