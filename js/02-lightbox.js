import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector(".gallery");
const galleryImages = galleryItems.map(galleryItem => `
<li>
<a class="gallery__link" href="${galleryItem.original}">
  <img class="gallery__image" src="${galleryItem.preview}" alt="${galleryItem.description}" />
</a>
</li>`).join('');
gallery.insertAdjacentHTML("beforeend", galleryImages);
const galleryModal = new SimpleLightbox('.gallery__link',{
    captionsData: "alt",
    captionDelay: 250,
  });
  