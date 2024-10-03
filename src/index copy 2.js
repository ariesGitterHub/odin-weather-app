import "./styles/styles.css";
import svgC from "./assets/c.svg";
import svgF from "./assets/f.svg";
import { clearDivText, 
  // clearQuery 
} from "./javascript/basicFunctions.js";
import { createTitle } from "./javascript/title.js";
import { createSearch } from "./javascript/search.js";
import { createBtns } from "./javascript/btns.js";
import { fetchWithHandling } from "./javascript/fetch.js";
import { populateWeatherData, updateDataFC } from "./javascript/weatherView.js";
import { playClickSound } from "./javascript/sound.js";
import { worldCapitals } from "./data/worldCapitals.js";
import { stateCapitals } from "./data/stateCapitals.js";

let weatherData = null;
let weatherDataWorld = null;
let weatherDataUSA = null;

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

  const btnSound = document.querySelectorAll("button");
  btnSound.forEach((button) => {
    button.addEventListener("click", (event) => {
      playClickSound(event);
    });
  });

  const tempScaleBtn = document.querySelector("#temp-scale-btn");
  tempScaleBtn.value = "F";
  const tempScaleImg = document.querySelector("#temp-scale-img");
  tempScaleImg.src = svgF;

  tempScaleBtn.addEventListener("click", () => {
    if (tempScaleImg.src === svgF && tempScaleBtn.value === "F") {
      tempScaleBtn.value = "C";
      tempScaleImg.src = svgC;
      console.log("Temperature scale set to Celsius.");

      if (weatherData || weatherDataUSA || weatherDataWorld) {
        updateDataFC(weatherData || weatherDataUSA || weatherDataWorld);
      }
    } else {
      tempScaleBtn.value = "F";
      tempScaleImg.src = svgF;
      console.log("Temperature scale set to Fahrenheit.");

      if (weatherData || weatherDataUSA || weatherDataWorld) {
        updateDataFC(weatherData || weatherDataUSA || weatherDataWorld);
      }
    }
  });

  const searchInput = document.querySelector("#search-input");
  const alpha =
    "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/";
  const bravo = "?unitGroup=us&key=";
  const k = "5BZ3MHEVJJ7AWTKSA5VSR3473";
  const charlie = "&contentType=json";
  const searchBtn = document.querySelector("#search-btn");

  searchBtn.addEventListener("click", () => {
    weatherDataUSA = null;
    weatherDataWorld = null;

    clickEffects();

    const query = searchInput.value;
    console.log(`Search bar query is for: ${query}`);

    const url = `${alpha}${query}${bravo}${k}${charlie}`;

    async function init() {
      // clearDivText("location-content", "weather-content");

      weatherData = await fetchWithHandling(url);
      const locationQuery = query;

      console.log(weatherData);
      console.log(
        `Search bar resolved address: ${weatherData.resolvedAddress}`
      );

      populateWeatherData(locationQuery, weatherData);
    }

    init();
  });

  const worldBtn = document.querySelector("#world-btn");

  worldBtn.addEventListener("click", () => {
    let queryWorld;
    clickEffects();
    // clearQuery(queryWorld);

    function getRandomWorldCapital() {
      const randomIndex = Math.floor(Math.random() * worldCapitals.length);
      return worldCapitals[randomIndex];
    }

    const randomWorldCapital = getRandomWorldCapital();
    console.log(
      `Random world capital selected is ${randomWorldCapital.city}, ${randomWorldCapital.country}`
    );

    queryWorld = `${randomWorldCapital.city}, ${randomWorldCapital.country}`;
    console.log(`(World button click) world capital search for: ${queryWorld}`);

    const urlWorld = `${alpha}${queryWorld}${bravo}${k}${charlie}`;

    async function initWorld() {
      weatherData = null;
      weatherDataUSA = null;

      clearDivText("location-content", "weather-content");

      weatherDataWorld = await fetchWithHandling(urlWorld);
      const locationQueryWorld = randomWorldCapital.city;

      console.log(weatherDataWorld);
      console.log(
        `World capital resolved address: ${weatherDataWorld.resolvedAddress}`
      );

      populateWeatherData(locationQueryWorld, weatherDataWorld);
    }
    initWorld();
  });

  const usaBtn = document.querySelector("#usa-btn");

  usaBtn.addEventListener("click", () => {
    let queryUSA = null;
    clickEffects();
    
    // clearQuery(queryUSA);

    function getRandomUSACapital() {
      const randomIndex = Math.floor(Math.random() * stateCapitals.length);
      return stateCapitals[randomIndex];
    }

    const randomUSACapital = getRandomUSACapital();
    console.log(`Random state capital selected is ${randomUSACapital.capital}, ${randomUSACapital.abbr}`);

    queryUSA = `${randomUSACapital.capital}, ${randomUSACapital.abbr}`;
    // console.log(`Test 1 for queryUSA: ${queryUSA}`);
    console.log(`(USA button click) state capital search for: ${queryUSA}`);

    const urlUSA = `${alpha}${queryUSA}${bravo}${k}${charlie}`;

    async function initUSA() {
      weatherData = null;
      weatherDataWorld = null;

      clearDivText("location-content", "weather-content");

      weatherDataUSA = await fetchWithHandling(urlUSA);
      const locationQueryUSA = randomUSACapital.capital;

      console.log(weatherDataUSA);
      console.log(
        `State capital resolved address: ${weatherDataUSA.resolvedAddress}`
      );

      populateWeatherData(locationQueryUSA, weatherDataUSA);
    }
    initUSA();
  });
});
