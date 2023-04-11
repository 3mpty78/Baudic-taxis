// Hamburger script

const btn = document.querySelector(".nav-toggler");
const header = document.querySelector(".header");

document.addEventListener("click", (e) => {
  if (e.target.closest(".nav-toggler")) {
    btn.classList.toggle("toggle");
    header.classList.toggle("active");
  } else if (!e.target.closest(".nav-toggler")) {
    btn.classList.remove("toggle");
    header.classList.remove("active");
  }
});
document.addEventListener("scroll", (f) => {
  if (window.scrollY > 50) {
    btn.classList.remove("toggle");
    header.classList.remove("active");
  }
});

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
