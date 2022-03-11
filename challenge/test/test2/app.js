const body = document.querySelector("body");
const h1 = document.querySelector("h1");
h1.style.color = "white";

function handleResize() {
  const BasicWidth = window.innerWidth;

  if (BasicWidth >= 1000) {
    body.style.backgroundColor = "#3498db";
  } else if (BasicWidth <= 500) {
    body.style.backgroundColor = "#e74c3c";
  } else {
    body.style.backgroundColor = basicColor;
  }
}

const basicColor = "#9b59b6";
body.style.backgroundColor = basicColor;

window.addEventListener("resize", handleResize);
