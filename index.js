//Selects elements on the page
const searchBtn = document.getElementById('button');
const countryInput = document.getElementById('country');
const header = document.getElementById('title');
const input = document.getElementById('input');

//Initializes the variable used to search
let country;


//Function to search for a country and update display
function searchForCountry(){
  header.innerHTML = country;
  console.log(country);
};


//Function to update value of variable country
countryInput.addEventListener("change", () => {
  country = countryInput.value;
});

//Function to fetch API data
const fetchData = async () => {
  const res = await fetch('https://restcountries.eu/rest/v2/name/ireland')
  const countryData = await res.json();
  console.log(countryData);
};

fetchData();