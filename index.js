//Selects elements on the page
const searchBtn = document.getElementById('button');
const countryInput = document.getElementById('country');
const header = document.getElementById('title');
const input = document.getElementById('input');

//Initializes the variable used to search and display
let country, countryData;


//Function to search for a country and update display
function searchForCountry(){
  header.innerHTML = country;
  fetchData(country);
};


//Function to update value of variable country
countryInput.addEventListener("change", () => {
  country = countryInput.value;
});

//Function to fetch API data
async function fetchData(countryName){
  const res = await fetch(`https://restcountries.eu/rest/v2/name/${countryName}`)
  countryData = await res.json();
  return countryData;
};