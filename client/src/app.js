const CountryView = require('./views/countryView.js');
const Request = require('./services/request.js');


const countryView = new CountryView();
const request = new Request('https://restcountries.eu/rest/v2/all');

let countries = [];

document.addEventListener('DOMContentLoaded', () => {
  const url = 'https://restcountries.eu/rest/v2/all';
  makeRequest(url, requestComplete);

  const option = document.querySelector('#country-list');
  option.addEventListener('change', handleCountrySelection);
});

const makeRequest = function (url, callback) {
  const request = new XMLHttpRequest();
  request.open('GET', url);
  request.send();
  request.addEventListener('load', callback);
}
const requestComplete = function () {
  if (this.status !== 200) return;
  const jsonString = this.responseText;
  countries = JSON.parse(jsonString);
  populateList(countries);
}
const populateList = function (countries) {
  const select = document.querySelector('#country-list');
  countries.forEach((country, index) => {
    const option = document.createElement('option');
    option.textContent = country.name;
    const value = index;
    option.value = value;
    select.appendChild(option);
  });
}

const handleCountrySelection = function(event){
  const country = countries[this.value]
  displayCountryInformation(country);
}

const displayCountryInformation = function(country){
  const countryInformation = document.querySelector('#countries')
  countryInformation.innerHTML = ''

  const nameH1 = document.createElement('li');

  nameH1.textContent = country.name;
  countryInformation.appendChild(nameH1);
}
