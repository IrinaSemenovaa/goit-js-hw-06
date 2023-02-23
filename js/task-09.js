function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeColor = document.querySelector(".change-color");

changeColor.addEventListener("click", setBackgroundColor);

function setBackgroundColor() {
  const randomColor = getRandomHexColor();
  const colorName = document.querySelector(".color");

  document.body.style.backgroundColor = randomColor;
  colorName.textContent = randomColor;
}
