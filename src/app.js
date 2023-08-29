init();

function init() {
  const prevButton = document.querySelector("#prev-button");
  const nextButton = document.querySelector("#next-button");
  const dots = document.querySelectorAll(".dot");

  prevButton.addEventListener("click", () => {
    previousImg();
  });

  nextButton.addEventListener("click", () => {
    nextImg();
  });

  dots.forEach((dot) => {
    dot.addEventListener("click", () => {
      goToImage(dot.dataset.index);
    });
  });
}

function previousImg() {
  const imgContainer = document.querySelector("#img-container");

  const currentImg = imgContainer.querySelector(".translate-x-0");
  currentImg.classList.remove("translate-x-0");
  currentImg.classList.add("translate-x-full");

  const previousImg = currentImg.previousElementSibling;

  if (!previousImg) return lastImg();

  previousImg.classList.remove("-translate-x-full");
  previousImg.classList.add("translate-x-0");
}

function nextImg() {
  const imgContainer = document.querySelector("#img-container");

  const currentImg = imgContainer.querySelector(".translate-x-0");
  currentImg.classList.remove("translate-x-0");
  currentImg.classList.add("-translate-x-full");

  const nextImg = currentImg.nextElementSibling;

  if (!nextImg) return firstImg();

  nextImg.classList.remove("translate-x-full");
  nextImg.classList.add("translate-x-0");
}

function firstImg() {
  const imgContainer = document.querySelector("#img-container");

  for (const img of imgContainer.children) {
    img.classList.remove("-translate-x-full");
    img.classList.add("translate-x-full");
  }

  const firstImg = imgContainer.firstElementChild;

  firstImg.classList.remove("translate-x-full");
  firstImg.classList.add("translate-x-0");
}

function lastImg() {
  const imgContainer = document.querySelector("#img-container");

  for (const img of imgContainer.children) {
    img.classList.remove("translate-x-full");
    img.classList.add("-translate-x-full");
  }

  const lastImg = imgContainer.lastElementChild;

  lastImg.classList.remove("-translate-x-full");
  lastImg.classList.add("translate-x-0");
}

function goToImage(index) {
  const imgContainer = document.querySelector("#img-container");

  const prevImages = [];
  let currentImg;
  const nextImages = [];

  for (const img of imgContainer.children) {
    img.classList.remove(
      "translate-x-0",
      "translate-x-full",
      "-translate-x-full"
    );

    if (img.dataset.index < index) prevImages.push(img);
    if (img.dataset.index === index) currentImg = img;
    if (img.dataset.index > index) nextImages.push(img);
  }

  for (const img of prevImages) img.classList.add("translate-x-full");

  for (const img of nextImages) img.classList.add("-translate-x-full");

  currentImg.classList.add("translate-x-0");
}
