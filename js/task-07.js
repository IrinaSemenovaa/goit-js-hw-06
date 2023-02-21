const input = document.querySelector("#font-size-control");
const value = document.querySelector("#text");

input.addEventListener("input", onChangeFontSize);

function onChangeFontSize(event) {
  value.style.fontSize = event.currentTarget.value + "px";
}
