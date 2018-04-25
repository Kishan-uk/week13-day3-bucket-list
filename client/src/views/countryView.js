var CountryView = function(){
  this.countries = [];
}

CountryView.prototype.addCountry = function(country) {
  this.countries.push(country);
  this.render(country);
}

CountryView.prototype.clear = function() {
  this.countries = [];
  const ul = document.querySelector('#countries');
  ul.innerHTML = '';
}

CountryView.prototype.render = function(country){
  const ul = document.querySelector('#countries');
  const li = document.createElement('li');
  const text = document.createElement('p');
  text.innerText = `${country.name} - "${country.country}"`;
  li.appendChild(text);
  ul.appendChild(li);
}

module.exports = CountryView;
