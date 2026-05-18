document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menuToggle");
  const navMenu = document.getElementById("navMenu");

  if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", () => {
      // This line toggles the X animation
      menuToggle.classList.toggle("active");

      // This line opens/closes the menu
      navMenu.classList.toggle("is-open");
    });

    // Optional: Close menu when a link is clicked
    const navLinks = document.querySelectorAll(".eb-nav-item");
    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        menuToggle.classList.remove("active");
        navMenu.classList.remove("is-open");
      });
    });
  }
});
