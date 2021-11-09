import fetchPhoto from './js/apiService';
import showErrorNotify from './js/show-error'
import  galleryItems from './templates/photo-result.hbs';



const gallery = document.querySelector('.gallery');
const searchForm = document.querySelector('.search-form');
const morePhoto =document.querySelector('.more-photo');



searchForm.addEventListener('submit', onSearch)
function onSearch(e) {
    e.preventDefault();
    fetchPhoto.query = e.currentTarget.elements.query.value;

    if (fetchPhoto.query ==='') {
       return showErrorNotify();
    } 

    gallery.insertAdjacentHTML('beforeend', galleryItems)
}

// function addGallery(){
//     gallery.insertAdjacentHTML('beforeend', galleryItems)
// }


// morePhoto.addEventListener('submit');


  






