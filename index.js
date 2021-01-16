//Selects elements on the page
const searchBtn = document.getElementById('button');
const countryInput = document.getElementById('country');
const header = document.getElementById('title');
const input = document.getElementById('input');
const section = document.getElementsByName('section');

//Initializes the variable used to search and display
let country, countryData;
let displayData = ['capital', 'population', 'region'];

//Function to update value of variable country
countryInput.addEventListener("change", () => {
  country = countryInput.value;
});

//Function to fetch API data
async function fetchData(countryName){
  const res = await fetch(`https://restcountries.eu/rest/v2/name/${countryName}`)
  countryData = await res.json();
  for(let i=0; i<displayData.length; i++){
    document.body.appendChild(createDataItem(countryData[0][displayData[i]]));
  };
};

//Funciton to create paragraph element for data display
function createDataItem(info){
  let p = document.createElement('p');
  p.textContent = info;
  return p;
}

//Function to search for a country and update display
function searchForCountry(){
  header.innerHTML = country;
  fetchData(country);
};