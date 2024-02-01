var lastScrollTop = 0;
var navbarHeight = $("#navbar").outerHeight();

$(window).scroll(function () {
  var scrollTop = $(this).scrollTop();
  //   console.log(scrollTop);

  if (scrollTop > lastScrollTop && scrollTop > navbarHeight) {
    $("#navbar").css("top", -navbarHeight);
  } else {
    $("#navbar").css("top", "1rem");
  }
  lastScrollTop = scrollTop;
});
