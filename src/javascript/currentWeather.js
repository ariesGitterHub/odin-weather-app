import { format, parse } from "date-fns";
import svgTemperature from "../assets/temperature.svg";
// import svgFeelsLikeTemperature from "../assets/feels-like-temperature.svg";
import svgHumidity from "../assets/humidity.svg";
import svgDewPoint from "../assets/dew-point.svg";
import svgUVIndex from "../assets/uv-index.svg";
import svgChanceOfPrecipitation from "../assets/chance-of-precipitation.svg";
import svgWindSm from "../assets/wind-sm.svg";

import { getMoonPhase } from "./functionsWeather.js";

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

export function createWeatherView(data) {
  const dataContent = document.querySelector("#data-content");
  const weatherContent = createDivElement("weather-content");

  const tempScaleBtn = document.querySelector("#temp-scale-btn");

  const noWeatherDataAvailable = "No weather data available.";
  if (!data) {
    console.error(noWeatherDataAvailable);
    return;
  }

  const parseLastUpdateLocalTime = format(
    parse(data.currentConditions.datetime, "HH:mm:ss", new Date()),
    "hh:mm:ssa"
  );

  // const weatherContent = document.querySelector("#weather-content");
  const currentWeather = createDivElement("current-weather");

  // const currentWeatherTopTextImgCont = createDivElement(
  //   "current-weather-top-text-img-cont"
  // );
  const currentWeatherDivCont = createDivElement("current-weather-div-cont");
  // const currentWeatherBotTextCont = createDivElement(
  //   "current-weather-bot-text-cont"
  // );
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

  const currentWeatherIconBtnsDiv = createDivElement(
    "current-weather-icon-btns-div"
  );

  const currentWeatherIconImg = createImgElement(
    "current-weather-icon-img",
    getWeatherIconSRC(data),
    "Weather icon based on current conditions."
  );

  // dataContent.append(weatherContent);
  const alertsData = data.alerts;
  const weatherBtnContent = createDivElement("weather-btn-content");
  function checkForAlertInfo() {
    const hourlyBtn = createBtnElement("hourly-btn", "24H");
    const alertBtn = createBtnElement("alert-btn", "!");
    const sevenDayBtn = createBtnElement("seven-day-btn", "10D");

    if (alertsData.length > 0) {
      console.log(alertsData);
      weatherBtnContent.append(hourlyBtn, alertBtn, sevenDayBtn);
      // weatherBtnContent.style.justifyContent = "space-between"
    } else {
      weatherBtnContent.append(hourlyBtn, sevenDayBtn);
      // weatherBtnContent.style.justifyContent = "space-evenly";
    }
  }
  checkForAlertInfo();

  const currentTempData = data.currentConditions.temp;
  const currentFeelsLikeTemperatureData = data.currentConditions.feelslike;
  const currentHumidityData = data.currentConditions.humidity;
  const currentDewTempData = data.currentConditions.dew;

  const currentTemperatureDiv = createDivElement("current-temperature-div");
  const currentTemperatureImg = createImgElement(
    "current-temperature-img",
    svgTemperature,
    "Temperature Icon"
  );
  const currentTemperatureText = createTextElement(
    "p",
    "current-temperature-text",
    ""
  );

  // const currentFeelsLikeTemperatureDiv = createDivElement("current-feels-like-temperature-div");
  // const currentFeelsLikeTemperatureImg = createImgElement(
  //   "current-feels-like-temperature-img",
  //   svgFeelsLikeTemperature,
  //   "Feels Like Temperature Icon"
  // );
  // const currentFeelsLikeTemperatureText = createTextElement(
  //   "p",
  //   "current-feels-like-temperature-text",
  //   ""
  // );

  // const currentMoistureDiv = createDivElement("current-moisture-div");

  const currentHumidityDiv = createDivElement("current-humidity-div");
  const currentHumidityImg = createImgElement(
    "current-humidity-img",
    svgHumidity,
    "Humidity Icon"
  );
  const currentHumidityText = createTextElement(
    "p",
    "current-humidity-text",
    `${currentHumidityData}%`
  );

  const currentDewPointDiv = createDivElement("current-dew-point-div");
  const currentDewPointImg = createImgElement(
    "current-dew-point-img",
    svgDewPoint,
    "Dew Point Icon"
  );
  const currentDewPointText = createTextElement(
    "p",
    "current-dew-point-text",
    ""
  );

  if (tempScaleBtn.value === "C") {
    currentDewPointText.textContent = `${convertToCelsius(currentDewTempData)}°C`;
    if (currentTempData !== currentFeelsLikeTemperatureData) {
      currentTemperatureText.textContent = `${convertToCelsius(
        currentTempData)}°C (feels like ${convertToCelsius(currentFeelsLikeTemperatureData)}°C)`;
      // currentFeelsLikeTemperatureText.textContent = `${convertToCelsius(currentFeelsLikeTemperatureData)}°C`;
    } else {
      currentTemperatureText.textContent = `${convertToCelsius(
        currentTempData)}°C`;
    }
  } else {
    currentDewPointText.textContent = `${currentDewTempData}°F`;
    if (currentTempData !== currentFeelsLikeTemperatureData) {
      currentTemperatureText.textContent = `${currentTempData}°F (feels like ${currentFeelsLikeTemperatureData}°F)`; 
    } else {
        currentTemperatureText.textContent = `${currentTempData}°F`;
    }

    // currentFeelsLikeTemperatureText.textContent = `${currentFeelsLikeTemperatureData}°F`;

  }

  const currentUVIndexData = data.currentConditions.uvindex;
  const currentUVIndexDiv = createDivElement("current-uv-index-div");
  const currentUVIndexImg = createImgElement(
    "current-uv-index-img",
    svgUVIndex,
    "UV Index Icon"
  );
  const currentUVIndexText = createTextElement(
    "p",
    "current-UV-index-text",
    `${currentUVIndexData} ${getUVIndexValue(data)}`
  );

  const moonPhaseTextImgCont = createDivElement("moon-phase-text-img-cont");

  const moonPhaseText = createTextElement(
    "p",
    "moon-phase-text",
    getMoonPhase(data).moonPhase
  );
  const moonPhaseImg = createImgElement(
    "moon-phase-img",
    getMoonPhase(data).moonSrc,
    "Current moon phase"
  );

  const chanceOfPrecipitationData = data.currentConditions.precipprob;
  const currentChanceOfPrecipitationDiv = createDivElement(
    "current-chance-of-precipitation-div"
  );
  const currentChanceOfPrecipitationImg = createImgElement(
    "current-chance-of-precipitation-img",
    svgChanceOfPrecipitation,
    "Chance of Precipitation Icon"
  );
  const currentChanceOfPrecipitationText = createTextElement(
    "p",
    "chance-of-precipitation-text",
    `${chanceOfPrecipitationData}%`
  );

  const currentWindSpeedMPHData = data.currentConditions.windspeed;
  const currentWindDirectionData = data.currentConditions.winddir;
  const currentWindGustMPHData = data.currentConditions.windgust;

  let windInfo = "";

  if (
    currentWindSpeedMPHData &&
    currentWindDirectionData &&
    currentWindGustMPHData
  ) {
    windInfo = `${currentWindSpeedMPHData}mph ${getWindDirection(
      data
    )} (gusts: ${currentWindGustMPHData}mph)`;
  } else if (currentWindSpeedMPHData && currentWindDirectionData) {
    windInfo = `${currentWindSpeedMPHData}mph ${getWindDirection(data)}`;
  } else {
    windInfo = "";
  }

  const currentWindInfoDiv = createDivElement("current-wind-info-div");

  const currentWindInfoImg = createImgElement("current-wind-info-img", "");
  const currentWindInfoText = createTextElement(
    "p",
    "current-win-info-text",
    windInfo
  );

  if (windInfo !== "") {
    currentWindInfoImg.src = svgWindSm;
    currentWindInfoImg.alt = "Wind Icon";
    currentWindInfoDiv.append(currentWindInfoImg, currentWindInfoText);
  } else if (windInfo === "") {
    currentWindInfoImg.src = "";
    currentWindInfoImg.alt = "";
    currentWindInfoImg.style.border = "none";
  }

  dataContent.append(weatherContent);
  weatherContent.append(currentWeather);
  currentWeather.append(
    currentConditionsTitle,
    currentLastUpdate,
    currentConditionsText,
    currentWeatherIconBtnsDiv,
    currentWeatherDivCont
    // currentWeatherTopTextImgCont,
    // currentWeatherBotTextCont,
    // currentUVIndex,
    // chanceOfPrecipitation,
    // currentWindInfo
  );

  currentWeatherIconBtnsDiv.append(currentWeatherIconImg, weatherBtnContent);
  // currentWeatherTopTextImgCont.append(
  //   currentWeatherTopTextCont,

  // );

  currentWeatherDivCont.append(
    currentTemperatureDiv,

    // currentFeelsLikeTemperatureDiv,

    currentHumidityDiv,
    currentDewPointDiv,
    currentChanceOfPrecipitationDiv,

    // currentMoistureDiv,

    currentUVIndexDiv,
    moonPhaseTextImgCont,

    currentWindInfoDiv
  );

  currentTemperatureDiv.append(currentTemperatureImg, currentTemperatureText);
  // currentFeelsLikeTemperatureDiv.append(currentFeelsLikeTemperatureImg, currentFeelsLikeTemperatureText);
  currentHumidityDiv.append(currentHumidityImg, currentHumidityText);
  currentDewPointDiv.append(currentDewPointImg, currentDewPointText);

  // currentMoistureDiv.append(currentHumidityDiv, currentDewPointDiv, currentChanceOfPrecipitationDiv)

  // currentWeatherBotTextCont.append(
  //   currentUVIndexDiv,
  //   moonPhaseTextImgCont,
  //   // currentChanceOfPrecipitationDiv,
  //   currentWindInfoDiv,
  // );

  currentUVIndexDiv.append(currentUVIndexImg, currentUVIndexText);
  moonPhaseTextImgCont.append(moonPhaseImg, moonPhaseText);
  currentChanceOfPrecipitationDiv.append(
    currentChanceOfPrecipitationImg,
    currentChanceOfPrecipitationText
  );
  // currentWindInfoDiv.append(currentWindInfoImg, currentWindInfoText);

  styleDayNight(data);
}

