// Mobile menu toggle
const toggle = document.querySelector(".menu-toggle");
const links = document.querySelector(".nav-links");

toggle.addEventListener("click", () => {
  const open = links.classList.toggle("open");
  toggle.setAttribute("aria-expanded", open);
});

// Keep the footer year current
document.getElementById("year").textContent = new Date().getFullYear();
