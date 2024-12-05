$(function () {
  // for mobile devices, dynamically calculate min-height of first fold
  if ($(window).width() <= 650) {
    $(".intro-wrapper").css("min-height", $(window).height() + "px");

    const handleResize = () => {
      $(".intro-wrapper").css("min-height", "100vh");
    };
  }
});
