import { galleryItems } from './gallery-items.js';
// Change code below this line
const itemContainer = document.querySelector(`.gallery`);
let instance = {};

function createGalleryItemMarkup(galleryItems) {
    return galleryItems
        .map(({ preview, original, description }) => {
        return `
        <div class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
            />
        </a>
        </div>
        `;
        })
        .join('');
}
const itemMarkup = createGalleryItemMarkup(galleryItems);

itemContainer.insertAdjacentHTML('beforeend', itemMarkup);

itemContainer.addEventListener('click', (evt) => {
    evt.preventDefault();
    if (evt.target.nodeName !== "IMG") { 
        return;
    }
    const bigPictureLink = evt.target.dataset[`source`];   
    onOpenModal(bigPictureLink);
    
});

function onOpenModal(bigPictureLink) { 
    instance = basicLightbox.create(`
		<img width="1280" src="${bigPictureLink}">
	`);
    instance.show();
    window.addEventListener("keydown", onEscKeyPress);
}

function onEscKeyPress(evt) {
    if (evt.code === "Escape") { 
        onCloseModal()
    }
}

function onCloseModal() { 
    window.removeEventListener("keydown", onEscKeyPress);
    instance.close();
}

console.log(galleryItems);
