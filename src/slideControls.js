import * as assets from './variables';

var slideShow = document.getElementById('slideShow');
var slides = slideShow.getElementsByTagName('img');
let index = 0;

function nextSlide() {
  slides[index].classList.remove('active');
  index = (index + 1) % slides.length;
  slides[index].classList.add('active');
}

function prevSlide() {
  slides[index].classList.remove('active');
  index = (index - 1 + slides.length) % slides.length;
  slides[index].classList.add('active');
}

var slideShowText = document.getElementById('slideShowText');
var slideText = slideShowText.getElementsByTagName('div');
let i = 0;

function nextSlideText() {
  slideText[i].classList.remove('active');
  i = (i + 1) % slideText.length;
  slideText[i].classList.add('active');
}

function prevSlideText() {
  slideText[i].classList.remove('active');
  i = (i - 1 + slideText.length) % slideText.length;
  slideText[i].classList.add('active');
}




// function menuToggle() {
//   var nav = document.getElementById('navbar');
//   nav.classList.toggle('active');
// }
