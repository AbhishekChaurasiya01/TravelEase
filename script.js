// ===================================================
// TravelEase - Simple JavaScript
// ===================================================

// 1) Toggle the mobile navigation menu when hamburger icon is clicked
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle) {
  menuToggle.addEventListener("click", function () {
    navLinks.classList.toggle("show");
  });
}

// 2) Filter destination cards by category (used on destinations.html)
const filterButtons = document.querySelectorAll(".filter-btn");
const cards = document.querySelectorAll(".card");

filterButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    
    filterButtons.forEach(function (btn) {
      btn.classList.remove("active");
    });
    button.classList.add("active");

    const selectedCategory = button.getAttribute("data-category");

    cards.forEach(function (card) {
      const cardCategory = card.getAttribute("data-category");

      if (selectedCategory === "all" || cardCategory === selectedCategory) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});

// 3) Simple contact form message (no real backend, just for demo)
const contactForm = document.querySelector(".contact-form");

if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Thank you! Your message has been sent.");
    contactForm.reset();
  });
}
