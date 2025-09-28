import axios from 'axios';

const API_KEY = '52357571-fe61b70f00f7342157d30cc5c';

export async function getImagesByQuery(query, page = 1) {
  const response = await axios('https://pixabay.com/api/?per_page=15', {
    params: {
      key: API_KEY,
      q: query,
      page,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: 'true',
    },
  });

  return response.data;
}
