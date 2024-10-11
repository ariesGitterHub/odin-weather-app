import { format, parse } from "date-fns";

import {
  createDivElement,
  createBtnElement,
  createImgElement,
  createTextElement,
} from "./functionsBasic.js";

import {
  convertToCelsius,
  styleDayNight,
  getWeatherIconSRC,
  getWindDirection,
  getUVIndexValue,
} from "./functionsWeather.js";

export function createWeatherBtns(data) {
  const dataContent = document.querySelector("#data-content");
  const weatherContent = createDivElement("weather-content");
  dataContent.append(weatherContent);
  const alertsData = data.alerts;

  function checkForAlertInfo() {
    const weatherBtnContent = createDivElement("weather-btn-content");
    const hourlyBtn = createBtnElement("hourly-btn", "Hourly Forecast");
    const alertBtn = createBtnElement("alert-btn", "Alert");
    const sevenDayBtn = createBtnElement("seven-day-btn", "7 Day Forecast");

    if (alertsData.length > 0) {
      console.log(alertsData);
      weatherContent.append(weatherBtnContent);
      weatherBtnContent.append(hourlyBtn, alertBtn, sevenDayBtn);
    } else {
      weatherContent.append(weatherBtnContent);
      weatherBtnContent.append(hourlyBtn, sevenDayBtn);
    }
  }
  checkForAlertInfo();
}

export function createWeatherView(data) {
  const tempScaleBtn = document.querySelector("#temp-scale-btn");
  const noWeatherDataAvailable = "No weather data available.";
  if (!data) {
    console.error(noWeatherDataAvailable);
    return;
  }

  const parseLastUpdateLocalTime = format(
    parse(data.currentConditions.datetime, "HH:mm:ss", new Date()),
    "hh:mm:ss a"
  );

  const weatherContent = document.querySelector("#weather-content");
  const currentWeather = createDivElement("current-weather");
  const currentWeatherTextImgCont = createDivElement("current-weather-text-img-cont");
  const currentWeatherTextCont = createDivElement("current-weather-text-cont");
  const currentConditionsTitle = createTextElement(
    "p",
    "current-conditions-title",
    "Current Location Conditions"
  );
  const currentLastUpdate = createTextElement(
    "p",
    "current-last-update",
    `(Updated at ${parseLastUpdateLocalTime} location time.)`
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
    )}°C`;
  } else {
    currentTemperature.textContent = `Temperature: ${currentTempData}°F`;
    currentFeelsTemperature.textContent = `Feels Like: ${currentFeelsTempData}°F`;
    currentDewPoint.textContent = `Dew Point: ${currentDewTempData}°F`;
  }
  const chanceOfPrecipitationData = data.currentConditions.precipprob;
 
  const chanceOfPrecipitation = createTextElement(
    "p",
    "chance-of-precipitation",
    `Chance of Precipitation: ${chanceOfPrecipitationData}%`
  );

  const currentWindSpeedMPHData = data.currentConditions.windspeed;
  const currentWindDirectionData = data.currentConditions.winddir;
  const currentWindGustMPHData = data.currentConditions.windgust;

  let windInfo = "";
  if (currentWindSpeedMPHData && currentWindDirectionData && currentWindGustMPHData) {
    windInfo = `Wind: ${currentWindSpeedMPHData} mph ${getWindDirection(
      data
    )} (Gusts: ${currentWindGustMPHData} mph)`;
  } else if (currentWindSpeedMPHData && currentWindDirectionData) {
    windInfo = `Wind: ${currentWindSpeedMPHData} mph ${getWindDirection(data)}`;
  } else {
    windInfo = "";
  }

  const currentWindInfo = createTextElement("p", "current-win-info", windInfo);

  const currentUVIndexData = data.currentConditions.uvindex;
  const currentUVIndex = createTextElement(
    "p",
    "current-UV-index",
    `UV Index: ${currentUVIndexData} ${getUVIndexValue(data)}`
  );

  weatherContent.append(currentWeather);
    currentWeather.append(
      currentConditionsTitle,
      currentLastUpdate,
      currentConditionsText,
      currentWeatherTextImgCont,
      currentUVIndex,
      chanceOfPrecipitation,
      currentWindInfo
    );

  currentWeatherTextImgCont.append(currentWeatherTextCont, currentWeatherIconImg);
  currentWeatherTextCont.append(
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
