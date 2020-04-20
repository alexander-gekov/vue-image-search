const API_URL = 'https://api.unsplash.com/';
const API_KEY = 'PQu7N6WL_Na6fpfhgrFj9mIotyxcoyQCORArL764-xk';

export default {
  search(searchTerm) {
    const url = `${API_URL}/search/photos?client_id=${API_KEY}&page=1&per_page=50&query=${searchTerm}`;
    return fetch(url)
      .then((response) => response.json())
      .then((result) => result.results);
  },
};
