import createCountryContainer from './createCountryContainer.js';

export const ENTER_KEY = 'Enter';

const regex = /^[a-zA-Z\s]+$/;
const searchCountry = (searchName) =>
{
  if (!regex.test(searchName))
  {
    alert("Input invalued! Introduetii doar litere si spatii.");
    return;
  }
  const url = `https://restcountries.com/v3.1/name/${searchName}`;
  fetch(url)
  .then(response => response.json())
  .then(countries =>{
    const countriesContainer = document.getElementById('countries');
    countriesContainer.innerHTML = '';
    countries.forEach(country =>
      {
        const countryContainer = createCountryContainer(country);
        countriesContainer.appendChild(countryContainer);
      })
  })
  .catch(error =>console.log(error));
};

const searchButton = document.getElementById('search-button');
searchButton.addEventListener('click', ()=>{
  const searchInput = document.getElementById('search-input');
  const searchName = searchInput.value.trim(); //trim() - removes whitespaces
  if (searchName!=='')
  {
    searchCountry(searchName);
  }
  else {
    fetchData();
  }
});
const searchInput = document.getElementById('search-input');
searchInput.addEventListener('keydown', (event) =>{

  console.log('Key: ' + event.key);
  if (event.key === ENTER_KEY)
  {
    event.preventDefault();
    searchButton.click();
  }
});
