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

// function reformatDate(date) {
//   const weekdayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
//   const formattedDate = format(date, "yyyy MMM dd");
//   // Gets the day of the week index (0 = Sunday, 1 = Monday, etc.)
//   const dayOfWeekIndex = getDay(date);
//   // Gets the day of the week name from the array
//   const dayOfWeek = weekdayNames[dayOfWeekIndex];
//   // Combines everything together...
//   return `${formattedDate} (${dayOfWeek})`;
// }

// export function checkScale() {
//     const tempScaleBtn = document.querySelector("#temp-scale-btn");
//       if (tempScaleBtn.value === "C") {
//         tempScaleBtn.value = "C";
//       } else {
//         tempScaleBtn.value = "F";
//       }
// }

// function convertCF(data) {
//   let currentTemp = `${data.currentConditions.temp}°F`;
//   console.log(currentTemp)
//   let feelsTemp = `${data.currentConditions.feelslike}°F`;
// }

// export function dataFC(data) {
//   let tempScaleBtn = document.querySelector("#temp-scale-btn");
//   let currentTemp = data.currentConditions.temp;
//   let feelsTemp = data.currentConditions.feelslike;
//   let currentHumidity = data.currentConditions.humidity;
//   let dewTemp = data.currentConditions.dew;
//   let currentTempScale = "F";
//   tempScaleBtn.addEventListener("click", (data) => {
//     if (tempScaleBtn.value === "C") {
//         currentTemp = convertToCelsius(data.currentConditions.temp);
//         feelsTemp = convertToCelsius(data.currentConditions.feelslike);
//         currentHumidity = convertToCelsius(data.currentConditions.humidity);
//         dewTemp = convertToCelsius(data.currentConditions.dew);
//         currentTempScale = "C";
//     } else if (tempScaleBtn.value === "F") {
//         currentTemp = data.currentConditions.temp;
//         feelsTemp = data.currentConditions.feelslike;
//         currentHumidity = data.currentConditions.humidity;
//         dewTemp = data.currentConditions.dew;
//         currentTempScale = "F";
//       }
//       return currentTemp, feelsTemp, currentHumidity, dewTemp, currentTempScale;
//   })

// }

// function dataFC(data) {
//   let tempScaleBtn = document.querySelector("#temp-scale-btn");

//   // Initialize temperatures
//   let currentTemp = data.currentConditions.temp;
//   let feelsTemp = data.currentConditions.feelslike;
//   let currentHumidity = data.currentConditions.humidity;
//   let dewTemp = data.currentConditions.dew;
//   let currentTempScale = "F";

//   // Update temperatures on button click
//   tempScaleBtn.addEventListener("click", () => {
//     if (tempScaleBtn.value === "C") {
//       currentTemp = convertToCelsius(data.currentConditions.temp);
//       feelsTemp = convertToCelsius(data.currentConditions.feelslike);
//       currentHumidity = data.currentConditions.humidity; // Humidity stays the same
//       dewTemp = convertToCelsius(data.currentConditions.dew);
//       currentTempScale = "C";
//     } else {
//       currentTemp = data.currentConditions.temp;
//       feelsTemp = data.currentConditions.feelslike;
//       currentHumidity = data.currentConditions.humidity;
//       dewTemp = data.currentConditions.dew;
//       currentTempScale = "F";
//     }

//     // Update displayed data after conversion
//     populateWeatherData(data.query, {
//       ...data,
//       currentTemp,
//       feelsTemp,
//       currentHumidity,
//       dewTemp,
//       currentTempScale,
//     });
//   });

//   return {
//     currentTemp,
//     feelsTemp,
//     currentHumidity,
//     dewTemp,
//     currentTempScale,
//   };
// }

