// Toggle dark/light mode using Font Awesome icons
const modeToggle = document.getElementById("modeToggle");
modeToggle.addEventListener("click", () => {
  // Toggle dark mode class on body
  document.body.classList.toggle("dark-mode");
  document.body.classList.toggle("light-mode");
  // Update the icon: if in dark mode show sun, else show moon
  if (document.body.classList.contains("dark-mode")) {
    modeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
  } else {
    modeToggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
  }
});

// Handle contact form submission
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;
  if (name && email && message) {
    alert(`Thank you, ${name}! Your message has been sent.`);
    this.reset();
  } else {
    alert("Please fill in all fields.");
  }
});

// Testimonials Slider (automatic)
const slides = document.querySelectorAll(".testimonial-slide");
let currentSlide = 0;
function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === index);
  });
}
function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}
showSlide(currentSlide);
setInterval(nextSlide, 5000);
