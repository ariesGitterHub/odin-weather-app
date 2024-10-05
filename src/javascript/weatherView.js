import { format, parse } from "date-fns";

import {
  createDivElement,
  createImgElement,
  createTextElement,
} from "./basicFunctions";
import clearDay from "../assets/clear-day.svg";
import clearNight from "../assets/clear-night.svg";
import cloudy from "../assets/cloudy.svg";
import fog from "../assets/fog.svg";
import hail from "../assets/hail.svg";
import partlyCloudyDay from "../assets/partly-cloudy-day.svg";
import partlyCloudyNight from "../assets/partly-cloudy-night.svg";
import rainSnowShowersDay from "../assets/rain-snow-showers-day.svg";
import rainSnowShowersNight from "../assets/rain-snow-showers-night.svg";
import rainSnow from "../assets/rain-snow.svg";
import rain from "../assets/rain.svg";
import showersDay from "../assets/showers-day.svg";
import showersNight from "../assets/showers-night.svg";
import sleet from "../assets/sleet.svg";
import snowShowersDay from "../assets/snow-showers-day.svg";
import snowShowersNight from "../assets/snow-showers-night.svg";
import snow from "../assets/snow.svg";
import thunderRain from "../assets/thunder-rain.svg";
import thunderShowersDay from "../assets/thunder-showers-day.svg";
import thunderShowersNight from "../assets/thunder-showers-night.svg";
import thunder from "../assets/thunder.svg";
import wind from "../assets/wind.svg";

import moon1New from "../assets/moon1-new.svg";
import moon2WaxCre from "../assets/moon2-waxing-crescent.svg";
import moon3FirQua from "../assets/moon3-first-quarter.svg";
import moon4WaxGib from "../assets/moon4-waxing-gibbous.svg";
import moon5Full from "../assets/moon5-full.svg";
import moon6WanGib from "../assets/moon6-waning-gibbous.svg";
import moon7LasQua from "../assets/moon7-last-quarter.svg";
import moon8WanCre from "../assets/moon8-waning-crescent.svg";

// import { format, getDay } from "date-fns";

import { convertToCelsius } from "./basicFunctions.js";



function styleDayNight(data) {


  const parseLastUpdateLocalTime = format(
    parse(data.currentConditions.datetime, "HH:mm:ss", new Date()),
    "HH:mm:ss a"
  );

  const parseSunrise = format(
    parse(data.currentConditions.sunrise, "HH:mm:ss", new Date()),
    "HH:mm:ss a"
  );

  const parseSunset = format(
    parse(data.currentConditions.sunset, "HH:mm:ss", new Date()),
    "HH:mm:ss a"
  );


  const locationContent = document.querySelector("#location-content");
  const weatherContent = document.querySelector("#weather-content");


  if (
    parseLastUpdateLocalTime > parseSunrise
    &&
    parseLastUpdateLocalTime < parseSunset 
    ) {
    locationContent.style.backgroundColor = "var(--light)";
    locationContent.style.color = "var(--dark)";
    weatherContent.style.backgroundColor = "var(--light)";
    weatherContent.style.color = "var(--dark)";
  } else if (
    parseLastUpdateLocalTime < parseSunrise 
    ||
    parseLastUpdateLocalTime > parseSunset
  ) {
    locationContent.style.backgroundColor = "var(--dark)";
    locationContent.style.color = "var(--light)";
    weatherContent.style.backgroundColor = "var(--dark)";
    weatherContent.style.color = "var(--light)";
  }
}

function weatherIconSRC(data) {
  switch (data.currentConditions.icon) {
    case "clear-day":
      return clearDay;
    case "clear-night":
      return clearNight;
    case "cloudy":
      return cloudy;
    case "fog":
      return fog;
    case "hail":
      return hail;
    case "partly-cloudy-day":
      return partlyCloudyDay;
    case "partly-cloudy-night":
      return partlyCloudyNight;
    case "rain-snow-showers-day":
      return rainSnowShowersDay;
    case "rain-snow-showers-night":
      return rainSnowShowersNight;
    case "rain-snow":
      return rainSnow;
    case "rain":
      return rain;
    case "showers-day":
      return showersDay;
    case "showers-night":
      return showersNight;
    case "sleet":
      return sleet;
    case "snow-showers-day":
      return snowShowersDay;
    case "snow-showers-nigh":
      return snowShowersNight;
    case "snow":
      return snow;
    case "thunder-rain":
      return thunderRain;
    case "thunder-showers-day":
      return thunderShowersDay;
    case "thunder-showers-night":
      return thunderShowersNight;
    case "thunder":
      return thunder;
    case "wind":
      return wind;
    default:
      return null;
  }
}

