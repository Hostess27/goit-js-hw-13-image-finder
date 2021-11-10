import './styles.css'
import fetchPhoto from './js/apiService';
import showErrorNotify from './js/show-error';
import gallery from './templates/photo-result.hbs';



// const gallery = document.querySelector('.gallery');
// const searchForm = document.querySelector('.search-form');


// searchForm.addEventListener('submit', onSearch);
// function onSearch(e) {
//   e.preventDefault();
//   fetchPhoto.query = e.currentTarget.elements.query.value;

//   if (fetchPhoto.query === '') {
//     return showErrorNotify();
//   }

//   addGallery();
// }
// function addGallery() {
//   gallery.insertAdjacentHTML('beforeend', galleryItems);
// }

// // LoadMoreBtn.addEventListener('submit');
