// Wait for DOM to load
document.addEventListener("DOMContentLoaded", function () {

  // Toggle Dropdown for "Services"
  const dropdown = document.querySelector(".dropdown");
  const dropdownContent = document.querySelector(".dropdown-content");

  dropdown.addEventListener("mouseenter", () => {
    dropdownContent.style.display = "block";
  });

  dropdown.addEventListener("mouseleave", () => {
    dropdownContent.style.display = "none";
  });

  // Optional: Scroll to top button (if you add one in HTML)
  const scrollBtn = document.getElementById("scrollToTop");

  if (scrollBtn) {
    window.addEventListener("scroll", () => {
      scrollBtn.style.display = window.scrollY > 400 ? "block" : "none";
    });

    scrollBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // Optional: Smooth scroll for anchor links
  const links = document.querySelectorAll("a[href^='#']");
  links.forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

});
