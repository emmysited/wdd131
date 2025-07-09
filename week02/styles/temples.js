// Set current year
document.getElementById('year').textContent = new Date().getFullYear();

// Format and set last modified date
const lastModified = new Date(document.lastModified);
document.getElementById('lastModified').textContent = lastModified.toLocaleDateString("en-US", {
  year: "numeric",
  month: "2-digit",
  day: "2-digit"
});

// Hamburger toggle
document.getElementById('menu-toggle').addEventListener('click', () => {
  const menu = document.getElementById('menu');
  menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
});
