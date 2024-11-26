const LINE_SELECTOR = ".running-line-text";
const TEXT = "& mokslo sala > sveiki atvykę";
const SPEED = 67;
const INTERVAL = 125;

$(window).on("load", () => {
  const $line = $(LINE_SELECTOR);
  const screenWidth = $(window).width();
  const initialText = $line.text();

  const pushText = () => {
    const newText = $line.text() + " " + initialText;
    $line.text(newText);
  };

  while ($line.width() < screenWidth) {
    pushText();
  }
  pushText();

  let oddEvenTracker = 1;

  setInterval(() => {
    const currentLeft = parseInt($line.css("left").split("px")[0]) || 0;

    oddEvenTracker = (oddEvenTracker + 1) % 2;

    const newLeft = currentLeft - (oddEvenTracker ? 27.9 : 28.0);

    if ($line.width() + newLeft < screenWidth) {
      pushText();
    }

    $line.css("left", `${newLeft}px`);
  }, INTERVAL);
});

$(window).on("load", () => {
  const $line = $(LINE_SELECTOR);
  const screenWidth = $(window).width();
  const initialText = $line.text();

  const pushText = () => {
    const newText = $line.text() + " " + initialText;
    $line.text(newText);
  };

  while ($line.width() < screenWidth) {
    pushText();
  }
  pushText();

  let oddEvenTracker = 1;

  setInterval(() => {
    const currentLeft = parseInt($line.css("left").split("px")[0]) || 0;

    oddEvenTracker = (oddEvenTracker + 1) % 2;

    const newLeft = currentLeft - (oddEvenTracker ? 27.9 : 28.0);

    if ($line.width() + newLeft < screenWidth) {
      pushText();
    }

    $line.css("left", `${newLeft}px`);
  }, INTERVAL);
});

$(window).on("load", () => {
  const $line = $(".running-line2-text");
  const screenWidth = $(window).width();
  const initialText = $line.text();

  const pushText = () => {
    const newText = $line.text() + " " + initialText;
    $line.text(newText);
  };

  while ($line.width() < screenWidth) {
    pushText();
  }
  pushText();

  let oddEvenTracker = 1;

  setInterval(() => {
    const currentLeft = parseInt($line.css("left").split("px")[0]) || 0;

    oddEvenTracker = (oddEvenTracker + 1) % 2;

    const newLeft = currentLeft - (oddEvenTracker ? 137.9 : 138.0);

    if ($line.width() + newLeft < screenWidth) {
      pushText();
    }

    $line.css("left", `${newLeft}px`);
  }, INTERVAL);
});

$(window).on("load", () => {
  const $line = $(".running-line3-text");
  const screenWidth = $(window).width();
  const initialText = $line.text();

  const pushText = () => {
    const newText = $line.text() + " " + initialText;
    $line.text(newText);
  };

  while ($line.width() < screenWidth) {
    pushText();
  }
  pushText();

  let oddEvenTracker = 1;

  setInterval(() => {
    const currentLeft = parseInt($line.css("left").split("px")[0]) || 0;

    const newLeft = currentLeft - 1;

    if ($line.width() + newLeft < screenWidth) {
      pushText();
    }

    $line.css("left", `${newLeft}px`);
  }, 10);
});
