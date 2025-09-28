import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getImagesByQuery } from './js/pixabay-api';
import { createGallery } from './js/render-functions';
import { clearGallery } from './js/render-functions';
import { showLoadMoreButton } from './js/render-functions';
import { hideLoadMoreButton } from './js/render-functions';
import { showLoader } from './js/render-functions';
import { hideLoader } from './js/render-functions';
import { getCardHeight } from './js/render-functions';

const form = document.querySelector('.form');
const formInput = document.querySelector('.form-input');
const galleryContainer = document.querySelector('.gallery');
const loadBtn = document.querySelector('.load-btn');
let page = 1;
let query = '';

const lightbox = new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
});

loadBtn.addEventListener('click', onLoadMore);

form.addEventListener('submit', event => {
  event.preventDefault();
  clearGallery();
  page = 1;
  query = formInput.value.trim();
  showLoader();
  hideLoadMoreButton();

  if (!query) return;

  getImagesByQuery(query, page)
    .then(data => {
      const images = data.hits;
      galleryContainer.insertAdjacentHTML('beforeend', createGallery(images));
      lightbox.refresh();

      if (images.length === 0) {
        iziToast.error({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
          backgroundColor: '#ef4040',
          messageColor: '#fff',
        });
        return;
      }
      showLoadMoreButton();
    })
    .catch(error => {
      console.log(error);
    })
    .finally(() => {
      hideLoader();
      form.reset();
    });
});

async function onLoadMore() {
  page += 1;
  hideLoadMoreButton();
  showLoader();

  try {
    const data = await getImagesByQuery(query, page);
    console.log(data);
    galleryContainer.insertAdjacentHTML('beforeend', createGallery(data.hits));
    lightbox.refresh();
    const height = getCardHeight();
    window.scrollBy({
      top: height * 2,
      behavior: 'smooth',
    });
    showLoadMoreButton();

    const totalPages = Math.ceil(data.totalHits / 15);
    if (page >= totalPages) {
      iziToast.error({
        message: "We're sorry, but you've reached the end of search results.",
        position: 'topRight',
        backgroundColor: '#00BFFF',
      });
      hideLoadMoreButton();
      return;
    }
  } catch (error) {
    alert(error.message);
  } finally {
    hideLoader();
  }
}
