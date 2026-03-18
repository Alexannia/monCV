// ----------- navbar -----------

const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
  if (window.scrollY > 120) {
    nav.style.background = "rgb(40, 40, 41)";
  } else {
    nav.style.background = "transparent";
  }
});
