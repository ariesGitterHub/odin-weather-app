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
// import { format, getDay } from "date-fns";

import { convertToCelsius } from "./basicFunctions.js";

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

export function populateWeatherData(query, data) {
  const tempScaleBtn = document.querySelector("#temp-scale-btn");
  const noWeatherDataAvailable = "No weather data available.";
  const dataContent = document.querySelector("#data-content");
  if (!data) {
    console.error(noWeatherDataAvailable);
    return;
  }

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

  const parseSunrise = format(
    parse(data.currentConditions.sunrise, "HH:mm:ss", new Date()),
    "hh:mm:ss a"
  );

  const parseSunset = format(
    parse(data.currentConditions.sunset, "HH:mm:ss", new Date()),
    "hh:mm:ss a"
  );

  const sunriseSunset = createTextElement(
    "p",
    "sunrise-sunset",
    `Sunrise: ${parseSunrise}, Sunset: ${parseSunset}`
  );

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

  const parseLastUpdate = format(
    parse(data.currentConditions.datetime, "HH:mm:ss", new Date()),
    "hh:mm:ss a"
  );

  const currentLastUpdate = createTextElement(
    "p",
    "current-last-update",
    `(Last updated at ${parseLastUpdate}.)`
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

  dataContent.append(locationContent, weatherContent);

  locationContent.append(
    locationName,
    resolvedAddress,
    locationLatLon,
    sunriseSunset
  );

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
