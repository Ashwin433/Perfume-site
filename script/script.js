// subscription card collapse
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

function toggleMenu() {
  const menu = document.querySelector(".menu");
  if (!menu) return;
  menu.classList.toggle("active");
}

// image slider
const sliderBtnLeft = document.querySelector('.slider-btn.left');
const sliderBtnRight = document.querySelector('.slider-btn.right');
const dots = document.querySelector('.sliderDts.dot')
const mainImage = document.querySelector('#mainProductImage');
const imagegrid = document.querySelector('#imageGrid')

const images = [
  "assets/images/grid image 1.png",
  "assets/images/grid image 2.png",
  "assets/images/grid image 3.png",
  "assets/images/grid image 4.png"
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


// Accordion

document.addEventListener("DOMContentLoaded", () => {
  const accordionItems = document.querySelectorAll(".accordion-item");

  accordionItems.forEach(item => {
    const header = item.querySelector(".accordion-header");
    const icon = item.querySelector(".accordion-icon");

    header.addEventListener("click", () => {
      const isOpen = item.classList.contains("open");

      // Close all accordions
      accordionItems.forEach(other => {
        other.classList.remove("open");
        other.querySelector(".accordion-icon").textContent = "+";
      });

      // Open clicked accordion if it was closed
      if (!isOpen) {
        item.classList.add("open");
        icon.textContent = "−";
      }
    });
  });
});

// numbers from 0 to 84,90 etc..
const counters = document.querySelectorAll(".base-info h3");

  const animateCounter = (counter) => {
    const target = parseInt(counter.dataset.target, 10);
    let current = 0;

    const speed = 100; // smaller = faster

    const update = () => {
      const increment = Math.ceil(target / speed);
      current += increment;

      if (current >= target) {
        counter.textContent = target + "%";
      } else {
        counter.textContent = current + "%";
        requestAnimationFrame(update);
      }
    };

    update();
  };

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          obs.unobserve(entry.target); // run only once
        }
      });
    },
    { threshold: 0.5 } // 50% visible
  );

  counters.forEach(counter => observer.observe(counter));


  const addToCartBtn = document.getElementById("addToCartBtn");

function updateAddToCartLink() {
  const subscription =
    document.querySelector('input[name="subscription"]:checked')?.value;

  const fragrance =
    document.querySelector('input[name="fragrance"]:checked')?.value;

  if (!subscription || !fragrance) return;

  // Dummy links for 9 combinations
  const linkMap = {
    single: {
      original: "https://example.com/cart?plan=single&frag=original",
      lilly: "https://example.com/cart?plan=single&frag=lilly",
      rose: "https://example.com/cart?plan=single&frag=rose"
    },
    double: {
      original: "https://example.com/cart?plan=double&frag=original",
      lilly: "https://example.com/cart?plan=double&frag=lilly",
      rose: "https://example.com/cart?plan=double&frag=rose"
    }
  };

  addToCartBtn.href = linkMap[subscription][fragrance];
}

// Listen to ALL relevant radio changes
document.querySelectorAll(
  'input[name="subscription"], input[name="fragrance"]'
).forEach(radio => {
  radio.addEventListener("change", updateAddToCartLink);
});








