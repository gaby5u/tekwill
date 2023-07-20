import { API_KEY } from "../env";

const fetchData = () => {
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

  const loadingSpinner = document.getElementById ('loading-spinner');
  loadingSpinner.style.display = 'block';
  
  fetch(url, options)
  .then(response => response.json())
  .then(data => {
    const properties = data.data.home_search.results;
    displayProperties(properties);
    loadingSpinner.style.display = 'none';
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


    propertyList.appendChild(card);
  })
}

fetchData();


