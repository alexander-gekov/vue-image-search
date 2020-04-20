const API_URL = 'https://api.unsplash.com/';
const apikey = process.env.VUE_APP_API_KEY;

export default {
  search(searchTerm) {
    const url = `${API_URL}/search/photos?client_id=${apikey}&page=1&per_page=50&query=${searchTerm}`;
    return fetch(url)
      .then((response) => response.json())
      .then((result) => result.results);
  },
};
