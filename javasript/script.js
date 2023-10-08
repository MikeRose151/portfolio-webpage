"use strict";

// Define an array of project card IDs and corresponding image IDs
const projectCardIds = [
  "tat",
  "enna",
  "ten-number-challenge",
  "rar"
];

// Loop through the project card IDs and set up event listeners
projectCardIds.forEach(id) {
  // define "card" variable with CSS id interpolation
  const card = document.querySelector(`#project-display-card-${id}`);
  // define "image" variable with CSS id interpolation
  const image = document.querySelector(`#project-display-card-image-${id}`);

  // event listener for "mouseover" to remove filter (i.e. blur)
  card.addEventListener("mouseover", function () {
    image.style.filter = "none";
  });

  // event listener for "mouseout" to re-add filter (i.e. blur)
  card.addEventListener("mouseout", function () {
    image.style.filter = "blur(4px)";
  });

}
