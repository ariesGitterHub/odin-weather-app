// import {
//   // createImageElement,
//    createTextElement } from "./basicFunctions";

// export function createWeatherView(data) {

//   const dataName = data.resolvedAddress;

//   // if (!data) {
//   //   console.error("No weather data available.");
//   //   return;
//   // }

//   const locationContent = document.querySelector("#location-content");

//   const locationName = createTextElement("h1", "location-name", dataName);
//   locationContent.append(locationName);
// }

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

export function populateWeatherData(query, data) {
  if (!data) {
    console.error("No weather data available.");
    return;
  }

  const locationContent = document.querySelector("#location-content");
  locationContent.style.backgroundColor = "var(--light)";

  const locationName = document.querySelector("#location-name");
  // locationName.textContent = data.resolvedAddress;
  locationName.textContent = query.toUpperCase();

  const resolvedAddress = document.querySelector("#resolved-address");
  resolvedAddress.textContent = data.resolvedAddress;

  const locationLatLon = document.querySelector("#latitude-longitude");
  locationLatLon.textContent = `(Latitude: ${data.latitude}, Longitude: ${data.longitude})`;

  const sunriseSunset = document.querySelector("#sunrise-sunset");
  sunriseSunset.textContent = `Sunrise: ${data.currentConditions.sunrise}, Sunset ${data.currentConditions.sunset}`;

  const weatherContent = document.querySelector("#weather-content");
  weatherContent.style.border = ".25rem solid var(--light)";

  const conditions = document.querySelector("#conditions");
  conditions.textContent = data.currentConditions.conditions;

  const icon = document.querySelector("#icon");

  icon.src = (() => {
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
  })();

  const temperatures = document.querySelector("#temperatures");
  temperatures.textContent = `Currently: ${data.currentConditions.temp}° (Feels Like: ${data.currentConditions.feelslike}°)`;

  const moisture = document.querySelector("#moisture");
  moisture.textContent = `Humidity: ${data.currentConditions.humidity}% (Dew Point: ${data.currentConditions.dew}°)`;
}
