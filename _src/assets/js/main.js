'use strict';

$(function() {
  const $slider = $('.js__slider');
  $slider.slick({
    arrows: false,
    dots: true,
    centerMode: true,
    variableWidth: true,
    infinite: false,
    slidesToShow: 1,
    mobileFirst: true,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          centerMode: false,
          slidesToShow: 2,
          slidesToScroll: 1,
          variableWidth: false,
        }
      },
      {
        breakpoint: 1280,
        settings: 'unslick'
      }
    ]
  });
});
