const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const imagesContainer = document.querySelector(".gallery");

const elements = images.map((image) => {
  const itemsEl = document.createElement("li");
  itemsEl.classList.add("gallery__item");

  const imageEl = document.createElement("img");
  imageEl.src = image.url;
  imageEl.alt = image.alt;

  itemsEl.appendChild(imageEl);

  return itemsEl;
});

imagesContainer.append(...elements);
console.log(elements);