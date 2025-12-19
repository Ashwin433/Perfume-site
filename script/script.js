document.addEventListener("DOMContentLoaded", () => {

  const singleCard = document.querySelector(".subscription-card-active");
  const doubleCard = document.querySelector(".subscription-card.subscription-card-double");

  const radios = document.querySelectorAll('input[name="subscription"]');

  function activateSingle() {
    singleCard.classList.remove("collapsed");
    singleCard.classList.add("active");

    doubleCard.classList.add("collapsed");
    doubleCard.classList.remove("active");
  }

  function activateDouble() {
    singleCard.classList.add("collapsed");
    singleCard.classList.remove("active");

    doubleCard.classList.remove("collapsed");
    doubleCard.classList.add("active");
  }

  radios.forEach(radio => {
    radio.addEventListener("change", () => {
      if (radio.closest(".subscription-card-double")) {
        activateDouble();
      } else {
        activateSingle();
      }
    });
  });

  // INITIAL STATE
  const checked = document.querySelector('input[name="subscription"]:checked');
  if (checked && checked.closest(".subscription-card-double")) {
    activateDouble();
  } else {
    activateSingle();
  }
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

 function setImage(index) {
    currentIndex = index;
    mainImage.src = images[index];

    dots.forEach((dot, i) => {
      dot.classList.toggle("active", i === index);
    });
  }

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