function getMoonPhase(data) {
  const moonRatio = data.currentConditions.moonphase; // Use moonRatio consistently
  let moonSrc;
  let moonPhase;
  console.log(`Moon Phase value: ${moonRatio}`);
  
  if (moonRatio === 0) {
    moonSrc = moon1New;
    moonPhase = "New Moon";
  } else if (moonRatio > 0 && moonRatio < 0.25) {
    moonSrc = moon2WaxCre;
    moonPhase = "Waxing Crescent";
  } else if (moonRatio === 0.25) {
    moonSrc = moon3FirQua;
    moonPhase = "First Quarter";
  } else if (moonRatio > 0.25 && moonRatio < 0.5) {
    moonSrc = moon4WaxGib;
    moonPhase = "Waxing Gibbous";
  } else if (moonRatio === 0.5) {
    moonSrc = moon5Full;
    moonPhase = "Full Moon";
  } else if (moonRatio > 0.5 && moonRatio < 0.75) {
    moonSrc = moon6WanGib;
    moonPhase = "Waning Gibbous";
  } else if (moonRatio === 0.75) {
    moonSrc = moon7LasQua;
    moonPhase = "Last Quarter";
  } else if (moonRatio > 0.75 && moonRatio < 1) {
    moonSrc = moon8WanCre; // Assuming this should be "Waning Crescent"
    moonPhase = "Waning Crescent";
  } else if (moonRatio === 1) {
    moonSrc = moon1New; // Reset for a new cycle
    moonPhase = "New Moon";
  } else {
    return "Invalid value";
  }

  return { moonSrc, moonPhase }; // Return the object at the end
}

