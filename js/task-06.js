const input = document.querySelector("#validation-input");

input.addEventListener("blur", onCheckInputCount);

function onCheckInputCount(event) {
  input.classList.remove("valid", "invalid");

  input.value.length === Number(input.dataset.length)
    ? input.classList.add("valid")
    : input.classList.add("invalid");
}
