$(".home-speaker-carousel").owlCarousel({
  autoplayTimeout: 5000, // 5 seconds autoplay timeout
  smartSpeed: 1000, // Transition speed for smooth scrolling
  autoplaySpeed: 1000,
  margin: 0,
  autoplay: true,
  items: 4,
  loop: true,
  dots: false,
  nav: false,
  navText: [
    "<i class='fa fa-angle-left' aria-hidden='true'></i>",
    "<i class='fa fa-angle-right' aria-hidden='true'></i>",
  ],
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 3,
    },
    1200: {
      items: 4,
    },
  },
});



$(".portfolio-speaker-carousel").owlCarousel({
  autoplayTimeout: 5000, // 5 seconds autoplay timeout
  smartSpeed: 1000, // Transition speed for smooth scrolling
  autoplaySpeed: 1000,
  margin: 20,
  autoplay: true,
  items: 4,
  loop: true,
  dots: false,
  nav: false,
  navText: [
    "<i class='fa fa-angle-left' aria-hidden='true'></i>",
    "<i class='fa fa-angle-right' aria-hidden='true'></i>",
  ],
  responsiveClass: true,
  responsive: {
    0: {
      items: 2,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 4,
    },
    1200: {
      items: 6,
    },
  },
});


$(".keyplayers-carousel").owlCarousel({
  autoplayTimeout: 5000, // 5 seconds autoplay timeout
  smartSpeed: 1000, // Transition speed for smooth scrolling
  autoplaySpeed: 1000,
  margin: 40,
  autoplay: true,
  items: 4,
  loop: true,
  dots: false,
  nav: false,
  navText: [
    "<i class='fa fa-angle-left' aria-hidden='true'></i>",
    "<i class='fa fa-angle-right' aria-hidden='true'></i>",
  ],
  responsiveClass: true,
  responsive: {
    0: {
      items: 2,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 4,
    },
    1200: {
      items: 4,
    },
  },
});
