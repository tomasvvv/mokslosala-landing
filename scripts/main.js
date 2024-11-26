const LINE_SELECTOR = ".running-line-text";
const TEXT = " & mokslo sala > sveiki atvykę";
const SPEED = 67;
const INTERVAL = 100;

// $(window).on("load", () => {
//   const $line = $(LINE_SELECTOR);
//   const initialText = $line.text();

//   let tick = 0;

//   setInterval(() => {
//     console.log("tick", tick);

//     const currentText = $line.text();
//     if (tick >= initialText.length - 1) {
//       tick = 0;
//     }

//     const newText = currentText.slice(1) + currentText[0];

//     console.log("text: ", newText);

//     $line.text(newText);
//     tick++;
//   }, 100);
// });

$(window).on("load", () => {
  const $line = $(LINE_SELECTOR);
  const screenWidth = $(window).width();
  const initialText = $line.text();

  const pushText = () => {
    const newText = $line.text() + initialText;
    $line.text(newText);
  };

  while ($line.width() < screenWidth) {
    pushText();
  }
  pushText();

  let oddEvenTracker = 1;

  setInterval(() => {
    const currentLeft = parseInt($line.css("left").split("px")[0]) || 0;
    // const speed = 27.9; // parseInt($line.css("font-size").split("px")) || SPEED;

    oddEvenTracker = (oddEvenTracker + 1) % 2;

    const newLeft = currentLeft - (oddEvenTracker ? 27.9 : 28.0);

    if ($line.width() + newLeft < screenWidth) {
      pushText();
    }

    $line.css("left", `${newLeft}px`);
  }, INTERVAL);
});
