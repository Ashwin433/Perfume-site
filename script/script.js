document.addEventListener("DOMContentLoaded", () => {
  const singleCard = document.querySelector(".subscription-card-active");
  const doubleCard = document.querySelector(".subscription-card");

  const singleRadio = singleCard.querySelector('input[name="subscription"]');
  const doubleRadio = doubleCard.querySelector('input[name="subscription"]');
  
  // Single selected
  singleRadio.addEventListener("change", () => {
    if (singleRadio.checked) {
      singleCard.classList.remove("collapsed");
      doubleCard.classList.remove("active");
    }
  });

  // Double selected
  doubleRadio.addEventListener("change", () => {
    if (doubleRadio.checked) {
      singleCard.classList.add("collapsed");
      doubleCard.classList.add("active");
    }
  });
});

const sliderBtnLeft = document.querySelector('.slider-btn.left');
const sliderBtnRight = document.querySelector('.slider-btn.right');
const dots = document.querySelector('.sliderDts.dot')
const mainImage = document.querySelector('#mainProductImage');
const imagegrid = document.querySelector('#imageGrid')

const images = [
  "images/grid image 1.png",
  "images/grid image 2.png",
  "images/grid image 3.png",
  "images/grid image 4.png"
]

let currentIndex = 0;

for (let i = 0; i < images.length * 2; i++) {
  const index = i % images.length;

  const img = document.createElement("img");
  img.src = images[index];
  img.alt = "img-thumbnail";
  img.addEventListener("click", () => setImage(index));
  imagegrid.appendChild(img);
}



sliderBtnLeft.addEventListener('click', () => {
  currentIndex = ( currentIndex - 1 + images.length) %images.length;
  setImage(currentIndex);
  console.log('left clicked');
});
sliderBtnRight.addEventListener('click', () => {
  currentIndex = ( currentIndex + 1) % images.length;
  setImage(currentIndex);
  console.log('right clicked'); 
});


