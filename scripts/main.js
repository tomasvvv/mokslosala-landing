const LINE_SELECTOR = ".running-line-text";
const INTERVAL = 175;
const MAX_ITERATIONS = 100;

$(document).ready(function () {
  const $line = $(LINE_SELECTOR);
  let screenWidth = $(window).width();

  const initialText = $line.text();

  const pushText = () => {
    const newText = $line.text() + " " + initialText;
    $line.text(newText);
  };

  const reset = (initial = false) => {
    let iterationCount = 0;
    screenWidth = $(window).width();

    if (!initial) {
      $line.text(initialText);
      $line.css("left", "0px");
    }

    while ($line.width() < screenWidth && iterationCount < MAX_ITERATIONS) {
      pushText();
    }
    pushText();
  };

  reset(true);

  $(window).on("resize", () => {
    reset(false);
  });

  let oddEvenTracker = 1;

  setInterval(() => {
    const currentLeft = parseInt($line.css("left").split("px")[0]) || 0;

    oddEvenTracker = (oddEvenTracker + 1) % 2;

    const newLeft = currentLeft - (oddEvenTracker ? 13.9 : 14.0);

    if ($line.width() + newLeft < screenWidth) {
      pushText();
    }

    if (newLeft < -20000) {
      reset();
    } else {
      $line.css("left", `${newLeft}px`);
    }
  }, INTERVAL);

  if ($(window).width() >= 650) {
    const $footer = $("footer");
    const $runningLine = $(".running-line");

    const checkFooterVisibility = () => {
      const footerTop = $footer.offset().top;
      const footerBottom = footerTop + $footer.outerHeight();
      const windowBottom = $(window).scrollTop() + $(window).height();

      if (windowBottom >= footerTop && $(window).scrollTop() <= footerBottom) {
        $runningLine.css("position", "relative");
        $(".running-line-buffer").css("display", "none");
      } else {
        $runningLine.css("position", "fixed");
        $(".running-line-buffer").css("display", "block");
      }
    };

    $(window).on("scroll", checkFooterVisibility);
    checkFooterVisibility();
  }
});
