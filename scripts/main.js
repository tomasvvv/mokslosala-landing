const LINE_SELECTOR = ".running-line-text";
const TEXT = "& mokslo sala > sveiki atvykę";
const SPEED = 67;
const INTERVAL = 150;

$(window).on("load", () => {
  const $line = $(LINE_SELECTOR);
  const screenWidth = $(window).width();
  const initialText = $line.text();
  const widthOfOneText = $line.width();

  console.log("initialText", initialText, widthOfOneText);

  while ($line.width() < screenWidth) {
    const newText = $line.text() + " " + initialText;
    $line.text(newText);
  }

  $line.text($line.text() + initialText);

  setInterval(() => {
    const currentLeft = parseInt($line.css("left").split("px")[0]);
    const newLeft = currentLeft - SPEED;

    if ($line.width() + newLeft < screenWidth) {
      $line.text($line.text() + " " + initialText);
    }

    $line.css("left", `${newLeft}px`);
  }, INTERVAL);

  // const lines = $(LINE_SELECTOR).toArray();
  // const screenWidth = $(window).width();

  // lines.forEach((node, index) => {
  //   const $node = $(node);

  //   let textContent = TEXT;
  //   $node.text(textContent);

  //   while ($node.width() < screenWidth) {
  //     textContent += " " + TEXT;
  //     $node.text(textContent);
  //   }

  //   $node.css("background-color", index === 0 ? "red" : "yellow");
  // });

  // lines.forEach((node, index) => {
  //   $node = $(node);
  //   console.log($node.outerWidth(), $node.width());

  //   if (index === 1) {
  //     // second node
  //     const $previousNode = $(lines[0]);
  //     $node.css("transform", `translateX(${$previousNode.width()}px)`);
  //   }
  // });

  // setInterval(() => {
  //   const nodesOrdered = $(lines).sort((a, b) => $(a).position().left - $(b).position().left);

  //   nodesOrdered.toArray().forEach((node, index) => {
  //     const $node = $(node);
  //     const $anotherNode = $(index === 0 ? nodesOrdered[1] : nodesOrdered[0]);

  //     const currentTransformX = parseInt($node.css("transform").split(",")[4]) || 0;
  //     const newTransformX = currentTransformX - SPEED;

  //     $node.css("transform", `translateX(${newTransformX}px)`);

  //     if ($node.position().left < $anotherNode.position().left && $node.width() + $node.position().left >= 0) {
  //       const anotherNodePositionAndWidth = $anotherNode.position().left + $anotherNode.width();

  //       $node.css("transform", `translateX(${anotherNodePositionAndWidth}px)`);
  //     }
  //   });

  //   // console.log($(lines[0]).position().left, $(lines[1]).position().left);

  //   // const firstNodeTransform = parseInt(firstNode.css("transform").split(",")[4]) || 0;
  //   // const lastNodeTransform = parseInt(lastNode.css("transform").split(",")[4]) || 0;

  //   // const newTransform = firstNodeTransform - SPEED;

  //   // firstNode.css("transform", `translateX(${newTransform}px)`);

  //   // if (newTransform + firstNode.width() < 0) {
  //   //   const lastNodeWidth = lastNode.width();
  //   //   firstNode.css("transform", `translateX(${lastNodeTransform + lastNodeWidth}px)`);
  //   //   lines.push(lines.shift()); // Move the first node to the end of the array
  //   // }
  // }, INTERVAL);
});
