$(".brands").owlCarousel({
  loop: true,
  margin: 16,
  dots: false,
  nav: true,
  navText: [
    "<i class='fas fa-chevron-left'></i>",
    "<i class='fas fa-chevron-right'></i>",
  ],
  responsive: {
    0: {
      items: 1,
    },
    768: {
      items: 3,
    },
    1440: {
      items: 4,
    },
  },
});
