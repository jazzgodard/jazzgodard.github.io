import $ from 'jquery';
import 'jquery-easing';

// Smooth scrolling using jQuery easing
$('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(() => {
  if (window.location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && window.location.hostname === this.hostname) {
    let target = $(this.hash);
    target = target.length ? target : $(`[name=${this.hash.slice(1)}]`);
    if (target.length) {
      $('html, body').animate({
        scrollTop: (target.offset().top - 54),
      }, 1000, 'easeInOutExpo');
      return false;
    }
  }
  return '';
});

// Closes responsive menu when a scroll trigger link is clicked
$('.js-scroll-trigger').click(() => {
  $('.navbar-collapse').collapse('hide');
});

// Activate scrollspy to add active class to navbar items on scroll
document.addEventListener('#mainNav', () => {

}, false);

$('body').scrollspy({
  target: '#mainNav',
  offset: 56,
});

// Collapse Navbar
const navbarCollapse = () => {
  if ($('#mainNav').offset().top > 100) {
    $('#mainNav').addClass('navbar-shrink');
  } else {
    $('#mainNav').removeClass('navbar-shrink');
  }
};
  // Collapse now if page is not at top
navbarCollapse();
// Collapse the navbar when page is scrolled
$(window).scroll(navbarCollapse);

// Hide navbar when modals trigger
$('.portfolio-modal').on('show.bs.modal', (e) => {
  $('.navbar').addClass('d-none');
});
$('.portfolio-modal').on('hidden.bs.modal', (e) => {
  $('.navbar').removeClass('d-none');
});
