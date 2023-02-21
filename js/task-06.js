const input = document.querySelector("#validation-input");
const validation = document.querySelector('input[data-length="6"]');

input.addEventListener("blur", onCheckInputCount);

function onCheckInputCount(event) {
  input.value.length == validation.dataset.length
    ? input.classList.remove("invalid") || input.classList.add("valid")
    : input.classList.remove("valid") || input.classList.add("invalid");
}
