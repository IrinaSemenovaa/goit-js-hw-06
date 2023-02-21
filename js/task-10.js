function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
// const controls = document.querySelector("controls");
const numberEl = document.querySelector('[type="number"]');
const createBtnEl = document.querySelector("button[data-create]");
const destroyBtnEl = document.querySelector("button[data-destroy]");
const boxesEl = document.getElementById("boxes");

createBtnEl.addEventListener("click", () => {
  createBoxes(numberEl.value);
});

destroyBtnEl.addEventListener("click", destroyBoxes);

function destroyBoxes() {
  numberEl.value = "";
  boxesEl.innerHTML = "";
}

function createBoxes(event) {
  let size = 30;
  const boxesArray = [];
  for (let i = 0; i < event; i += 1) {
    size += 10;
    const div = `<div class="item" style="display: block; margin-right: 30px; margin-bottom: 30px; background-color: ${getRandomHexColor()}; width: ${size}px; height: ${size}px;"></div>`;
    boxesArray.push(div);
  }
  boxesEl.insertAdjacentHTML("beforeend", boxesArray.join(""));
}
