$(".owl-carousel").owlCarousel({
  loop: true,
  nav: false,
  dots: true,
  margin: 90,
  stagePadding: 50,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 3,
    },
  },
});
