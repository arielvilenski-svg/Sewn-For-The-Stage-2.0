// LIGHTBOX FUNCTIONALITY
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const lightboxTitle = document.getElementById("lightbox-title");
const lightboxCaption = document.getElementById("lightbox-caption");

if (lightbox && lightboxImg) {
  document.querySelectorAll(".gallery-item img").forEach(img => {
    img.addEventListener("click", () => {
      lightbox.classList.add("active");
      lightboxImg.src = img.src;
      lightboxImg.alt = img.alt || "Expanded gallery image";

      if (lightboxTitle) {
        lightboxTitle.textContent = img.dataset.title || img.alt || "Image Details";
      }

      if (lightboxCaption) {
        lightboxCaption.textContent = img.dataset.caption || "";
      }
    });
  });

  // CLOSE
  const closeBtn = document.querySelector(".close");
  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      lightbox.classList.remove("active");
    });
  }

  // CLICK OUTSIDE IMAGE
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
      lightbox.classList.remove("active");
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && lightbox.classList.contains("active")) {
      lightbox.classList.remove("active");
    }
  });
}