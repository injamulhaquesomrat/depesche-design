// navbar accordion
$(document).ready(function () {
  $(".accordionBtn").on("click", function () {
    // Remove the active class from all accordion buttons
    $(".accordionBtn").not(this).removeClass("active");

    // Hide the panels of all accordion items except the one that was clicked
    $(".accordionBtn").not(this).next().css("display", "none");

    // Reset the chevron rotation of all accordion items except the one that was clicked
    $(".accordionBtn").not(this).children().css("transform", "rotate(0deg)");

    // Toggle the active class and display of the clicked accordion item
    $(this).toggleClass("active");
    let panel = $(this).next();
    let chevron = $(this).children();

    if (panel.css("display") === "block") {
      panel.css("display", "none");
      chevron.css("transform", "rotate(0deg)");
    } else {
      panel.css("display", "block");
      chevron.css("transform", "rotate(180deg)");
    }
  });
});

// filter accodion
$(document).ready(function () {
  $(".filterBtn").on("click", function () {
    // Remove the active class from all accordion buttons
    $(".filterBtn").not(this).removeClass("active");

    // Hide the panels of all accordion items except the one that was clicked
    $(".filterBtn").not(this).next().css("display", "none");

    // Reset the chevron rotation of all accordion items except the one that was clicked
    $(".filterBtn").not(this).children().css("transform", "rotate(0deg)");

    // Toggle the active class and display of the clicked accordion item
    $(this).toggleClass("active");
    let panel = $(this).next();
    let chevron = $(this).children();

    if (panel.css("display") === "block") {
      panel.css("display", "none");
      chevron.css("transform", "rotate(0deg)");
    } else {
      panel.css("display", "block");
      chevron.css("transform", "rotate(180deg)");
    }
  });
});

// simple dropdown
$(document).ready(function () {
  $(".dropdown").on("click", function () {
    $(".dropdown-content").toggle();
  });
});

// faq accordion
$(document).ready(function () {
  $(".faq-accordion-btn").click(function () {
    var $accordionItem = $(this).closest(".faq-accordion-item");

    if (!$accordionItem.hasClass("active")) {
      $(".faq-accordion-item").removeClass("active");
      $accordionItem.addClass("active");
    } else {
      $accordionItem.removeClass("active");
    }
  });
});
