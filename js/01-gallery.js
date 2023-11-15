import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryList = document.querySelector(".gallery");

const createGallery = (el) => {
  return el
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </li>
  `;
    })
    .join("");
};

const photoMarkup = createGallery(galleryItems);
galleryList.insertAdjacentHTML("beforeend", photoMarkup);

//---------------------------------------------------------

const handleGalleryClick = (event) => {
  event.preventDefault();

  if (event.target.nodeName !== "IMG") {
    return;
  }
  const urlOriginal = event.target.dataset.source;

  // create new basic Light box instance
  const instance = basicLightbox.create(`<img src="${urlOriginal}">`);
  instance.show();

  // handle On Esc key Press
  const handleOnEscKeyPress = (event) => {
    if (event.code === "Escape") {
      instance.close();
      window.removeEventListener("Keydown", handleOnEscKeyPress);
    }
  };

  window.addEventListener("keydown", handleOnEscKeyPress);
};

galleryList.addEventListener("click", handleGalleryClick);
