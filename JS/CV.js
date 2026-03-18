const nav = document.querySelector("nav");
const fleche1 = document.querySelector(".fleche1");
const fleche2 = document.querySelector(".fleche2");
const fleche3 = document.querySelector(".fleche3");
const fleche4 = document.querySelector(".fleche4");
const box2 = document.querySelector(".box2");
const box3 = document.querySelector(".box3");
const box4 = document.querySelector(".box4");
const box5 = document.querySelector(".box5");
const fleches = document.querySelectorAll("img");
const mousemove = document.querySelector(".mousemove");

// ----------- navbar -----------

window.addEventListener("scroll", () => {
  if (window.scrollY > 120) {
    nav.style.background = "rgb(40, 40, 41)";
  } else {
    nav.style.background = "transparent";
  }
});

// ----------- fleches ----------

fleche1.addEventListener("click", () => {
  box2.style.visibility = "visible";
  setTimeout(() => {
    fleche2.style.visibility = "visible";
  }, 1000);
});
fleche2.addEventListener("click", () => {
  box3.style.visibility = "visible";
  setTimeout(() => {
    fleche3.style.visibility = "visible";
  }, 1000);
});
fleche3.addEventListener("click", () => {
  box4.style.visibility = "visible";
  setTimeout(() => {
    fleche4.style.visibility = "visible";
  }, 1000);
});
fleche4.addEventListener("click", () => {
  box5.style.visibility = "visible";
});

function apparitionFleche() {
  (fleche2, fleche3, (fleche4.style.visibility = "visible"));
}
