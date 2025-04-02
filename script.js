// NAVIGATION SECTION GOSE HERE
document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.getElementById("nav-toggle");
  const nav = document.getElementById("nav");

  navToggle.addEventListener("click", () => {
    nav.classList.toggle("active");
    // Toggle icon between hamburger and close
    if (nav.classList.contains("active")) {
      navToggle.innerHTML = '<i class="fas fa-times"></i>';
    } else {
      navToggle.innerHTML = '<i class="fas fa-bars"></i>';
    }
  });
});

// ===== CUSTOM SCRIPT JAVASCRIPT OR THE CATEGORI SECTION =====
document.addEventListener("DOMContentLoaded", () => {
  const filterBtns = document.querySelectorAll(".filter-btn");
  const projectCards = document.querySelectorAll(".project-card");

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      // Remove 'active' from all buttons
      filterBtns.forEach((b) => b.classList.remove("active"));
      // Add 'active' to current button
      btn.classList.add("active");

      // Get category
      const category = btn.getAttribute("data-category");

      // Filter projects
      projectCards.forEach((card) => {
        const cardCat = card.getAttribute("data-cat");

        if (category === "all") {
          card.style.display = "flex";
        } else {
          // If the card's categories include the chosen category
          if (cardCat.includes(category)) {
            card.style.display = "flex";
          } else {
            card.style.display = "none";
          }
        }
      });
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const slider = document.getElementById("testimonial-slider");
  const testimonials = slider.children;
  const total = testimonials.length;
  let index = 0;

  // Function to show a testimonial by shifting the slider
  function showTestimonial(idx) {
    slider.style.transform = `translateX(-${idx * 100}%)`;
  }

  // Auto-rotate testimonials every 3 seconds
  setInterval(() => {
    index = (index + 1) % total;
    showTestimonial(index);
  }, 3000);
});
