import "./styles/styles.css";

import svgC from "./assets/c.svg";
import svgF from "./assets/f.svg";

import { createTitle } from "./javascript/headerTitle.js";
import { createSearch } from "./javascript/headerSearch.js";
import { createBtns } from "./javascript/headerBtns.js";

import { createMessageView } from "./javascript/contentMessages.js";

import { createLocationView } from "./javascript/contentLocation.js";

import { createHoursView, updateHoursFC } from "./javascript/contentHours.js";
import { createAlertsView } from "./javascript/contentAlerts.js";
import { createDaysView, updateDaysFC } from "./javascript/contentDays.js";

import {
  createWeatherView,
  updateCurrentFC,
} from "./javascript/contentWeather.js";

import { fetchWithHandling } from "./javascript/fetch.js";

import { worldCapitals } from "./data/worldCapitals.js";
import { stateCapitals } from "./data/stateCapitals.js";

import {
  contentChecker,
  clickLocationContentBtn,
  getBtnSoundEffect,
} from "./javascript/functionsBasic.js";

let weatherData = null;
let weatherDataWorld = null;
let weatherDataUSA = null;

function clickEffects() {
  const titleImg1 = document.querySelector("#title-img1");
  const titleImg2 = document.querySelector("#title-img2");

  titleImg1.classList.add("spin-ud");
  setTimeout(() => titleImg1.classList.remove("spin-ud"), 500);
  titleImg2.classList.add("spin-lr");
  setTimeout(() => titleImg2.classList.remove("spin-lr"), 500);
}

