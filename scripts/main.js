const LINE_SELECTOR = ".running-line-text";
const INTERVAL = 150;
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

    const newLeft = currentLeft - 12;

    if ($line.width() + newLeft < screenWidth) {
      pushText();
    }

    if (newLeft < -20000) {
      reset();
    } else {
      $line.css("left", `${newLeft}px`);
    }
  }, INTERVAL);
});
