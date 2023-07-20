import { API_KEY } from "../env";

const url = 'https://realtor.p.rapidapi.com/properties/v3/list';
const options = {
  method: 'POST',
  headers: {
    'content-type': 'application/json',
    'X-RapidAPI-Key': API_KEY,
    'X-RapidAPI-Host': 'realtor.p.rapidapi.com'
  },
  body:  JSON.stringify({
    limit: 200,
    offset: 0,
    postal_code: '90004',
    status: [
      'for_sale',
      'ready_to_build'
    ],
    sort: {
      direction: 'desc',
      field: 'list_date'
    }
  })
};
const fetchData = () => {

  const loadingSpinner = document.getElementById ('loading-spinner');
  loadingSpinner.style.display = 'block';
  
  const searchContainer = document.getElementById ('search-container');
  if (loadingSpinner.style.display === 'block') {
    searchContainer.style.display = 'none';
  }

  const propertyList = document.getElementById('property-list');
  propertyList.innerHTML = ''; //de fiecare data cand se face request se va sterge valoarea locala
//se face call nou

  fetch(url, options)
  .then(response => response.json())
  .then(data => {
    const properties = data.data.home_search.results;
    displayProperties(properties);
    loadingSpinner.style.display = 'none';

    if (loadingSpinner.style.display === 'none') {
      searchContainer.style.display = 'flex';
    }    
  })
  .catch(error => console.log(error));
}

const displayProperties = (properties) => {
  const propertyList = document.getElementById('property-list');

  properties.forEach (property => {
    const card = document.createElement('div');
    card.className = 'property-card';

    const image = document.createElement('img');
    image.src = property.primary_photo.href;
    card.appendChild(image);
    
    const status = document.createElement('div');
    status.textContent = `${property.status}`;
    card.appendChild(status);

    const price = document.createElement('div');
    price.className = 'price';
    price.textContent = `$${property.list_price}`;
    card.appendChild(price);

    const description = document.createElement('div');
    description.textContent = `${property.description.beds} bed | ${property.description.baths} bath | ${property.description.sqft} sqft | ${property.description.lot_sqft} acre lot`;
    card.appendChild(description);

    const address = document.createElement('div');
    address.textContent = `${property.location.address.line} ${property.location.address.state}, ${property.location.address.state_code} ${property.location.address.postal_code}`;
    card.appendChild(address);


    card.addEventListener ('click', () => openModal(property));
    propertyList.appendChild(card);
  })
}

fetchData();

const openModal = (property) => {
  const modal = document.getElementById ('modal');
  modal.style.display = 'block';
  const modalProperty = document.getElementById ('modal-property');

  modalProperty.innerHTML = `
 <img src="${property.primary_photo.href}"/>
 <h2>${property.description.beds} bed | ${property.description.baths} bath | ${property.description.sqft} sqft | ${property.description.lot_sqft} acre lot<h2/>
  `
}

const closeModal = () => {
  const modal = document.getElementById ('modal');
  modal.style.display = 'none';
}

window.closeModal = closeModal; //ca html sa aiba acces la f-tiile din js

const searchProperties = () => {
  const postalCodeInput = document.getElementById('postal-code-input');
  const requestBody = JSON.parse(options.body);
  requestBody.postal_code = postalCodeInput.value;
  options.body = JSON.stringify(requestBody);
  fetchData();
}

window.searchProperties = searchProperties;