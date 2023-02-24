function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeColor = document.querySelector(".change-color");
const colorName = document.querySelector(".color");

changeColor.addEventListener("click", setBackgroundColor);

function setBackgroundColor() {
  const randomColor = getRandomHexColor();

  document.body.style.backgroundColor = randomColor;
  colorName.textContent = randomColor;
}
