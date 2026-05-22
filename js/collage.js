// js/collage.js
// Polaroid collage — filtering and lightbox
// Polaroids are written directly in the HTML, this file just adds interactivity

export function initCollage() {
  const polaroids = document.querySelectorAll(".polaroid");
  const filterButtons = document.querySelectorAll(".filter-btn");
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const lightboxCaption = document.getElementById("lightbox-caption");
  const lightboxClose = document.getElementById("lightbox-close");

  // Filtering
  filterButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      // Update active button
      filterButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      const filter = btn.dataset.filter;

      // Show or hide each polaroid
      polaroids.forEach((polaroid) => {
        if (filter === "all" || polaroid.dataset.category === filter) {
          polaroid.style.display = "block";
        } else {
          polaroid.style.display = "none";
        }
      });
    });
  });

  // Open lightbox when a polaroid is clicked
  polaroids.forEach((polaroid) => {
    polaroid.addEventListener("click", () => {
      const img = polaroid.querySelector("img");
      const caption = polaroid.querySelector(".polaroid__caption");

      lightboxImg.src = img.src;
      lightboxImg.alt = img.alt;
      lightboxCaption.textContent = caption.textContent;
      lightbox.style.display = "flex";
      document.body.style.overflow = "hidden";
    });
  });

  // Close lightbox on button click
  lightboxClose.addEventListener("click", () => {
    lightbox.style.display = "none";
    document.body.style.overflow = "";
  });

  // Close lightbox on background click
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
      lightbox.style.display = "none";
      document.body.style.overflow = "";
    }
  });

  // Close lightbox on Escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      lightbox.style.display = "none";
      document.body.style.overflow = "";
    }
  });
}
