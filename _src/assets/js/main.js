'use strict';
const slides = document.querySelectorAll('.carrousel__item');

function slideImages(){
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.add('slide');
  }
}

slideImages();
console.log('>> Ready :)');
