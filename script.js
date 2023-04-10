// Hamburger script

const btn = document.querySelector(".hamburger-container");
const header = document.querySelector(".header");

btn.addEventListener("click", () => {
  header.classList.toggle("active");
});

// Services script

// Sliders script

const slider = document.querySelector(".slider");
const leftArrow = document.querySelector(".left");
const rightArrow = document.querySelector(".right");

let index = 0;

leftArrow.addEventListener("click", () => {
  index = index > 0 ? index - 1 : 2;
  slider.style.transform = "translate(" + index * -33.333 + "%)";
});
rightArrow.addEventListener("click", () => {
  index = index < 2 ? index + 1 : 0;
  slider.style.transform = "translate(" + index * -33.333 + "%)";
});
