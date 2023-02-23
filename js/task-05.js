const input = document.querySelector("#name-input");
const message = document.querySelector("#name-output");

input.addEventListener("input", onInputChange);

function onInputChange(event) {
  return input.value.trim() === ""
    ? (message.textContent = "Anonymous")
    : (message.textContent = event.currentTarget.value);
}
