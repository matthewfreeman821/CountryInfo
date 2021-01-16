//Selects elements on the page
const searchBtn = document.getElementById('button');
const countryInput = document.getElementById('country');
const header = document.getElementById('title');
const input = document.getElementById('input');
const dataDisplay = document.getElementById('data');
const para = document.getElementsByName('p');

//Initializes the variable used to search and display
let country, countryData;
let displayData = ['Capital', 'Population', 'Region'];

//Function to update value of variable country
countryInput.addEventListener("change", () => {
  country = countryInput.value;
});

//Function to fetch API data and display in html
//Needs refactoring
async function fetchData(countryName){
  const res = await fetch(`https://restcountries.eu/rest/v2/name/${countryName}`)
  countryData = await res.json();
  if(dataDisplay.childElementCount === 0){
    for(let i=0; i<displayData.length; i++){
      dataDisplay.appendChild(createDataItem(displayData[i] + ': ' + countryData[0][displayData[i].toLowerCase()]));
    } 
  } else {
    while(dataDisplay.childElementCount > 0){
      dataDisplay.removeChild(dataDisplay.childNodes[dataDisplay.childElementCount - 1]);
    }
    for(let i=0; i<displayData.length; i++){
      dataDisplay.appendChild(createDataItem(displayData[i] + ': ' + countryData[0][displayData[i].toLowerCase()]));
    } 
  }
};

//Funciton to create paragraph element for data display
function createDataItem(info){
  let p = document.createElement('p');
  p.textContent = info;
  p.className = 'is-flex m-4';
  return p;
}

//Function to search for a country and update display
function searchForCountry(){
  header.innerHTML = country;
  fetchData(country);
};