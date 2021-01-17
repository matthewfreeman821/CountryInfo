# A Country's Data
Small Front-End Project

## Author

* **Matthew Freeman** - [matthewfreeman821](https://github.com/matthewfreeman821)

## Built With

* HTML5/CSS3
* JavaScript
* Bulma

## Development Process
* [1. Concept](#1-concept)
* [2. Initial Planning](#2-initial-planning)
* [3. Obstacles and Breakthroughs!](#3-obstacles-and-breakthroughs)
* [4. Future Additions](#4-future-additions)




### 1. Concept

I decided to utilize this API to make a small project which displays simple information about a specific country in the world. This country is selected by user input in the search bar, and then the page is updated to display the capital, population, and region of the given country.




### 2. Initial Planning

I came across this API while watching a tutorial on Promises. I wanted to build a small project utilizing the API to display information on a coutry. I wireframed out a simple display. Initially, I wanted to use Semantic-ui, but went with Bulma as a CSS framework instead.

The project utilizes JavaScript selectors to update specific portions of the site and add the displayed information. The information displayed is provided by the API in the form of an array of objects. Utilizing Javascript, the pertinent information is selected and displayed above the search bar.



### 3. Obstacles and Breakthroughs

The largest obstacle was removing the current country's displayed information before displaying a different country's information. Attempting to do this with a for loop ran into the issue of only removing some of the displayed information. A while loop was utilized to circumvent this issue.



### 4. Future Additions

* A better layout for displaying information
* More country information diplayed
* Display current weather at country's capital city
