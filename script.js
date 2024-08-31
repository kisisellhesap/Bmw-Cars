const openNav = document.querySelector("#res-open-icon");
const closeNav = document.querySelector("#res-close-icon");

openNav.addEventListener("click", () => {
  document.querySelector("nav").classList.add("open-nav-class");
});

closeNav.addEventListener("click", () => {
  document.querySelector("nav").classList.remove("open-nav-class");
});
