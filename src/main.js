import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getImagesByQuery } from './js/pixabay-api';
import { clearGallery } from './js/render-functions';
import { showLoadMoreButton } from './js/render-functions';
import { hideLoadMoreButton } from './js/render-functions';
import { showLoader } from './js/render-functions';
import { hideLoader } from './js/render-functions';
import { getCardHeight } from './js/render-functions';
import { renderGallery } from './js/render-functions';

const form = document.querySelector('.form');
const formInput = document.querySelector('.form-input');
const galleryContainer = document.querySelector('.gallery');
const loadBtn = document.querySelector('.load-btn');
let page = 1;
let query = '';

loadBtn.addEventListener('click', onLoadMore);

form.addEventListener('submit', async event => {
  event.preventDefault();
  clearGallery();
  page = 1;
  console.log(page);
  query = formInput.value.trim();
  showLoader();
  hideLoadMoreButton();

  if (!query) {
    hideLoader();
    iziToast.warning({
      message: 'Input field cannot be empty. Please enter a search term!',
      position: 'topRight',
      backgroundColor: '#FFA500',
      messageColor: '#fff',
    });
    return;
  }

  try {
    const data = await getImagesByQuery(query, page);
    const images = data.hits;
    renderGallery(images);

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
    const totalPages = Math.ceil(data.totalHits / 15);
    if (totalPages > 1) {
      showLoadMoreButton();
    }
  } catch (error) {
    console.log(error);
  } finally {
    hideLoader();
    form.reset();
  }
});

async function onLoadMore() {
  page += 1;
  hideLoadMoreButton();
  showLoader();

  try {
    const data = await getImagesByQuery(query, page);
    console.log(data);
    renderGallery(data.hits);
    const height = getCardHeight();
    window.scrollBy({
      top: height * 2,
      behavior: 'smooth',
    });

    const totalPages = Math.ceil(data.totalHits / 15);
    if (totalPages > page) {
      showLoadMoreButton();
    } else {
      iziToast.info({
        message: "We're sorry, but you've reached the end of search results.",
        position: 'topRight',
        backgroundColor: '#00BFFF',
      });
      hideLoadMoreButton();
      return;
    }
  } catch (error) {
    iziToast.error({
      message: `Something went wrong: ${error.message}`,
      position: 'topRight',
      backgroundColor: '#ef4040',
      messageColor: '#fff',
    });
  } finally {
    hideLoader();
  }
}
