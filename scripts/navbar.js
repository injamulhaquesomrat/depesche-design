$(document).ready(function () {
  let lastScrollTop = 0;
  let navbarHeight = $("#navbar").outerHeight();
  let dropdownContainer = $(".dropdown-container");
  let breadcrumb = $(".breadcrumb");
  let closeBtn = $(".close-btn");
  let searchBar = $(".search-container");
  let searchBtn = $(".search-item");

  // hide navbar on scroll
  $(window).scroll(function () {
    let scrollTop = $(this).scrollTop();

    if (scrollTop > lastScrollTop && scrollTop > navbarHeight) {
      $("#navbar").css("top", -navbarHeight);
    } else {
      $("#navbar").css("top", "1rem");
    }
    lastScrollTop = scrollTop;
  });

  // show dropdown container
  breadcrumb.on("click", function () {
    dropdownContainer.css("top", "0");
    searchBar.css("top", "-800px");
  });
  // hide dropdown container
  closeBtn.on("click", function () {
    dropdownContainer.css("top", "-2000px");
    searchBar.css("top", "-800px");
  });

  // dropdown searchbar
  searchBtn.on("click", function () {
    dropdownContainer.css("top", "-2000px");
    searchBar.css("top", "0");
  });
});
