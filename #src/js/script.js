var menu = document.querySelector('.menu');
var menuToggle = document.querySelector('.menu__icon');
var pageBody = document.querySelector('body');

menuToggle.addEventListener('click', function (evt) {
  menu.classList.toggle('active');
  menuToggle.classList.toggle('active');
  pageBody.classList.toggle('lock');
});

$('.slider').slick({
  dots: true,
  arrows: false,
  slidesToShow: 1,
  autoplaySpeed: 3000,
  adaptiveHeight: true
});