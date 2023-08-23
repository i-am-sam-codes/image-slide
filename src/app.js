init();

function init() {
  const prevButton = document.querySelector("#prev-button");
  const nextButton = document.querySelector("#next-button");

  prevButton.addEventListener("click", () => {
    previousImg();
  });

  nextButton.addEventListener("click", () => {
    nextImg();
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
  console.log({ firstImg });

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