export function populateWeatherData(query, data) {
  // dataFC(data)
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
    query.toUpperCase()
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
    `Sunrise: ${data.currentConditions.sunrise}, Sunset ${data.currentConditions.sunset}`
  );

  const weatherContent = createDivElement("weather-content");

  // const today = new Date();

  // const todayDate = document.querySelector("#today-date");
  // todayDate.textContent = reformatDate(today);

  const currentConditions = createTextElement(
    "h2",
    "current-conditions",
    data.currentConditions.conditions.toUpperCase()
  );

  const weatherIconSRC = (() => {
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

  const weatherIcon = createImgElement(
    "weather-icon",
    weatherIconSRC,
    "Weather icon based on current conditions."
  );

  const currentTemp = data.currentConditions.temp;
  const feelsTemp = data.currentConditions.feelslike;
  const currentHumidity = data.currentConditions.humidity;
  const dewTemp = data.currentConditions.dew;
  // const currentTempScale = "F";

  //use classes
  // const currentTempSpan = createSpanElement("current-temp", currentTemp);
  // const feelsTempSpan = createSpanElement("feels-temp", feelsTemp);
  // const currentHumiditySpan = createSpanElement("current-humidity", currentHumidity)
  // const dewTempSpan = createSpanElement("dew-temp", dewTemp)
  // const currentTempScaleSpan = createSpanElement("current-temp-scale", currentTempScale)

  const temperatures = createTextElement(
    "p",
    "temperatures",
    ""
  );
  const moisture = createTextElement(
    "p",
    "moisture",
    ""
  );

  // const tempScaleBtn = document.querySelector("#temp-scale-btn");

  if (tempScaleBtn.value === "C") {
    temperatures.textContent = 
    `Currently: ${convertToCelsius(currentTemp)}°C (Feels Like: ${convertToCelsius(feelsTemp)}°C)`

    moisture.textContent = 
    `Humidity: ${currentHumidity}% (Dew Point: ${convertToCelsius(dewTemp)}°C)`
  } else {
    temperatures.textContent = 
    `Currently: ${currentTemp}°F (Feels Like: ${feelsTemp}°F)`
    moisture.textContent = 
    `Humidity: ${currentHumidity}% (Dew Point: ${dewTemp}°F)`
  }

  dataContent.append(locationContent, weatherContent);

  locationContent.append(
    locationName,
    resolvedAddress,
    locationLatLon,
    sunriseSunset
  );

  weatherContent.append(currentConditions, temperatures, moisture, weatherIcon);
}

// function convertToCelsius(temp) {
//   const celsius = Math.round((((temp - 32) * 5) / 9) * 10) / 10;
//   return celsius;
// }

// function convertToFahrenheit(temp) {
//   const celsius = Math.round(((temp * 9) / 5 + 32) * 10) / 10;
//   return celsius;
// }

// export function updateDataFC(data) {
//   const tempScaleBtn = document.querySelector("#temp-scale-btn");
//   const temperatures = document.querySelector("#temperatures");
//   // tempScaleBtn.addEventListener("click", () => {
//     if (tempScaleBtn.value === "C") {
//       temperatures.textContent = `Currently: ${convertToCelsius(
//         data.currentConditions.temp
//       )}°${tempScaleBtn.value} (Feels Like: ${convertToCelsius(
//         data.currentConditions.feelslike
//       )}°${tempScaleBtn.value})`;
//     } else {
//       temperatures.textContent = `Currently: ${data.currentConditions.temp}°${tempScaleBtn.value} (Feels Like: ${data.currentConditions.feelslike}°${tempScaleBtn.value})`;
//     }
//   // });
// }

export function updateDataFC(data) {
  const currentTemp = data.currentConditions.temp;
  const feelsTemp = data.currentConditions.feelslike;
  const currentHumidity = data.currentConditions.humidity;
  const dewTemp = data.currentConditions.dew;

  const temperatures = document.querySelector("#temperatures");
  const moisture = document.querySelector("#moisture");

  const tempScaleBtn = document.querySelector("#temp-scale-btn");
    if (tempScaleBtn.value === "C") {
      temperatures.textContent = `Currently: ${convertToCelsius(
        currentTemp
      )}°C (Feels Like: ${convertToCelsius(feelsTemp)}°C)`;

      moisture.textContent = `Humidity: ${currentHumidity}% (Dew Point: ${convertToCelsius(
        dewTemp
      )}°C)`;
    } else {
      temperatures.textContent = `Currently: ${currentTemp}°F (Feels Like: ${feelsTemp}°F)`;
      moisture.textContent = `Humidity: ${currentHumidity}% (Dew Point: ${dewTemp}°F)`;
    }
}
