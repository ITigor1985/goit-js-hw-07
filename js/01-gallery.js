import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector(".gallery");
const galleryImages = galleryItems.map(galleryItem => `
<div class="gallery__item">
<a class="gallery__link" href="">
  <img
    class="gallery__image"
    src=${galleryItem.preview}
    data-source=${galleryItem.original}
    alt="${galleryItem.description}"
  />
</a>
</div>`).join('')
gallery.insertAdjacentHTML("beforeend", galleryImages);

gallery.addEventListener("click", selectImage)

function selectImage(event){
    event.preventDefault();
    if (event.target.nodeName !== "IMG") {
        return;
      }
      const selectedImage = event.target.dataset.source;
      const instance = basicLightbox.create(`<img src="${selectedImage}" alt="${event.target.alt}">`)

        instance.show();


        //   document.addEventListener("keyup", event => {
        //   const imgVisible = document.querySelector(".basicLightbox--visible")
        //   console.log(imgVisible);
        //   if(event.code==="Escape" && imgVisible!==null){
        //     imgVisible.remove();
        //   }
        // });        

}





//basicLightbox--visible