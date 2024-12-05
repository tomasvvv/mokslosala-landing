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
});
