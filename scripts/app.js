document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");

  hamburger.addEventListener("click", () => {
    // navLinks.classList.toggle("hidden");
    navLinks.classList.toggle("show");
  });

  // Optional: Close the menu when a link is clicked
  navLinks.addEventListener("click", (e) => {
    if (e.target.tagName === "A") {
      // navLinks.classList.add("hidden");
      navLinks.classList.remove("show");
    }
  });
});
