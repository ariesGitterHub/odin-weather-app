import "./styles/styles.css";

import {
  // clearTextNodes,
  clearDivText,
  clearQuery,
} from "./javascript/basicFunctions.js";
import { createTitle } from "./javascript/title.js";
import { createSearch } from "./javascript/search.js"
import { createBtns, displayCF } from "./javascript/btns.js";
import { fetchWithHandling } from "./javascript/fetch.js";
import { 
  // createWeatherView,
populateWeatherData
 } from "./javascript/weatherView.js";
 import { playClickSound } from "./javascript/sound.js";

 import { worldCapitals } from "./data/worldCapitals.js";
 import { stateCapitals } from "./data/stateCapitals.js";

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

  const btnSound = document.querySelectorAll("button");
  btnSound.forEach((button) => {
    button.addEventListener("click", (event) => {
      playClickSound(event);
    });
  });

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
      clearDivText("location-content", "weather-content");
      
      const weatherData = await fetchWithHandling(url);
      const locationQuery = query;

      console.log(weatherData);
      console.log(weatherData.resolvedAddress);

      populateWeatherData(locationQuery, weatherData);
    }

    init();
  });

// function getRandomCapital() {
//   const randomIndex = Math.floor(Math.random() * worldCapitals.length);
//   return worldCapitals[randomIndex];
// }

// const randomCapital = getRandomCapital();
// console.log(`${randomCapital.city}, ${randomCapital.country}`);

// function clearData() {
//   const locationContent = document.querySelector("#location-content");
//   locationContent.innerHtml = ""; 
//   const weatherContent = document.querySelector("#weather-content");
//   weatherContent.innerHtml = ""; 
  
//   query = null;
// }



const worldBtn = document.querySelector("#world-btn");

worldBtn.addEventListener("click", () => {
  let queryWorld;
  clickEffects();
  clearQuery(queryWorld);
  console.log(`TEST1 for: ${queryWorld}`);

  function getRandomCapital() {
    const randomIndex = Math.floor(Math.random() * worldCapitals.length);
    return worldCapitals[randomIndex];
  }

  const randomCapital = getRandomCapital();
  console.log(`${randomCapital.city}, ${randomCapital.country}`);

  queryWorld = `${randomCapital.city}, ${randomCapital.country}`;
  console.log(`Searching for: ${queryWorld}`);

  const urlWorld = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${queryWorld}?unitGroup=us&key=${k}&contentType=json`;

  async function initWorld() {
    clearDivText("location-content", "weather-content");
    // clearQuery(queryWorld);
    console.log(`TEST2 for: ${queryWorld}`);
    const weatherDataWorld = await fetchWithHandling(urlWorld);
    const locationQueryWorld = randomCapital.city;
    console.log(weatherDataWorld);
    console.log(`Resolved address: ${weatherDataWorld.resolvedAddress}`);
    populateWeatherData(locationQueryWorld, weatherDataWorld);
    console.log(`TEST3 for: ${queryWorld}`);
  }
  initWorld();
 
});

// worldBtn.addEventListener("click", () => {
//   clickEffects();

//   const queryWorld = `${randomCapital.city}, ${randomCapital.country}`;
//   console.log(`Searching for: ${queryWorld}`);

//   const urlWorld = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${queryWorld}?unitGroup=us&key=${k}&contentType=json`;

//   async function initWorld() {
//     clearDivText("location-content", "weather-content");
//     try {
//       const weatherDataWorld = await fetchWithHandling(urlWorld);
//       const locationQueryWorld = randomCapital.city;

//       console.log(weatherDataWorld);
//       console.log(`Resolved address: ${weatherDataWorld.resolvedAddress}`);
//       populateWeatherData(locationQueryWorld, weatherDataWorld);
//       console.log(`TEST1 for: ${queryWorld}`);
//     } catch (error) {
//       console.error("Error fetching weather data:", error);
//     }
//   }
//   initWorld();
// });



// createWeatherView(weatherData);
const usaBtn = document.querySelector("#usa-btn");

usaBtn.addEventListener("click", () => {
  let queryUSA;
  clickEffects();
  clearQuery(queryUSA);
  console.log(`TEST1 for: ${queryUSA}`);

  function getRandomCapital() {
    const randomIndex = Math.floor(Math.random() * stateCapitals.length);
    return stateCapitals[randomIndex];
  }

  const randomCapital = getRandomCapital();
  console.log(`${randomCapital.capital}, ${randomCapital.abbr}`);

  queryUSA = `${randomCapital.capital}, ${randomCapital.abbr}`;
  console.log(`Searching for: ${queryUSA}`);

  const urlUSA = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${queryUSA}?unitGroup=us&key=${k}&contentType=json`;

  async function initUSA() {
    clearDivText("location-content", "weather-content");
    // clearQuery(queryWorld);
    console.log(`TEST2 for: ${queryUSA}`);
    const weatherDataUSA = await fetchWithHandling(urlUSA);
    const locationQueryUSA = randomCapital.capital;
    console.log(weatherDataUSA);
    console.log(`Resolved address: ${weatherDataUSA.resolvedAddress}`);
    populateWeatherData(locationQueryUSA, weatherDataUSA);
    console.log(`TEST3 for: ${queryUSA}`);
  }
  initUSA();
});

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

