import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector(".gallery");
galleryContainer.insertAdjacentHTML(
  "beforeend",
  createGalleryItemsMarkup(galleryItems)
);

function createGalleryItemsMarkup(gallery) {
  return gallery
    .map(({ preview, original, description }) => {
      return `
            <a class="gallery__item" href="${original}" rel="noreferrer noopener">
               <img class="gallery__image"
                    src="${preview}" 
                    alt="${description}" 
                    loading="lazy"
                    width="720"
                    height="480"
                />
            </a>
        `;
    })
    .join("");
};

new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
  fadeSpeed: 250,
});
