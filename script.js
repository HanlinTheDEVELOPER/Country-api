// dropdown
const dropdownBtn = document.getElementById("dropdown");
const dropdownItem = document.getElementById("dropdown-item");
dropdownBtn.addEventListener("click", () => {
  dropdownItem.classList.toggle("showListItem");
});

// DOM Element for DarkMode-LightMode
const mode = document.getElementsByClassName("mode")[0];
const emptyMoon = document.getElementById("empty-moon");
const solidMoon = document.getElementById("solid-moon"); // display-none in default

// DOM Element for displaying fetch data
const countriesBox = document.getElementById("countries-box");
const loadingWrapper = document.getElementsByClassName("loadingWrapper")[0];

//  DOM Element for search
const searchInput = document.getElementById("search-input");

//  DOM Element for Filtering region
const africa = document.getElementById("Africa");
const america = document.getElementById("America");
const asia = document.getElementById("Asia");
const europe = document.getElementById("Europe");
const oceania = document.getElementById("Oceania");

//  DOM Element for detail info display
const main = document.getElementsByClassName("main")[0];
const selection = document.getElementsByClassName("selection")[0]; // display none in default

///// Player2 Starts From Here. /////////////////
// Fetch All Data
const api = "https://restcountries.com/v3.1/all";

fetch(api)
  .then(response => response.json())
  .then(data => getData(data));

// getData with functions from this getData function
function getData(data) {
  displayCountries(data);
}

// display countries
function displayCountries(countries) {
  for(let country of countries) {
    console.log(country);
      countriesBox.insertAdjacentHTML("beforeend",
      `<div class="country">
        <a href="./detail.html?name=${generateName(country)}"><img src="${country.flags.png}" alt="flag" /></a>
        <h2>${country.name.common}</h2>
        <h3>Population: <span>${country.population}</span></h3>
        <h3>Region: <span>${country.region}</span></h3>
        <h3>Capital: <span>${country.capital}</span></h3>
      </div>`)
  }
  countriesBox.style.visibility = "visible";
  loadingWrapper.remove();
}

function generateName(country) {
  let search = [country.cca2, country.cca3, country.ccn3, country.cioc];
  return search;
}
///// Player2 Ends Here. /////////////////
