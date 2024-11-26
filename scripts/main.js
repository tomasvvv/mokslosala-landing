const LINE_SELECTOR = ".running-line-text";
const TEXT = "& mokslo sala > sveiki atvykę";
const SPEED = 67;
const INTERVAL = 480;

$(window).on("load", () => {
  const $line = $(LINE_SELECTOR);
  const screenWidth = $(window).width();
  const initialText = $line.text();
  const speed = parseInt($line.css("font-size").split("px")) || SPEED;

  const pushText = () => {
    const newText = $line.text() + initialText;
    $line.text(newText);
  };

  while ($line.width() < screenWidth) {
    pushText();
  }
  pushText();

  setInterval(() => {
    const currentLeft = parseInt($line.css("left").split("px")[0]) || 0;
    const newLeft = currentLeft - speed;

    if ($line.width() + newLeft < screenWidth) {
      pushText();
    }

    $line.css("left", `${newLeft}px`);
  }, INTERVAL);
});
