$(document).ready(function () {
  $(".product-img-content").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: ".product-img-content2",
  });
  $(".product-img-content2").slick({
    dots: false,
    arrows: false,
    speed: 300,
    asNavFor: ".product-img-content",
    focusOnSelect: true,
    prevArrow:
      '<span class="slick-prev-arrow"><i class="fa-solid fa-chevron-left"></i></span>',
    nextArrow:
      '<span class="slick-next-arrow"><i class="fa-solid fa-chevron-right"></i></span>',
    autoplay: true,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    vertical: true,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
          vertical: true,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          vertical: false,
          arrows: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: true,
          vertical: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: true,
          vertical: false,
        },
      },
    ],
  });
});
