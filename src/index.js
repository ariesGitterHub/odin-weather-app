import "./styles/styles.css";
import svgC from "./assets/c.svg";
import svgF from "./assets/f.svg";
import { contentChecker } from "./javascript/functionsBasic.js";
import { createTitle } from "./javascript/title.js";
import { createSearch } from "./javascript/search.js";
import { createBtns } from "./javascript/btns.js";
import { fetchWithHandling } from "./javascript/fetch.js";
import { createLocationView } from "./javascript/currentLocation.js";
import { createAlertView } from "./javascript/currentAlert.js";
import { createWeatherView, updateDataFC } from "./javascript/currentWeather.js";
import { playClickSound } from "./javascript/sound.js";
import { worldCapitals } from "./data/worldCapitals.js";
import { stateCapitals } from "./data/stateCapitals.js";
// import { createFooter } from "./javascript/footer.js";

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
  // createFooter();

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
  let isCooldown = false;
  const setTimeoutValue = 1000;

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
      // clearDivText("location-content", "weather-content");
      contentChecker(); 
      
      weatherData = await fetchWithHandling(url);
      const locationQuerySearch = querySearch;

      console.log(weatherData);
      console.log(
        `Search bar resolved address: ${weatherData.resolvedAddress}`
      );
      createLocationView(locationQuerySearch, weatherData);
      createAlertView(weatherData);
      createWeatherView(weatherData);
    }

    initSearch();

    setTimeout(() => {
      isCooldown = false;
    }, setTimeoutValue);
  });

  const worldBtn = document.querySelector("#world-btn");

  worldBtn.addEventListener("click", () => {
    if (isCooldown) return;

    isCooldown = true;

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

      // clearDivText("location-content", "weather-content");
      contentChecker();

      weatherDataWorld = await fetchWithHandling(urlWorld);
      const locationQueryWorld = randomWorldCapital.city;

      console.log(weatherDataWorld);
      console.log(
        `World capital resolved address: ${weatherDataWorld.resolvedAddress}`
      );
      createLocationView(locationQueryWorld, weatherDataWorld);
      createAlertView(weatherDataWorld);
      createWeatherView(weatherDataWorld);
    }
    initWorld();

    setTimeout(() => {
      isCooldown = false;
    }, setTimeoutValue);
  });

  // const usaBtn = document.querySelector("#usa-btn");

  // usaBtn.addEventListener("click", () => {
  //   let queryUSA = null;
  //   clickEffects();

  //   // clearQuery(queryUSA);

  //   function getRandomUSACapital() {
  //     const randomIndex = Math.floor(Math.random() * stateCapitals.length);
  //     return stateCapitals[randomIndex];
  //   }

  //   const randomUSACapital = getRandomUSACapital();
  //   console.log(`Random state capital selected is ${randomUSACapital.capital}, ${randomUSACapital.abbr}`);

  //   queryUSA = `${randomUSACapital.capital}, ${randomUSACapital.abbr}`;
  //   // console.log(`Test 1 for queryUSA: ${queryUSA}`);
  //   console.log(`(USA button click) state capital search for: ${queryUSA}`);

  //   const urlUSA = `${alpha}${queryUSA}${bravo}${k}${charlie}`;

  //   async function initUSA() {
  //     weatherData = null;
  //     weatherDataWorld = null;

  //     clearDivText("location-content", "weather-content");

  //     weatherDataUSA = await fetchWithHandling(urlUSA);
  //     const locationQueryUSA = randomUSACapital.capital;

  //     console.log(weatherDataUSA);
  //     console.log(
  //       `State capital resolved address: ${weatherDataUSA.resolvedAddress}`
  //     );

  //     populateWeatherData(locationQueryUSA, weatherDataUSA);
  //   }
  //   initUSA();
  // });

  // TO DO: TEST WHEN API CALL LIMIT RESETS TOMORROW

  const usaBtn = document.querySelector("#usa-btn");
  // let isCooldown = false;

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

      // clearDivText("location-content", "weather-content");
      contentChecker(); 

      weatherDataUSA = await fetchWithHandling(urlUSA);
      const locationQueryUSA = randomUSACapital.capital;

      console.log(weatherDataUSA);
      console.log(
        `State capital resolved address: ${weatherDataUSA.resolvedAddress}`
      );
      
      createLocationView(locationQueryUSA, weatherDataUSA);
      createAlertView(weatherDataUSA);
      createWeatherView(weatherDataUSA);
    }

    initUSA();

    setTimeout(() => {
      isCooldown = false;
    }, setTimeoutValue);
  });
});
