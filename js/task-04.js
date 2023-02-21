let count = document.querySelector("#value");
let number = 0;

const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');

const onIncreaseCounter = () => {
  number += 1;
  count.innerHTML = number;
};

const onDecrementCounter = () => {
  number -= 1;
  count.innerHTML = number;
};

decrementBtn.addEventListener("click", onDecrementCounter);
incrementBtn.addEventListener("click", onIncreaseCounter);
