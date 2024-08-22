$(".testimonialCarousel").owlCarousel({
  slideSpeed: 200,
  paginationSpeed: 400,
  margin: 20,
  autoplay: true,
  items: 4,
  loop: true,
  dots: false,
  autoplayHoverPause: true,
  nav: false,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 4,
    },
  },
});