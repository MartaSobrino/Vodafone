'use strict';
const carouselSlide = document.querySelector('.carrousel__container');
const carouselItem = document.querySelectorAll('.carrousel__item');

const next = document.querySelector('.two');
const prev = document.querySelector('.one');

let counter = 0;
const size = carouselItem[0].clientWidth;
carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

next.addEventListener('click', () =>{
  carouselSlide.style.transition = 'transform 0.4 ease-in-out';
  counter++;
  carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
}
);

prev.addEventListener('click', () =>{
  carouselSlide.style.transition = 'transform 0.4 ease-in-out';
  counter--;
  carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
}
);


