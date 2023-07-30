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

let properties = [];
const fetchData = () => {

  const loadingSpinner = document.getElementById ('loading-spinner');
  loadingSpinner.style.display = 'block';
  
  const searchContainer = document.getElementById ('search-container');
  if (loadingSpinner.style.display === 'block') {
    searchContainer.style.display = 'none';
  }

  const favoriteButton = document.getElementById('favorite-tab');
  if (loadingSpinner.style.display === 'block') {
    favoriteButton.style.display = 'none';
  }

  const propertyList = document.getElementById('property-list');
  propertyList.innerHTML = ''; //de fiecare data cand se face request se va sterge valoarea locala
//se face call nou

  fetch(url, options)
  .then(response => response.json())
  .then(data => {
    const propertiesData = data.data.home_search.results;
    properties = propertiesData;
    displayProperties();
    loadingSpinner.style.display = 'none';

    if (loadingSpinner.style.display === 'none') {
      searchContainer.style.display = 'flex';
    }   
    
    if (loadingSpinner.style.display === 'none') {
      favoriteButton.style.display = 'flex';
    }
  })
  .catch(error => console.log(error));
}

let favoriteProperties = [];

const loadFavoritePropertiesFromLocalStorage = () => {
  const favoritePropertiesFromLocalStorage = localStorage.getItem('favoriteProperties');
  if(favoritePropertiesFromLocalStorage)
  {
    favoriteProperties = JSON.parse(favoritePropertiesFromLocalStorage);
  }
}

loadFavoritePropertiesFromLocalStorage();

const createPropertyCard = (property) => {
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

    const favoriteIcon = document.createElement('div');
    favoriteIcon.className = 'favorite-icon';
    if (favoriteProperties.includes(property.listing_id)) {
      favoriteIcon.classList.add('colored');
    }

    favoriteIcon.addEventListener('click', (event) => {
      event.stopPropagation();
      toggleFavorite(property.listing_id,favoriteIcon);
    });

    card.appendChild(favoriteIcon);

    return card;
}
const displayProperties = () => {
  const propertyList = document.getElementById('property-list');

  properties.forEach (property => {
    
    const card = createPropertyCard(property);
    card.addEventListener ('click', () => openModal(property));
    propertyList.appendChild(card);
  })
}

fetchData();

const toggleFavorite = (id, favoriteIcon) => {
  const index = favoriteProperties.indexOf(id);

  if (index === -1) {
    favoriteProperties.push(id);
    favoriteIcon.classList.add('colored');
  } else {
    favoriteProperties.splice(index, 1);
    favoriteIcon.classList.remove('colored');
  }

  // console.log(favoriteProperties);

  localStorage.setItem('favoriteProperties', JSON.stringify(favoriteProperties));
}

const displayFavoriteProperties = () => {
  const favoritePropertiesContainer = document.getElementById('favorite-container');
  favoritePropertiesContainer.innerHTML = '';

  properties.forEach (property => {
    if (favoriteProperties.includes(property.listing_id)) {
    const card = createPropertyCard(property); 
    card.addEventListener ('click', () => openModal(property));
    favoritePropertiesContainer.appendChild(card);
    }
  })
}

window.displayFavoriteProperties = displayFavoriteProperties;

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

window.closeModal = closeModal; 

const searchProperties = () => {
  const postalCodeInput = document.getElementById('postal-code-input');
  const requestBody = JSON.parse(options.body);
  requestBody.postal_code = postalCodeInput.value;
  options.body = JSON.stringify(requestBody);
  fetchData();
}

window.searchProperties = searchProperties;