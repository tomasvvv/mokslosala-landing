$(function () {
  const resizeNav = () => {
    $("#mobile-navigation").css("height", $(window).height() + "px");
  };

  $(window).on("resize", resizeNav);

  const handleOpen = () => {
    $("html").css("overflow", "hidden");

    $("#bottom-menu").css("visibility", "hidden");
    $("#mobile-navigation").removeClass("hidden");
    $("#mobile-navigation").addClass("flex");

    resizeNav();
  };

  const handleClose = () => {
    $("html").css("overflow", "unset");

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
});
