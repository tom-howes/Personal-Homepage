// js/main.js
// Entry point — loaded with type="module"

import { initCollage } from "./collage.js";

// Only initialise the collage if we're on a page that has it
const collageGrid = document.getElementById("collage-grid");

if (collageGrid) {
  initCollage();
}

// Highlight the active nav link as the user scrolls
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav__links a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    if (window.scrollY >= section.offsetTop - 120) {
      current = section.id;
    }
  });

  navLinks.forEach((link) => {
    link.style.color = "";
    if (link.getAttribute("href") === `#${current}`) {
      link.style.color = "var(--accent)";
    }
  });
});
