document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".subscription-card");
  const radios = document.querySelectorAll(
    'input[name="subscription"]'
  );

  function updateSelection() {
    cards.forEach(card => card.classList.remove("active"));

    radios.forEach(radio => {
      if (radio.checked) {
        radio.closest(".subscription-card").classList.add("active");
      }
    });
  }

  // Click anywhere on card
  cards.forEach(card => {
    card.addEventListener("click", () => {
      const radio = card.querySelector("input[type='radio']");
      radio.checked = true;
      updateSelection();
    });
  });

  // Initial state
  updateSelection();
});
