import './styles.css';
import debounce from 'lodash.debounce';
import refs from './js/refs';
import fetchCountries from './js/fetchCountries';
import renderResultMarkup from './js/result';
import showErrorNotify from './js/show-error';


refs.input.addEventListener(
  'input',
  debounce(() => {
    fetchCountries(refs.input.value)
      .then(renderResultMarkup)
      .catch(() => {
        showErrorNotify('No matches found! Try again');
      });
  }, 500),
);

refs.country.addEventListener('click', event => {
  refs.input.value = '';
  fetchCountries(event.target.textContent).then(renderResultMarkup);
});