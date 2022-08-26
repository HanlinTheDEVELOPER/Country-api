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

///// Player2 Starts From Here.
// Fetch All Data
const api = "https://restcountries.com/v3.1/all";
fetch(api)
  .then(response => response.json())
  .then(data => getData(data));

// getData with functions from this getData function
function getData(data) {

}

///// Player2 Ends Here.