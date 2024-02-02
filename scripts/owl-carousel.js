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

// prodcuts

$(".products").owlCarousel({
  loop: true,
  margin: 20,
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
    576: {
      items: 2,
    },
    768: {
      items: 3,
    },
    992: {
      items: 4,
    },
    1440: {
      items: 6,
    },
  },
});

// news
$(".news").owlCarousel({
  loop: true,
  margin: 16,
  nav: true,
  navText: [
    "<i class='fas fa-chevron-left'></i>",
    "<i class='fas fa-chevron-right'></i>",
  ],
  dots: false,
  responsive: {
    0: {
      items: 1,
    },
    768: {
      items: 2,
    },
    1200: {
      items: 3,
    },
  },
});
