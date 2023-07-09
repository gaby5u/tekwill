import { ENTER_KEY} from './search.js';
import createCountryContainer from './createCountryContainer.js';

// const createCountryContainer = (country) =>
// {
//   const container = document.createElement('div');
//   container.className = 'country-container';
//   container.id = 'country-details';

//   const flagImg = document.createElement('img');
//   flagImg.setAttribute('src', country.flags.png);
//   container.appendChild(flagImg);

//   const name = document.createElement('h2');
//   name.textContent = "Name: "+country.name.common;
//   container.appendChild(name);

//   const population = document.createElement('h5');
//   population.textContent = "Population: "+country.population;
//   container.appendChild(population);

//   if (country.currencies)
//   {
//     const currencyKeys = Object.keys(country.currencies);
//     const currencyCode = currencyKeys[0];
//     const currency = country.currencies[currencyCode];
//     const currencyElement = document.createElement('p');
//     currencyElement.textContent = `Currency: ${currencyCode} - ${currency.name} (${currency.symbol})`;
//     container.appendChild(currencyElement);
//   }
//   if (country.capital)
//   {
//     const capital = document.createElement('p');
//     capital.textContent = "Capital: "+country.capital[0];
//     container.appendChild(capital);
//   }

//   const continent = document.createElement('p');
//   continent.textContent = "Continent: "+country.continents[0];
//   container.appendChild(continent);

//   return container;
// }

let countriesList = [];
const fetchData = () =>{
  fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(countries =>{
    countriesList = countries;
    countries.forEach(country =>{
      const countriesContainer = document.getElementById('countries');
      const countryContainer = createCountryContainer(country);
      countriesContainer.appendChild(countryContainer);
    })
  })
  .catch (error => console.log(error));
}

fetchData();


//Regex
// const regex = /^[a-zA-Z\s]+$/;
// const searchCountry = (searchName) =>
// {
//   if (!regex.test(searchName))
//   {
//     alert("Input invalued! Introduetii doar litere si spatii.");
//     return;
//   }
//   const url = `https://restcountries.com/v3.1/name/${searchName}`;
//   fetch(url)
//   .then(response => response.json())
//   .then(countries =>{
//     const countriesContainer = document.getElementById('countries');
//     countriesContainer.innerHTML = '';
//     countries.forEach(country =>
//       {
//         const countryContainer = createCountryContainer(country);
//         countriesContainer.appendChild(countryContainer);
//       })
//   })
//   .catch(error =>console.log(error));
// };

// const searchButton = document.getElementById('search-button');
// searchButton.addEventListener('click', ()=>{
//   const searchInput = document.getElementById('search-input');
//   const searchName = searchInput.value.trim(); //trim() - removes whitespaces
//   if (searchName!=='')
//   {
//     searchCountry(searchName);
//   }
//   else {
//     fetchData();
//   }
// });
// const searchInput = document.getElementById('search-input');
// searchInput.addEventListener('keydown', (event) =>{

//   console.log('Key: ' + event.key);
//   if (event.key === 'Enter')
//   {
//     event.preventDefault();
//     searchButton.click();
//   }
// });

const SortOptions ={
  NAME: 'name',
  POPULATION: 'population',
  AREA: 'area',
  CURRENCY: 'currency'
};

const sortCountries = (sortParam) =>{
  switch(sortParam)
  {
    case SortOptions.POPULATION: return countriesList.sort((a,b) => b.population-a.population);
    case SortOptions.AREA: return countriesList.sort((a,b) => b.area-a.area)
    case SortOptions.NAME: return countriesList.sort((a,b)=> a.name.common.localeCompare(b.name.common));
    case SortOptions.CURRENCY: return countriesList.sort((a,b)=>{
      if (a.currencies && b.currencies)
      {
        const currencyCodeA = Object.keys(a.currencies)[0];
        const currencyCodeB = Object.keys(b.currencies)[0];
        return currencyCodeA.localeCompare(currencyCodeB);
      }
    })
    default: return countriesList.sort((a,b)=> a.name.common.localeCompare(b.name.common));
  }
};

const updateCountries = (sortParam) =>{
  const countriesContainer = document.getElementById('countries');
  countriesContainer.innerHTML='';

  const sortedCountries = sortCountries(sortParam);
  sortedCountries.forEach(country =>{
    const countryContainer = createCountryContainer(country);
    countriesContainer.appendChild(countryContainer);
  })
};

const sortSelect = document.getElementById('sort-select');
sortSelect.addEventListener('change',()=>{
  const sortParam = sortSelect.value;
  updateCountries(sortParam);
});

const regex = /^[a-zA-Z\s]+$/;
const searchCurrencyCode = (currency) =>{
  if (!regex.test(currency))
  {
    alert("Input invalued! Introduetii doar litere si spatii.");
    return;
  }
  const url = `https://restcountries.com/v3.1/currency/${currency}`;
  fetch (url)
  .then (response => response.json())
  .then (countries =>{
    const countriesContainer = document.getElementById('countries');
    countriesContainer.innerHTML='';
    countries.forEach(country =>{
      const countryContainer = createCountryContainer(country);
      countriesContainer.appendChild(countryContainer);
    })
  })
  .catch (error => console.log(error));
};

const searchButtonCurrency = document.getElementById('search-button-currency');
searchButtonCurrency.addEventListener('click', ()=>{
  const searchInputCurrency = document.getElementById('search-input-currency');
  const currency = searchInputCurrency.value.trim();
  if (currency!=='')
  {
    searchCurrencyCode(currency);
  }
  else{
    fetchData();
  }
});

const searchInputCurrency = document.getElementById('search-input-currency');
searchInputCurrency.addEventListener('keydown', (event)=>{
  if (event.key === ENTER_KEY)
  {
    event.preventDefault();
    searchButtonCurrency.click();
  }
})


