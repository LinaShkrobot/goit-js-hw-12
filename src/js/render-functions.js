const galleryContainer = document.querySelector('.gallery');
const loadBtn = document.querySelector('.load-btn');
const loader = document.querySelector('.loader');

export function createGallery(images) {
  return images
    .map(
      item => `
    <li class="gallery-item">
    <a class="gallery-link" href="${item.largeImageURL}">
      <img class="gallery-image"
           src="${item.webformatURL}"
           alt="${item.tags}"/>
      </a>
      <ul class="gallery-text">
         <li>
         <h3>Likes</h3>
         <p>${item.likes}</p>
         </li>
         <li>
         <h3>Views</h3>
         <p>${item.views}</p>
         </li>
         <li>
         <h3>Comments</h3>
         <p>${item.comments}</p>
         </li>
         <li>
         <h3>Downloads</h3>
         <p>${item.downloads}</p>
         </li>
      </ul>
    </li>
    `
    )
    .join('');
}

export function clearGallery() {
  galleryContainer.innerHTML = '';
}

export function showLoader() {
  loader.classList.remove('hidden');
}

export function hideLoader() {
  loader.classList.add('hidden');
}

export function showLoadMoreButton() {
  loadBtn.classList.remove('load-btn-hidden');
}

export function hideLoadMoreButton() {
  loadBtn.classList.add('load-btn-hidden');
}

export function getCardHeight() {
  const card = document.querySelector('.gallery-item');
  return card.getBoundingClientRect().height;
}
