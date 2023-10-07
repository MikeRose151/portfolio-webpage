"use strict";

const tatCard = document.querySelector("#project-display-card-tat");
const tatImage = document.querySelector("#project-display-card-image-tat");

tatCard.addEventListener("mouseover", function () {
  tatImage.style.filter = "none";
});

tatCard.addEventListener("mouseout", function () {
  tatImage.style.filter = "blur(4px)";
});

const ennaCard = document.querySelector("#project-display-card-enna");
const ennaImage = document.querySelector("#project-display-card-image-enna");

ennaCard.addEventListener("mouseover", function () {
  ennaImage.style.filter = "none";
});

ennaCard.addEventListener("mouseout", function () {
  ennaImage.style.filter = "blur(4px)";
});

const tenNumberChallengeCard = document.querySelector(
  "#project-display-card-ten-number-challenge"
);
const tenNumberChallengeImage = document.querySelector(
  "#project-display-card-image-ten-number-challenge"
);

tenNumberChallengeCard.addEventListener("mouseover", function () {
  tenNumberChallengeImage.style.filter = "none";
});

tenNumberChallengeCard.addEventListener("mouseout", function () {
  tenNumberChallengeImage.style.filter = "blur(4px)";
});

const rarCard = document.querySelector("#project-display-card-rar");
const rarImage = document.querySelector("#project-display-card-image-rar");

rarCard.addEventListener("mouseover", function () {
  rarImage.style.filter = "none";
});

rarCard.addEventListener("mouseout", function () {
  rarImage.style.filter = "blur(4px)";
});
