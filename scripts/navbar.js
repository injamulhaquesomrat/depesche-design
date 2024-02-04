$(document).ready(function () {
  let lastScrollTop = 0;
  let navbarHeight = $("#navbar").outerHeight();

  $(window).scroll(function () {
    let scrollTop = $(this).scrollTop();

    if (scrollTop > lastScrollTop && scrollTop > navbarHeight) {
      $("#navbar").css("top", -navbarHeight);
    } else {
      $("#navbar").css("top", "1rem");
    }
    lastScrollTop = scrollTop;
  });

  let dropdownContainer = $(".dropdown-container");
  let breadcrumb = $(".breadcrumb");
  let closeBtn = $(".close-btn");
  // show dropdown container
  breadcrumb.on("click", function () {
    dropdownContainer.css("top", "0");
  });
  // hide dropdown container
  closeBtn.on("click", function () {
    dropdownContainer.css("top", "-2000px");
  });
});
