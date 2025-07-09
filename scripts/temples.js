// Display current year and last modified date
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

// Toggle menu for mobile view
const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("open");
  if (navMenu.classList.contains("open")) {
    navMenu.style.display = "flex";
    menuToggle.textContent = "✖";
  } else {
    navMenu.style.display = "none";
    menuToggle.textContent = "☰";
  }
});