export function updateDataFC(data) {
  const currentTempData = data.currentConditions.temp;
  const currentFeelsLikeTemperatureData = data.currentConditions.feelslike;
  const currentDewTempData = data.currentConditions.dew;

  const currentTemperatureText = document.querySelector(
    "#current-temperature-text"
  );
  // const currentFeelsLikeTemperatureText = document.querySelector(
  //   "#current-feels-like-temperature-text"
  // );
  const currentDewPointText = document.querySelector("#current-dew-point-text");

  const tempScaleBtn = document.querySelector("#temp-scale-btn");
  
  // if (tempScaleBtn.value === "C") {
  //   currentTemperatureText.textContent = `${convertToCelsius(
  //     currentTempData
  //   )}°C (feels like ${convertToCelsius(currentFeelsLikeTemperatureData)}°C)`;
  //   // currentFeelsLikeTemperatureText.textContent = `${convertToCelsius(
  //   //   currentFeelsLikeTemperatureData
  //   // )}°C`;
  //   currentDewPointText.textContent = `${convertToCelsius(
  //     currentDewTempData
  //   )}°C`;
  // } else {
  //   currentTemperatureText.textContent = `${currentTempData}°F (feels like ${currentFeelsLikeTemperatureData}°F)`;
  //   // currentFeelsLikeTemperatureText.textContent = `${currentFeelsLikeTemperatureData}°F`;
  //   currentDewPointText.textContent = `${currentDewTempData}°F`;
  // }
  if (tempScaleBtn.value === "C") {
    currentDewPointText.textContent = `${convertToCelsius(
      currentDewTempData
    )}°C`;
    if (currentTempData !== currentFeelsLikeTemperatureData) {
      currentTemperatureText.textContent = `${convertToCelsius(
        currentTempData
      )}°C (feels like ${convertToCelsius(currentFeelsLikeTemperatureData)}°C)`;
      // currentFeelsLikeTemperatureText.textContent = `${convertToCelsius(currentFeelsLikeTemperatureData)}°C`;
    } else {
      currentTemperatureText.textContent = `${convertToCelsius(
        currentTempData
      )}°C`;
    }
  } else {
    currentDewPointText.textContent = `${currentDewTempData}°F`;
    if (currentTempData !== currentFeelsLikeTemperatureData) {
      currentTemperatureText.textContent = `${currentTempData}°F (feels like ${currentFeelsLikeTemperatureData}°F)`;
    } else {
      currentTemperatureText.textContent = `${currentTempData}°F`;
    }

    // currentFeelsLikeTemperatureText.textContent = `${currentFeelsLikeTemperatureData}°F`;
  }
}
