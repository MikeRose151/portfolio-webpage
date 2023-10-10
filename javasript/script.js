"use strict";

// Define an array of project card IDs and corresponding image IDs
const projectCardIds = ["tat", "enna", "ten-number-challenge", "rar"];

// Loop through the project card IDs and set up event listeners
projectCardIds.forEach((projectCardId) => {
  // define "card" variable with CSS id interpolation
  const card = document.querySelector(`#project-display-card-${projectCardId}`);
  // define "image" variable with CSS id interpolation
  const image = document.querySelector(
    `#project-display-card-image-${projectCardId}`
  );
  // define "title card" variable with CSS id interpolation
  const titleCard = document.querySelector(
    `#projects-display-card-title-${projectCardId}`
  );
  // define "title card heading" variable with CSS id interpolation
  const titleCardHeading = document.querySelector(
    `#projects-display-card-title-heading-${projectCardId}`
  );
  // define "title card chevron" variable with CSS id interpolation
  const titleCardChevron = document.querySelector(
    `#projects-display-card-chevron-${projectCardId}`
  );

  // event listener for "mouseover" to remove filter (i.e. blur)
  card.addEventListener("mouseover", function () {
    image.style.filter = "none";
    titleCard.style.height = "60%";
    titleCardHeading.style.animation = "none";
    titleCardChevron.style.opacity = "0";
  });

  // event listener for "mouseout" to re-add filter (i.e. blur) and title card effects
  card.addEventListener("mouseout", function () {
    image.style.filter = "blur(4px)";
    titleCard.style.height = "24%";
    titleCardHeading.style.animation = "bounce 2s ease infinite";
    titleCardChevron.style.opacity = "1";
  });
});
