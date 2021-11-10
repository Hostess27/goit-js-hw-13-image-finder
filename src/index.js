import './styles.css';
import FetchPhoto from './js/apiService';
import showErrorNotify from './js/show-error';
import gallery from './templates/photo-result.hbs';
import LoadMoreBtn from './js/load-more';

const fetchPhoto = new FetchPhoto();
const loadMoreBtn = new LoadMoreBtn({
  selector: '[data-action="load-more"]',
  hidden: true,
});

const refs = {
  buttonRef: document.querySelector('.search'),
  inputRef: document.querySelector('.search-form'),
  galleryAdd: document.querySelector('.gallery'),
};

refs.inputRef.addEventListener('submit', onSearch);
loadMoreBtn.refs.button.addEventListener('click', featchArticle);

function onSearch(e) {
  e.preventDefault();
  fetchPhoto.query = e.currentTarget.elements.query.value;

  if (fetchPhoto.query === '') {
    return showErrorNotify();
  }

  loadMoreBtn.show();
  fetchPhoto.resetPage();
  clearHitsMarcup();
  featchArticle();
}

function featchArticle() {
  loadMoreBtn.disable();
  fetchPhoto.fetchImages().then(hits => {
    appendHitsMarcup(hits);
    loadMoreBtn.enable();
  });
}

function appendHitsMarcup(hits) {
  refs.galleryAdd.insertAdjacentHTML('beforeend', gallery(hits));
}

function clearHitsMarcup() {
  refs.galleryAdd.innerHTML = '';
}
