import "./styles/styles.css";

import { 
  // clearTextNodes, 
  clearDivText 
} from "./javascript/basicFunctions.js";
import { createTitle } from "./javascript/title.js";
import { createSearch } from "./javascript/search.js"
import { createBtns, displayCF } from "./javascript/btns.js";
import { fetchWithHandling } from "./javascript/fetch.js";
import { 
  // createWeatherView,
populateWeatherData
 } from "./javascript/weatherView.js";

 import { worldCapitals } from "./javascript/worldCapitals.js";

 function clickEffects() {
    const titleImg1 = document.querySelector("#title-img1");
    const titleImg2 = document.querySelector("#title-img2");

    titleImg1.classList.add("shake");
    setTimeout(() => titleImg1.classList.remove("shake"), 500);
    titleImg2.classList.add("spin");
    setTimeout(() => titleImg2.classList.remove("spin"), 500);
 }

document.addEventListener("DOMContentLoaded", () => {
  createTitle();
  createSearch();
  createBtns();
  // toggleEarthImg();
  displayCF();

  const searchInput = document.querySelector("#search-input");
  // let query = "";
  const k = "5BZ3MHEVJJ7AWTKSA5VSR3473";

  const searchBtn = document.querySelector("#search-btn");

  searchBtn.addEventListener("click", () => {
    clickEffects();
      // clearData();
    const query = searchInput.value;
    console.log(`Searching for: ${query}`);

    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${query}?unitGroup=us&key=${k}&contentType=json`;

    async function init() {
      const weatherData = await fetchWithHandling(url);
      const locationQuery = query;

      console.log(weatherData);
      console.log(weatherData.resolvedAddress);

      populateWeatherData(locationQuery, weatherData);
    }

    init();
  });

function getRandomCapital() {
  const randomIndex = Math.floor(Math.random() * worldCapitals.length);
  return worldCapitals[randomIndex];
}

const randomCapital = getRandomCapital();
console.log(`${randomCapital.city}, ${randomCapital.country}`);

// function clearData() {
//   const locationContent = document.querySelector("#location-content");
//   locationContent.innerHtml = ""; 
//   const weatherContent = document.querySelector("#weather-content");
//   weatherContent.innerHtml = ""; 
  
//   query = null;
// }



const worldBtn = document.querySelector("#world-btn");

// let count = 0

worldBtn.addEventListener("click", () => {
  clickEffects();
  
  const queryWorld = `${randomCapital.city}, ${randomCapital.country}`;
  console.log(`Searching for: ${queryWorld}`);

  const urlWorld = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${queryWorld}?unitGroup=us&key=${k}&contentType=json`;

  if (count > 0) {
  location.reload();
async function initWorld1() {
  const weatherDataWorld = await fetchWithHandling(urlWorld);
  const locationQueryWorld = randomCapital.city;
  console.log(weatherDataWorld);
  console.log(`Resolved address: ${weatherDataWorld.resolvedAddress}`);
  populateWeatherData(locationQueryWorld, weatherDataWorld);
  console.log(`TEST1 for: ${queryWorld}`);
}
initWorld1();
  } else {
  count +=1;
  async function initWorld2() {
    const weatherDataWorld = await fetchWithHandling(urlWorld);
    const locationQueryWorld = randomCapital.city;
    console.log(weatherDataWorld);
    console.log(`Resolved address: ${weatherDataWorld.resolvedAddress}`);
    populateWeatherData(locationQueryWorld, weatherDataWorld);

    console.log(`TEST1 for: ${queryWorld}`);


}
  initWorld2();
  }
});




// createWeatherView(weatherData);


});

// import { fetchWithHandling, getWeatherData } from "./fetch.js";

// async function init() {
//   const url = "your_weather_api_url";
//   const data = await fetchWithHandling(url);
//   console.log(data); // Should log the fetched data
//   const storedData = getWeatherData(); // Access the stored data
//   console.log(storedData);
// }

// init();