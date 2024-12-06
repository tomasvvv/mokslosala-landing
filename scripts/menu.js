$(function () {
  const handleOpen = () => {
    $("html").css("overflow", "hidden");
    $("body").css("overflow", "hidden");

    $("#bottom-menu").css("visibility", "hidden");
    $("#mobile-navigation").removeClass("hidden");
    $("#mobile-navigation").addClass("flex");
  };

  const handleClose = () => {
    $("html").css("overflow", "auto");
    $("body").css("overflow", "auto");

    $("#bottom-menu").css("visibility", "visible");
    $("#mobile-navigation").addClass("hidden");
    $("#mobile-navigation").removeClass("flex");
  };

  $("#open-burger").on("click", () => {
    handleOpen();
  });

  $("#close-burger").on("click", () => {
    handleClose();
  });

  const isMobile = $(window).width() < 768;

  $(window).on("scroll", () => {
    if (!isMobile) return;

    const scrollThresholdMobile = $("#scroll-treshold-mobile").offset().top - 80;
    const currentScroll = $(window).scrollTop();

    if (currentScroll > scrollThresholdMobile) {
      $("#bottom-menu").css("position", "fixed");
      $("#bottom-menu").css("top", "80px");
      $("#bottom-menu").css("left", "0");
      $("#bottom-menu").css("padding", "0 16px");
    } else {
      $("#bottom-menu").css("position", "absolute");
      $("#bottom-menu").css("top", "unset");
      $("#bottom-menu").css("padding", "unset");
    }
  });
});
