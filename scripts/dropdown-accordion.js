$(document).ready(function () {
  $(".accordionBtn").on("click", function () {
    $(this).toggleClass("active");

    let panel = $(this).next();
    let chevron = $(this).children();

    if (panel.css("display") === "block") {
      panel.css("display", "none");
      chevron.css("transform", "rotate(0deg");
    } else {
      panel.css("display", "block");
      chevron.css("transform", "rotate(180deg");
    }
  });
});
