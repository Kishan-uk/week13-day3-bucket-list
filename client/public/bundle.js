/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./client/src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/src/app.js":
/*!***************************!*\
  !*** ./client/src/app.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const CountryView = __webpack_require__(/*! ./views/countryView.js */ \"./client/src/views/countryView.js\");\nconst Request = __webpack_require__(/*! ./services/request.js */ \"./client/src/services/request.js\");\n\n\nconst countryView = new CountryView();\nconst request = new Request('https://restcountries.eu/rest/v2/all');\n\nlet countries = [];\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  const url = 'https://restcountries.eu/rest/v2/all';\n  makeRequest(url, requestComplete);\n\n  const option = document.querySelector('#country-list');\n  option.addEventListener('change', handleCountrySelection);\n});\n\nconst makeRequest = function (url, callback) {\n  const request = new XMLHttpRequest();\n  request.open('GET', url);\n  request.send();\n  request.addEventListener('load', callback);\n}\nconst requestComplete = function () {\n  if (this.status !== 200) return;\n  const jsonString = this.responseText;\n  countries = JSON.parse(jsonString);\n  populateList(countries);\n}\nconst populateList = function (countries) {\n  const select = document.querySelector('#country-list');\n  countries.forEach((country, index) => {\n    const option = document.createElement('option');\n    option.textContent = country.name;\n    const value = index;\n    option.value = value;\n    select.appendChild(option);\n  });\n}\n\nconst handleCountrySelection = function(event){\n  const country = countries[this.value]\n  displayCountryInformation(country);\n}\n\nconst displayCountryInformation = function(country){\n  const countryInformation = document.querySelector('#countries')\n  countryInformation.innerHTML = ''\n\n  const nameH1 = document.createElement('li');\n\n  nameH1.textContent = country.name;\n  countryInformation.appendChild(nameH1);\n}\n\n\n//# sourceURL=webpack:///./client/src/app.js?");

/***/ }),

/***/ "./client/src/services/request.js":
/*!****************************************!*\
  !*** ./client/src/services/request.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const Request = function(url) {\n  this.url = url;\n}\n\nRequest.prototype.get = function (onComplete) {\n  const request = new XMLHttpRequest();\n  request.open('GET', this.url);\n  request.addEventListener('load', function () {\n    if(request.status !== 200) return;\n\n    const response = JSON.parse(request.responseText);\n\n    onComplete(response);\n  });\n  request.send();\n};\n\nRequest.prototype.post = function (payload, onComplete) {\n  const request = new XMLHttpRequest();\n  request.open('POST', this.url);\n\n  request.setRequestHeader ('Content-Type', 'application/json')\n\n  request.addEventListener('load', function () {\n    if(request.status !== 201) return;\n\n    const response = JSON.parse(request.responseText);\n\n    onComplete(response);\n  });\n  const jsonPayload = JSON.stringify(payload);\n  request.send(jsonPayload);\n};\n\nmodule.exports = Request;\n\n\n//# sourceURL=webpack:///./client/src/services/request.js?");

/***/ }),

/***/ "./client/src/views/countryView.js":
/*!*****************************************!*\
  !*** ./client/src/views/countryView.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var CountryView = function(){\n  this.countries = [];\n}\n\nCountryView.prototype.addCountry = function(country) {\n  this.countries.push(country);\n  this.render(country);\n}\n\nCountryView.prototype.clear = function() {\n  this.countries = [];\n  const ul = document.querySelector('#countries');\n  ul.innerHTML = '';\n}\n\nCountryView.prototype.render = function(country){\n  const ul = document.querySelector('#countries');\n  const li = document.createElement('li');\n  const text = document.createElement('p');\n  text.innerText = `${country.name} - \"${country.country}\"`;\n  li.appendChild(text);\n  ul.appendChild(li);\n}\n\nmodule.exports = CountryView;\n\n\n//# sourceURL=webpack:///./client/src/views/countryView.js?");

/***/ })

/******/ });