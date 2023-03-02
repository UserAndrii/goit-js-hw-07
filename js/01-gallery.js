import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryContainer = document.querySelector(".gallery");

// galleryContainer.append(...createGalleryItemsMarkup(galleryItems));

galleryContainer.insertAdjacentHTML(
  "beforeend",
  createGalleryItemsMarkup(galleryItems)
);
galleryContainer.addEventListener("click", onGalleryContainerClick);

// function createGalleryItemsMarkup(gallery) {
//   return gallery.map(({ preview, original, description }) => {
//     const galleryItemEl = document.createElement("div");
//     galleryItemEl.classList.add("gallery__item");

//     const galleryLinkEl = document.createElement("a");
//     galleryLinkEl.classList.add("gallery__link");
//     galleryLinkEl.href = original;
//     galleryLinkEl.rel = "noreferrer noopener";

//     const galleryImageEl = document.createElement("img");
//     galleryImageEl.classList.add("gallery__image");
//     galleryImageEl.src = preview;
//     galleryImageEl.dataset.source = original;
//     galleryImageEl.alt = description;
//     galleryImageEl.loading = "lazy";
//     galleryImageEl.width = 720;
//     galleryImageEl.height = 480;

//     galleryLinkEl.append(galleryImageEl);
//     galleryItemEl.append(galleryLinkEl);

//     return galleryItemEl;
//   });
// };

function createGalleryItemsMarkup(gallery) {
  return gallery
    .map(({ preview, original, description }) => {
      return `
        <div class="gallery__item">
           <a class="gallery__link" href="${original}" rel="noreferrer noopener">
            <img
              class="gallery__image"
              src="${preview}"
              data-source="${original}"
              alt="${description}"
              loading="lazy"
              width="720"
              height="480"
            />
          </a>
        </div>
        `;
    })
    .join("");
};

const instance = basicLightbox.create(
  `<img src="#" width="1280" height="860">`,
  {
    onShow: (instance) => {
      document.addEventListener("keydown", onEscapePress);
    },
    onClose: (instance) => {
      document.removeEventListener("keydown", onEscapePress);
    },
  }
);

function onGalleryContainerClick(event) {
  event.preventDefault();

  if (!event.target.classList.contains("gallery__image")) {
    return;
  }

  const instanceImageEl = instance.element().querySelector("img");
  instanceImageEl.src = event.target.dataset.source;

  instance.show();
};

function onEscapePress(event) {
  if (event.code === "Escape") {
    instance.close();
  }
};
