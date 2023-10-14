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
  // define "title card paragraph" variable with CSS id interpolation
  const titleCardParagraph = document.querySelector(
    `#projects-display-card-paragraph-${projectCardId}`
  );

  // event listener for "mouseover" to remove filter (i.e. blur)
  card.addEventListener("mouseover", function () {
    image.style.filter = "none";
    titleCard.style.transition = "height 0.5s ease-in-out 0.6s";
    titleCard.style.height = "60%";
    titleCardHeading.style.animation = "none";
    titleCardParagraph.style.transition = "opacity 0.8s ease 0.8s";
    titleCardParagraph.style.opacity = "1";
    titleCardParagraph.style.pointerEvents = "auto";
    titleCardChevron.style.opacity = "0";
  });

  // event listener for "mouseout" to re-add filter (i.e. blur) and title card effects
  card.addEventListener("mouseout", function () {
    image.style.filter = "blur(4px)";
    titleCard.style.transition = "height 0.5s ease-in-out 0.2s";
    titleCard.style.height = "24%";
    titleCardHeading.style.animation = "bounce 2s ease infinite";
    titleCardParagraph.style.transition = "opacity 0.2s ease 0.2s";
    titleCardParagraph.style.opacity = "0";
    titleCardParagraph.style.pointerEvents = "none";
    titleCardChevron.style.opacity = "1";
  });
});

// Projects section scroll buttons
const sliderButtonRight = document.getElementById("slider-button-right");
const sliderButtonLeft = document.getElementById("slider-button-left");
const sliderContainer = document.querySelector(".slider-container");
const projectCard = document.querySelector(".projects-display-card");

// Variables to keep track of the currently visible card and container width
let currentCardIndex = 0;
const cardWidth = projectCard.offsetWidth;

// Add a click event listener to the right button
sliderButtonRight.addEventListener("click", () => {
  // Calculate how much to scroll to make the next card fully visible on the left
  const nextCardIndex = currentCardIndex + 1;
  const scrollAmount = nextCardIndex * cardWidth;

  // Scroll the slider container to show the next card on the left
  sliderContainer.scroll({
    top: 0,
    left: scrollAmount,
    behavior: "smooth",
  });

  // Update the currently visible card index
  currentCardIndex = nextCardIndex;
});

// Add a click event listener to the left button
sliderButtonLeft.addEventListener("click", () => {
  // Calculate how much to scroll to show the previous card on the left
  const previousCardIndex = currentCardIndex - 1;
  const scrollAmount = previousCardIndex * cardWidth;

  // Scroll the slider container to show the previous card on the left
  sliderContainer.scroll({
    top: 0,
    left: scrollAmount,
    behavior: "smooth",
  });

  // Update the currently visible card index
  currentCardIndex = previousCardIndex;
});