export function populateWeatherData(query, data) {
  const tempScaleBtn = document.querySelector("#temp-scale-btn");
  const noWeatherDataAvailable = "No weather data available.";
  const dataContent = document.querySelector("#data-content");
  if (!data) {
    console.error(noWeatherDataAvailable);
    return;
  }

  const parseLastUpdateLocalTime = format(
    parse(data.currentConditions.datetime, "HH:mm:ss", new Date()),
    "hh:mm:ss a"
  );

  const parseSunrise = format(
    parse(data.currentConditions.sunrise, "HH:mm:ss", new Date()),
    "hh:mm:ss a"
  );

  const parseSunset = format(
    parse(data.currentConditions.sunset, "HH:mm:ss", new Date()),
    "hh:mm:ss a"
  );

  const locationContent = createDivElement("location-content");

  const locationName = createTextElement(
    "h1",
    "location-name",
    query
  );

  const resolvedAddress = createTextElement(
    "p",
    "resolved-address",
    data.resolvedAddress
  );

  const locationLatLon = createTextElement(
    "p",
    "latitude-longitude",
    `(Latitude: ${data.latitude}, Longitude: ${data.longitude})`
  );

  const sunriseSunset = createTextElement(
    "p",
    "sunrise-sunset",
    `Sunrise: ${parseSunrise}, Sunset: ${parseSunset}`
  );

  const moonContent = createDivElement("moon-content")

  // const moonPhaseCont = createDivElement("moon-phase-cont")
  const moonPhaseText = createTextElement("p", "moon-phase-text", getMoonPhase(data).moonPhase)
  const moonPhaseImg = createImgElement("moon-phase-img", getMoonPhase(data).moonSrc, "Current moon phase")

  const weatherContent = createDivElement("weather-content");

  const currentWeather = createDivElement("current-weather");

  const currentWeatherTextImgCont = createDivElement("current-weather-text-img-cont");

  const currentWeatherTextCont = createDivElement("current-weather-text-cont");

  // const currentWeatherTitle = createTextElement(
  //   "h2",
  //   "current-weather-title",
  //   "Currently"
  // );

  const currentConditions = createTextElement(
    "p",
    "current-conditions",
    `Currently: ${data.currentConditions.conditions}`
  );

  const currentLastUpdate = createTextElement(
    "p",
    "current-last-update",
    `(Last updated at ${parseLastUpdateLocalTime} local time.)`
  );

  const currentWeatherIconImg = createImgElement(
    "current-weather-icon-img",
    weatherIconSRC(data),
    "Weather icon based on current conditions."
  );

  const currentTempData = data.currentConditions.temp;
  const currentFeelsTempData = data.currentConditions.feelslike;
  const currentHumidityData = data.currentConditions.humidity;
  const currentDewTempData = data.currentConditions.dew;

  const currentTemperature = createTextElement("p", "current-temperature", "");
  const currentFeelsTemperature = createTextElement(
    "p",
    "current-feels-temperature",
    ""
  );
  const currentHumidity = createTextElement(
    "p",
    "current-humidity",
    `Humidity: ${currentHumidityData}%`
  );
  const currentDewPoint = createTextElement("p", "current-dew-point", "");

  if (tempScaleBtn.value === "C") {
    currentTemperature.textContent = `Temperature: ${convertToCelsius(
      currentTempData
    )}°C`;
    currentFeelsTemperature.textContent = `Feels Like: ${convertToCelsius(
      currentFeelsTempData
    )}°C`;
    currentDewPoint.textContent = `Dew Point: ${convertToCelsius(
      currentDewTempData
    )}°C)`;
  } else {
    currentTemperature.textContent = `Temperature: ${currentTempData}°C`;
    currentFeelsTemperature.textContent = `Feels Like: ${currentFeelsTempData}°C`;
    currentDewPoint.textContent = `Dew Point: ${currentDewTempData}°F`;
  }

  dataContent.append(locationContent, moonContent, weatherContent);

  locationContent.append(
    locationName,
    resolvedAddress,
    locationLatLon,
    sunriseSunset,
  );

  moonContent.append(moonPhaseText, moonPhaseImg);
  // moonPhaseCont.append(moonPhaseText, moonPhaseImg);

  weatherContent.append(currentWeather);
  currentWeather.append(
    currentConditions,
    currentWeatherTextImgCont,
    currentLastUpdate
  );
  currentWeatherTextImgCont.append(currentWeatherTextCont, currentWeatherIconImg);
  currentWeatherTextCont.append(
    // currentWeatherTitle,
    // currentConditions,
    currentTemperature,
    currentFeelsTemperature,
    currentHumidity,
    currentDewPoint
  );

    styleDayNight(data);
}

export function updateDataFC(data) {
  const currentTempData = data.currentConditions.temp;
  const currentFeelsTempData = data.currentConditions.feelslike;
  // const currentHumidityData = data.currentConditions.humidity;
  const currentDewTempData = data.currentConditions.dew;

  const currentTemperature = document.querySelector("#current-temperature");
  const currentFeelsTemperature = document.querySelector(
    "#current-feels-temperature"
  );
  const currentDewPoint = document.querySelector("#current-dew-point");

  const tempScaleBtn = document.querySelector("#temp-scale-btn");
  if (tempScaleBtn.value === "C") {
    currentTemperature.textContent = `Temperature: ${convertToCelsius(
      currentTempData
    )}°C`;
    currentFeelsTemperature.textContent = `Feels Like: ${convertToCelsius(
      currentFeelsTempData
    )}°C`;
    currentDewPoint.textContent = `Dew Point: ${convertToCelsius(
      currentDewTempData
    )}°C`;
  } else {
    currentTemperature.textContent = `Temperature: ${currentTempData}°C`;
    currentFeelsTemperature.textContent = `Feels Like: ${currentFeelsTempData}°C`;
    currentDewPoint.textContent = `Dew Point: ${currentDewTempData}°F`;
  }
}
