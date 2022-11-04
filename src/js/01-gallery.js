// Add imports above this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

// 
import { galleryItems } from './gallery-items';
const containerGallery = document.querySelector('.gallery');

const creatListMarkup = galleryItems.map(({
  preview,
  original,
  description
}) => `
  <a class="gallery__link" href=${original}>
    <img
      class="gallery__image"
      src=${preview}
      alt=${description}
    />
  </a>`).join('');

containerGallery.insertAdjacentHTML('beforeend', creatListMarkup);

new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});

// Change code below this line

console.log(galleryItems);
