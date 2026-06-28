const lightbox = document.querySelector(".lightbox");
const lightboxImage = lightbox?.querySelector("img");
const closeButton = lightbox?.querySelector(".lightbox__close");

document.querySelectorAll(".photo").forEach((button) => {
  button.addEventListener("click", () => {
    const fullImage = button.dataset.full;
    const thumbnail = button.querySelector("img");

    if (!lightbox || !lightboxImage || !fullImage) return;

    lightboxImage.src = fullImage;
    lightboxImage.alt = thumbnail?.alt || "我們的照片";
    lightbox.showModal();
  });
});

closeButton?.addEventListener("click", () => {
  lightbox?.close();
});

lightbox?.addEventListener("click", (event) => {
  if (event.target === lightbox) {
    lightbox.close();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && lightbox?.open) {
    lightbox.close();
  }
});
