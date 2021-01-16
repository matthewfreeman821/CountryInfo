//Selects elements on the page
const searchBtn = document.getElementById('button');
const countryInput = document.getElementById('country');
const header = document.getElementById('title');
const input = document.getElementById('input');

//Initializes the variable used to search
let country;


//Function to search for a country
function searchForCountry(){
  header.innerHTML = country;
  console.log(country);
};


//Function to update value of variable country
countryInput.addEventListener("change", () => {
  console.log(countryInput.value);
  country = countryInput.value;
});