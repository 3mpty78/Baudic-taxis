const btn = document.querySelector(".hamburger-container");
const header = document.querySelector(".header");

btn.addEventListener("click", () => {
  header.classList.toggle("active");
});
