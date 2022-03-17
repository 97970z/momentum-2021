const colors = [
    "#ef5777",
    "#575fcf",
    "#4bcffa",
    "#34e7e4",
    "#0be881",
    "#f53b57",
    "#3c40c6",
    "#0fbcf9",
    "#00d8d6",
    "#05c46b",
    "#ffc048",
    "#ffdd59",
    "#ff5e57",
    "#d2dae2",
    "#485460",
    "#ffa801",
    "#ffd32a",
    "#ff3f34"
  ];
  const click = document.querySelector("#getColor");


  function clickEvent() {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    const randomColor2 = colors[Math.floor(Math.random() * colors.length)];
    const colorChange = document.createElement("style");

    colorChange.innerHTML = `body{background: linear-gradient(0.25turn, ${randomColor}, ${randomColor2})}`;
    document.body.appendChild(colorChange);
  }

  click.addEventListener("click", clickEvent);