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


// image slider

const thumbnails = document.querySelectorAll(".image-grid");
const sliderDots = document.querySelectorAll(".slider-dots");
const images = document.querySelectorAll(".product-images")

