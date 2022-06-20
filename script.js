const container = document.getElementById("container");
const gridBtn = document.getElementById("gridBtn");
const Green = document.getElementById("Green");
const Blue = document.getElementById("Blue");
const Red = document.getElementById("Red");
const Yellow = document.getElementById("Yellow");
const White = document.getElementById("White");
const Random = document.getElementById("Random");

let x = 16;
let y = 16;
let color = "blue";
gridBtn.addEventListener("click", () => {
  resetDiv();
  x = Number(prompt("Enter x (between 0 to 20)"));
  y = Number(prompt("Enter y (between 0 to 20)"));
  if (
    x > 20 ||
    y > 20 ||
    x === 0 ||
    y === 0 ||
    typeof x === "number" ||
    typeof y === "number"
  ) {
    alert("Your number is not valid");
    return;
  }
  createDiv();
});

const createDiv = () => {
  for (let i = 0; i < x * y; i++) {
    let el = document.createElement("div");
    container.append(el);
    el.classList.add("div-grid");
  }
  //mouseenter
  const div = document.querySelectorAll(".div-grid");
  for (let d of div) {
    d.addEventListener("mouseenter", () => {
      d.style.backgroundColor = `${color}`;
    });
  }
};

const resetDiv = () => {
  const div = document.querySelectorAll(".div-grid");
  for (let d of div) {
    d.remove();
  }
};

// Game Start
const runDiv = () => {
  createDiv();
};
runDiv();

Green.addEventListener("click", () => {
  color = "green";
});
Blue.addEventListener("click", () => {
  color = "Blue";
});
Red.addEventListener("click", () => {
  color = "Red";
});
Yellow.addEventListener("click", () => {
  color = "Yellow";
});
White.addEventListener("click", () => {
  color = "White";
});
Random.addEventListener("click", () => {
  let num1 = Math.floor(Math.random() * 255 + 1);
  let num2 = Math.floor(Math.random() * 255 + 1);
  let num3 = Math.floor(Math.random() * 255 + 1);
  color = `rgb(${num1},${num2},${num3})`;
});
