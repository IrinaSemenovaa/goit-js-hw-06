const itemEl = document.querySelectorAll(".item");
console.log("Number of categories:", itemEl.length);

const itemsEl = document.querySelector("#categories").children;
itemEl.forEach((element) => {
  const category = element.firstElementChild.textContent;
  const elements = element.lastElementChild.children.length;

  console.log("Category:", category);
  console.log("Elements:", elements);
});