document.addEventListener("DOMContentLoaded", () => {
  createTitle();
  createSearch();
  createBtns();
  createMessageView();
  getBtnSoundEffect();

  const tempScaleBtn = document.querySelector("#temp-scale-btn");
  tempScaleBtn.value = "F";
  const tempScaleImg = document.querySelector("#temp-scale-img");
  tempScaleImg.src = svgF;

  tempScaleBtn.addEventListener("click", () => {
    if (tempScaleImg.src === svgF && tempScaleBtn.value === "F") {
      tempScaleBtn.value = "C";
      tempScaleImg.src = svgC;
      console.log("Temperature scale set to Celsius.");
      updateCurrentFC();
      updateHoursFC();
      updateDaysFC();
    } else {
      tempScaleBtn.value = "F";
      tempScaleImg.src = svgF;
      console.log("Temperature scale set to Fahrenheit.");
      updateCurrentFC();
      updateHoursFC();
      updateDaysFC();
    }
  });

  const searchInput = document.querySelector("#search-input");
  const alpha =
    "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/";
  const bravo = "?unitGroup=us&key=";
  const k = "5BZ3MHEVJJ7AWTKSA5VSR3473";
  const charlie = "&contentType=json";
  let isCooldown = false;
  const setTimeoutValue = 1000;

  // ***
  // const searchBtn = document.querySelector("#search-btn");

  // searchBtn.addEventListener("click", () => {
  //   if (isCooldown) return;

  //   isCooldown = true;

  //   weatherDataUSA = null;
  //   weatherDataWorld = null;

  //   clickEffects();

  //   const querySearch = searchInput.value;
  //   console.log(`Search bar query is for: ${querySearch}`);

  //   const url = `${alpha}${querySearch}${bravo}${k}${charlie}`;

  //   async function initSearch() {
  //     contentChecker();

  //     weatherData = await fetchWithHandling(url);

  //     const locationQuerySearch = querySearch;

  //     console.log(weatherData);
  //     console.log(
  //       `Search bar resolved address: ${weatherData.resolvedAddress}`
  //     );
  //     createLocationView(locationQuerySearch, weatherData);

  //     createHoursView(weatherData);
  //     clickLocationContentBtn(
  //       "hours"
  //     );

  //     createAlertsView(weatherData);
  //     clickLocationContentBtn(
  //       "alerts"
  //     );

  //     createDaysView(weatherData);
  //     clickLocationContentBtn(
  //       "days"
  //     );

  //     createWeatherView(weatherData);
  //   }

  //   initSearch();

  //   setTimeout(() => {
  //     isCooldown = false;
  //   }, setTimeoutValue);
  // });

  // ***

  const searchBtn = document.querySelector("#search-btn");

  searchBtn.addEventListener("click", () => {
    if (isCooldown) return;

    isCooldown = true;

    weatherDataUSA = null;
    weatherDataWorld = null;

    clickEffects();

    const querySearch = searchInput.value;
    console.log(`Search bar query is for: ${querySearch}`);

    const url = `${alpha}${querySearch}${bravo}${k}${charlie}`;

    async function initSearch() {
      contentChecker();

      // Fetch weather data and handle errors
      const weatherData = await fetchWithHandling(url);

      // Call createMessageView to handle displaying messages
      createMessageView(weatherData);

      // Proceed if there’s valid data
      if (weatherData && !weatherData.error) {
        const locationQuerySearch = querySearch;

        console.log(weatherData);
        console.log(
          `Search bar resolved address: ${weatherData.resolvedAddress}`
        );

        createLocationView(locationQuerySearch, weatherData);
        createHoursView(weatherData);
        clickLocationContentBtn("hours");

        createAlertsView(weatherData);
        clickLocationContentBtn("alerts");

        createDaysView(weatherData);
        clickLocationContentBtn("days");

        createWeatherView(weatherData);
      }

      // Reset cooldown after processing
      setTimeout(() => {
        isCooldown = false;
      }, setTimeoutValue);
    }

    initSearch();
  });

  // ****

  // const worldBtn = document.querySelector("#world-btn");

  // worldBtn.addEventListener("click", () => {
  //   if (isCooldown) return;

  //   isCooldown = true;

  //   let queryWorld;
  //   clickEffects();

  //   function getRandomWorldCapital() {
  //     const randomIndex = Math.floor(Math.random() * worldCapitals.length);
  //     return worldCapitals[randomIndex];
  //   }

  //   const randomWorldCapital = getRandomWorldCapital();
  //   console.log(
  //     `Random world capital selected is ${randomWorldCapital.city}, ${randomWorldCapital.country}`
  //   );

  //   queryWorld = `${randomWorldCapital.city}, ${randomWorldCapital.country}`;
  //   console.log(`(World button click) world capital search for: ${queryWorld}`);

  //   const urlWorld = `${alpha}${queryWorld}${bravo}${k}${charlie}`;

  //   async function initWorld() {
  //     weatherData = null;
  //     weatherDataUSA = null;

  //     contentChecker();

  //     weatherDataWorld = await fetchWithHandling(urlWorld);
  //     const locationQueryWorld = randomWorldCapital.city;

  //     console.log(weatherDataWorld);
  //     console.log(
  //       `World capital resolved address: ${weatherDataWorld.resolvedAddress}`
  //     );
  //     createLocationView(locationQueryWorld, weatherDataWorld);

  //     createHoursView(weatherDataWorld);
  //     clickLocationContentBtn("hours"
  //     );

  //     createAlertsView(weatherDataWorld);
  //     clickLocationContentBtn("alerts"
  //     );

  //     createDaysView(weatherDataWorld);
  //     clickLocationContentBtn("days"
  //     );

  //     createWeatherView(weatherDataWorld);

  //   }
  //   initWorld();

  //   setTimeout(() => {
  //     isCooldown = false;
  //   }, setTimeoutValue);
  // });

  // ****

  const worldBtn = document.querySelector("#world-btn");

  worldBtn.addEventListener("click", () => {
    if (isCooldown) return;

    isCooldown = true;

    let queryWorld;
    clickEffects();

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

      contentChecker();

      // Fetch weather data for the random world capital
      weatherDataWorld = await fetchWithHandling(urlWorld);

      // Call createMessageView to handle displaying messages
      createMessageView(weatherDataWorld);

      // Proceed if there’s valid data
      if (weatherDataWorld && !weatherDataWorld.error) {
        const locationQueryWorld = randomWorldCapital.city;

        console.log(weatherDataWorld);
        console.log(
          `World capital resolved address: ${weatherDataWorld.resolvedAddress}`
        );

        createLocationView(locationQueryWorld, weatherDataWorld);
        createHoursView(weatherDataWorld);
        clickLocationContentBtn("hours");

        createAlertsView(weatherDataWorld);
        clickLocationContentBtn("alerts");

        createDaysView(weatherDataWorld);
        clickLocationContentBtn("days");

        createWeatherView(weatherDataWorld);
      }

      // Reset cooldown after processing
      setTimeout(() => {
        isCooldown = false;
      }, setTimeoutValue);
    }

    initWorld();
  });

  // *****

  // const usaBtn = document.querySelector("#usa-btn");

  // usaBtn.addEventListener("click", () => {
  //   if (isCooldown) return;

  //   isCooldown = true;

  //   let queryUSA = null;
  //   clickEffects();

  //   function getRandomUSACapital() {
  //     const randomIndex = Math.floor(Math.random() * stateCapitals.length);
  //     return stateCapitals[randomIndex];
  //   }

  //   const randomUSACapital = getRandomUSACapital();
  //   console.log(
  //     `Random state capital selected is ${randomUSACapital.capital}, ${randomUSACapital.abbr}`
  //   );

  //   queryUSA = `${randomUSACapital.capital}, ${randomUSACapital.abbr}`;
  //   console.log(`(USA button click) state capital search for: ${queryUSA}`);

  //   const urlUSA = `${alpha}${queryUSA}${bravo}${k}${charlie}`;

  //   async function initUSA() {
  //     weatherData = null;
  //     weatherDataWorld = null;

  //     contentChecker();

  //     weatherDataUSA = await fetchWithHandling(urlUSA);
  //     const locationQueryUSA = randomUSACapital.capital;

  //     console.log(weatherDataUSA);
  //     console.log(
  //       `State capital resolved address: ${weatherDataUSA.resolvedAddress}`
  //     );

  //     createLocationView(locationQueryUSA, weatherDataUSA);

  //     createHoursView(weatherDataUSA);
  //     clickLocationContentBtn("hours",
  //       );

  //     createAlertsView(weatherDataUSA);
  //     clickLocationContentBtn("alerts"
  //     );

  //     createDaysView(weatherDataUSA);
  //     clickLocationContentBtn("days"
  //     );

  //     createWeatherView(weatherDataUSA);
  //   }

  //   initUSA();

  //   setTimeout(() => {
  //     isCooldown = false;
  //   }, setTimeoutValue);
  // });

  // *****

  const usaBtn = document.querySelector("#usa-btn");

  usaBtn.addEventListener("click", () => {
    if (isCooldown) return;

    isCooldown = true;

    let queryUSA = null;
    clickEffects();

    function getRandomUSACapital() {
      const randomIndex = Math.floor(Math.random() * stateCapitals.length);
      return stateCapitals[randomIndex];
    }

    const randomUSACapital = getRandomUSACapital();
    console.log(
      `Random state capital selected is ${randomUSACapital.capital}, ${randomUSACapital.abbr}`
    );

    queryUSA = `${randomUSACapital.capital}, ${randomUSACapital.abbr}`;
    console.log(`(USA button click) state capital search for: ${queryUSA}`);

    const urlUSA = `${alpha}${queryUSA}${bravo}${k}${charlie}`;

    async function initUSA() {
      weatherData = null;
      weatherDataWorld = null;

      contentChecker();

      // Fetch weather data for the random USA capital
      weatherDataUSA = await fetchWithHandling(urlUSA);

      // Call createMessageView to handle displaying messages
      createMessageView(weatherDataUSA);

      // Proceed if there’s valid data
      if (weatherDataUSA && !weatherDataUSA.error) {
        const locationQueryUSA = randomUSACapital.capital;

        console.log(weatherDataUSA);
        console.log(
          `State capital resolved address: ${weatherDataUSA.resolvedAddress}`
        );

        createLocationView(locationQueryUSA, weatherDataUSA);
        createHoursView(weatherDataUSA);
        clickLocationContentBtn("hours");

        createAlertsView(weatherDataUSA);
        clickLocationContentBtn("alerts");

        createDaysView(weatherDataUSA);
        clickLocationContentBtn("days");

        createWeatherView(weatherDataUSA);
      }

      // Reset cooldown after processing
      setTimeout(() => {
        isCooldown = false;
      }, setTimeoutValue);
    }

    initUSA();
  });
});
