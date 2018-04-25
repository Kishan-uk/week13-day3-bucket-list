const CountryView = require('./views/countryView.js');
const Request = require('./services/request.js');


const countryView = new CountryView();
const request = new Request('https://restcountries.eu/rest/v2/all');

let countries = [];

document.addEventListener('DOMContentLoaded', () => {
  makeRequest(url, requestComplete);

  const option = document.querySelector('#country-list');
  option.addEventListener('change', handleCountrySelection);
});
