const API_KEY = '24254313-57190dd7b315bf7c0f0ba9004';

export default class fetchPhoto {
  constructor() {
    this.searchQuery = "";
    this.page = 1;
    this.perPage = 12;
  }

  fetchImages(e) {
    const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=${this.perPage}&key=${API_KEY}`;

    return fetch(url)
      .then((response) => response.json())
      .then((data) => {
        this.page += 1;
        return data.hits;
      });
  }

  resetPage() {
    this.page = 1;
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}