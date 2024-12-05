$(function () {
  let idx = 0;
  // const colArray = ["#ff0000", "#ff00ff", "#00ff00"];

  // $(window).on("resize", () => {
  //   $("#mobile-navigation").css("background-color", colArray[idx]);
  //   idx = (idx + 1) % 3;
  // });

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
