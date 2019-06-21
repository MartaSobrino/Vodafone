// 'use strict';
// const carouselSlide = document.querySelector('.carrousel__container');
// const carouselItem = document.querySelectorAll('.carrousel__item');

// const next = document.querySelector('.two');
// const prev = document.querySelector('.one');

// let counter = 0;
// const size = carouselItem[0].clientWidth;
// carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

// next.addEventListener('click', () =>{
//   carouselSlide.style.transition = 'transform 0.4 ease-in-out';
//   counter++;
//   carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
// }
// );

// prev.addEventListener('click', () =>{
//   carouselSlide.style.transition = 'transform 0.4 ease-in-out';
//   counter--;
//   carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
// }
// );

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "block";
  }
  for (i = 0; i < dots.length; i++) {
  dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

