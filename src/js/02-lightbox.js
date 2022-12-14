import { galleryItems } from './gallery-items.js';
// Change code below this line

const itemContainer = document.querySelector(`.gallery`);



function createGalleryItemMarkup(galleryItems) {
    return galleryItems
        .map(({ preview, original, description }) => {
            return `
        <li>
            <a class="gallery__item" href="${original}">
                <img class="gallery__image" src="${preview}" alt="${description}" />
            </a>
        </li>
        `;
        })
        .join('');
}

const itemMarkup = createGalleryItemMarkup(galleryItems);

itemContainer.insertAdjacentHTML('beforeend', itemMarkup);

console.log(galleryItems);

// itemContainer.addEventListener('click', (evt) => {
//     evt.preventDefault();
// });

var lightbox = new SimpleLightbox('.gallery a', { 
    captionsData: 'alt',
    captionDelay: 250,
    captionPosition: 'bottom',
});

lightbox.on('show.simplelightbox', function () {
	evt.preventDefault();
});

