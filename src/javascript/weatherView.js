import { format, parse } from "date-fns";

import {
  createBreakElement,
  createDivElement,
  createImgElement,
  createTextElement,
} from "./functionsBasic.js";


// import { format, getDay } from "date-fns";

import { convertToCelsius, styleDayNight } from "./functionsWeather.js";
// import { styleDayNight } from "./functionsWeather.js";
import { getWeatherIconSRC } from "./functionsWeather.js";

export function createWeatherView(data) {
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

  // const parseSunrise = format(
  //   parse(data.currentConditions.sunrise, "HH:mm:ss", new Date()),
  //   "hh:mm:ss a"
  // );

  // const parseSunset = format(
  //   parse(data.currentConditions.sunset, "HH:mm:ss", new Date()),
  //   "hh:mm:ss a"
  // );

  // const locationContent = createDivElement("location-content");

  // const locationName = createTextElement(
  //   "h1",
  //   "location-name",
  //   query
  // );

  // const resolvedAddress = createTextElement(
  //   "p",
  //   "resolved-address",
  //   data.resolvedAddress
  // );

  // const locationLatLon = createTextElement(
  //   "p",
  //   "latitude-longitude",
  //   `(Latitude: ${data.latitude}, Longitude: ${data.longitude})`
  // );

  // const sunriseSunset = createTextElement(
  //   "p",
  //   "sunrise-sunset",
  //   `Sunrise: ${parseSunrise}, Sunset: ${parseSunset}`
  // );

  // const moonContent = createDivElement("moon-content")

  // // const moonPhaseCont = createDivElement("moon-phase-cont")
  // const moonPhaseText = createTextElement("p", "moon-phase-text", getMoonPhase(data).moonPhase)
  // const moonPhaseImg = createImgElement("moon-phase-img", getMoonPhase(data).moonSrc, "Current moon phase")

  const weatherContent = createDivElement("weather-content");

  const currentWeather = createDivElement("current-weather");

  const currentWeatherTextImgCont = createDivElement("current-weather-text-img-cont");

  const currentWeatherTextCont = createDivElement("current-weather-text-cont");

  const currentConditionsTitle = createTextElement(
    "p",
    "current-conditions-title",
    "Current Location Conditions"
  );
  const currentConditionsData = data.currentConditions.conditions;  
  const currentConditionsText = createTextElement(
    "p",
    "current-conditions-text",
    currentConditionsData
  );

  const currentWeatherIconImg = createImgElement(
    "current-weather-icon-img",
    getWeatherIconSRC(data),
    "Weather icon based on current conditions."
  );

  // const br1 = createBreakElement("break");

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
    currentTemperature.textContent = `Temperature: ${currentTempData}°F`;
    currentFeelsTemperature.textContent = `Feels Like: ${currentFeelsTempData}°F`;
    currentDewPoint.textContent = `Dew Point: ${currentDewTempData}°F`;
  }
  const chanceOfPrecipitationData = data.currentConditions.precipprob;
  const chanceOfPrecipitation = createTextElement("p", "chance-of-precipitation", `Chance of Precipitation: ${chanceOfPrecipitationData}%`);

  const br2 = createBreakElement("br");

  const currentLastUpdate = createTextElement(
    "p",
    "current-last-update",
    `(Last updated at ${parseLastUpdateLocalTime} local time.)`
  );

  dataContent.append(
    // locationContent, moonContent, 
    weatherContent);

  // locationContent.append(
  //   locationName,
  //   resolvedAddress,
  //   locationLatLon,
  //   sunriseSunset,
  // );

  // moonContent.append(moonPhaseText, moonPhaseImg);
  // moonPhaseCont.append(moonPhaseText, moonPhaseImg);

  weatherContent.append(currentWeather);
  currentWeather.append(
    currentConditionsTitle,
    currentConditionsText,
    currentWeatherTextImgCont,
    chanceOfPrecipitation,
    br2,
    currentLastUpdate
  );
  currentWeatherTextImgCont.append(currentWeatherTextCont, currentWeatherIconImg);
  currentWeatherTextCont.append(
    // currentWeatherTitle,
    // currentConditions,
    // br1,
    currentTemperature,
    currentFeelsTemperature,
    currentHumidity,
    currentDewPoint,
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
    currentTemperature.textContent = `Temperature: ${currentTempData}°F`;
    currentFeelsTemperature.textContent = `Feels Like: ${currentFeelsTempData}°F`;
    currentDewPoint.textContent = `Dew Point: ${currentDewTempData}°F`;
  }
}
