const nomi_insta = ['lisaluchetta', 'rondodasosa', 'cicciogamer_89', 'alessialanza', 'fuckshiva', 'sferaebbasta', 'tedua_wildbandana', 'centralcee', 'gaaiabianchii', 'gaiaclerici', 'capoplaza', 'babygang_1'];
const link_foto = [
  ['./images/download.jpeg', './images/download1.jpeg', './images/download2.jpeg'],
  ['./images/download3.jpeg', './images/download4.jpeg', './images/download5.jpeg'],
  ['./images/download6.jpeg', './images/download7.jpeg', './images/download8.jpeg'],
  ['./images/download9.jpeg', './images/download10.jpeg', './images/download11.jpeg'],
  ['./images/download12.jpeg', './images/download13.jpeg', './images/download14.jpeg'],
  ['./images/download15.jpeg', './images/download16.jpeg', './images/download17.jpeg'],
  ['./images/download18.jpeg', './images/download19.jpeg', './images/download20.jpeg'],
  ['./images/download21.jpeg', './images/download22.jpeg', './images/download23.jpeg'],
  ['./images/download24.jpeg', './images/download25.jpeg', './images/download26.jpeg'],
  ['./images/download27.jpeg', './images/download28.jpeg', './images/download29.jpeg'],
  ['./images/download30.jpeg', './images/download31.jpeg', './images/download32.jpeg'],
  ['./images/download33.jpeg', './images/download34.jpeg', './images/download35.jpeg']
];

const audios = [
  new Audio(''), // Lisa Luchetta
  new Audio('./audio/rondodasosa.mp3'), // Rondodasosa
  new Audio('./audio/ciccioGamer89.mp3'), // CiccioGamer89
  new Audio(''), // Alessia Lanza
  new Audio('./audio/shiva.mp3'), // Shiva
  new Audio('./audio/sfera.mp3'), // Sfera
  new Audio('./audio/tedua.mp3'), // Tedua
  new Audio('./audio/central_cee.mp3'), // Central Cee
  new Audio('./audio/gaia_bianchi.mp3'), // Gaia Bianchi
  new Audio('./audio/gaia_clerici.mp3'), // Gaia Clerici
  new Audio('./audio/capo_plaza.mp3'), // Capo Plaza
  new Audio('./audio/baby_gang.mp3') // Baby Gang
];

const sfondi = ['#0d6275', '#3640f7', '#fc7a08', '#949e09', '#fc0808', '#ff4a4a', '#1fb852', '#17d4a8', '#17bed4', 'whitesmoke', 'whitesmoke', '#a05509'];

const containers = document.querySelectorAll('.container');

const insta = document.querySelector('.insta');
const audio = document.querySelector('.audio');

const style = document.createElement('style');
document.head.appendChild(style);

containers.forEach((cont, index) => {
  var keyframe = `@keyframes item${index}{0%{background: url(${link_foto[index][0]}) center center no-repeat; background-size: cover;} 25%{background: url(${link_foto[index][1]}) center center no-repeat; background-size: cover;} 75%{background: url(${link_foto[index][2]}) center center no-repeat; background-size: cover;} 100%{background: url(${link_foto[index][0]}) center center no-repeat; background-size: cover;}}`;
  style.sheet.insertRule(keyframe);
  cont.querySelector('.content').style.animation = `item${index} 9s ease-in-out infinite`;
  cont.addEventListener('click', () =>{
    abbassaVolume();
    stopAudios();
    cont.classList.toggle('center');
    if(cont.querySelector('.title').textContent == 'Lisa Luchetta' || cont.querySelector('.title').textContent == 'Alessia Lanza') audio.style.display = 'none';
    else audio.style.display = 'inline';
    document.querySelector('.container-azioni').classList.toggle('hidden');
    if(cont.classList.value.indexOf('center') >= 0) document.body.style.background = sfondi[index];
    else document.body.style.background = 'white';
    containers.forEach((c, i) => {
      if(i != index) c.classList.toggle('hidden');
    });
    insta.addEventListener('click', () => {
      window.location = `https://www.instagram.com/${nomi_insta[index]}/`;
    });
    audio.addEventListener('click', () => {
      stopAudios();
      audios[index].play();
    });
  });
});

function stopAudios(){
  audios.forEach((t) => {
    t.pause();
    t.currentTime = 0;
  });
};

function abbassaVolume(){
  audios.forEach(r => r.volume = 0.2);
}

document.querySelector('.back').addEventListener('click', () => {location.href = 'index.html'});
