import { format, parse } from "date-fns";

import {
  // createBreakElement,
  createDivElement,
  // createSpanElement,
  createBtnElement,
  createImgElement,
  createTextElement,
} from "./functionsBasic.js";


// import { format, getDay } from "date-fns";

import {
  convertToCelsius,
  styleDayNight,
  getWeatherIconSRC,
  getWindDirection,
  getUVIndexValue,
} from "./functionsWeather.js";

export function createWeatherBtns(data) {
  // const noWDataAvailable = "No data currently available.";
  const dataContent = document.querySelector("#data-content");
  // const weatherContent = document.querySelector("#weather-content");
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
      // dataContent.append(middleContent);
      weatherContent.append(weatherBtnContent);

      weatherBtnContent.append(hourlyBtn, alertBtn, sevenDayBtn);
      // weatherBtnContent.style.justifyContent = "space-between";

      // alertsData.forEach((alert) => {
      //   const alertHeadline = createTextClassElement(
      //     "p",
      //     "alert-headlines",
      //     `➤ ${alert.event}: ${alert.headline} (ends: ${alert.ends})`
      //   );
      //   middleContent.append(alertHeadline);
      // });
    } else {
      // dataContent.append(middleContent);
      weatherContent.append(weatherBtnContent);
      weatherBtnContent.append(hourlyBtn, sevenDayBtn);
    }
  }
  checkForAlertInfo();
}

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

  // const weatherContent = createDivElement("weather-content");
  const weatherContent = document.querySelector("#weather-content");

  const currentWeather = createDivElement("current-weather");

  const currentWeatherTextImgCont = createDivElement("current-weather-text-img-cont");

  const currentWeatherTextCont = createDivElement("current-weather-text-cont");

  const currentConditionsTitle = createTextElement(
    "p",
    "current-conditions-title",
    "Current Local Conditions"
  );

  const currentLastUpdate = createTextElement(
    "p",
    "current-last-update",
    `(Updated at ${parseLastUpdateLocalTime} local time.)`
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
    )}°C`;
  } else {
    currentTemperature.textContent = `Temperature: ${currentTempData}°F`;
    currentFeelsTemperature.textContent = `Feels Like: ${currentFeelsTempData}°F`;
    currentDewPoint.textContent = `Dew Point: ${currentDewTempData}°F`;
  }
  const chanceOfPrecipitationData = data.currentConditions.precipprob;
  // const currentPrecipTypeData = data.currentConditions.preciptype;
  // const currentPrecipInchesData = data.currentConditions.precip;
  // const currentSnowInchesData = data.currentConditions.snow;

  // const chanceOfPrecipitation = createTextElement(
  //   "p",
  //   "chance-of-precipitation",
  //   `Precipitation chance (${
  //     currentPrecipTypeData ? currentPrecipTypeData : ""
  //   }): ${chanceOfPrecipitationData}%`
  // );

  const chanceOfPrecipitation = createTextElement(
    "p",
    "chance-of-precipitation",
    `Chance of Precipitation: ${chanceOfPrecipitationData}%`
  );

  // let precipType = "";
  // if (currentPrecipTypeData) {
  //   precipType = currentPrecipTypeData.length > 0 ? currentPrecipTypeData[0] : "";
  // }


  // const chanceOfPrecipitation = createTextElement(
  //   "p",
  //   "chance-of-precipitation",
  //   `Chance of Precipitation: ${
  //     precipType ? precipType.charAt(0).toUpperCase() + precipType.slice(1) : ""
  //   } ${chanceOfPrecipitationData}%`
  // );


  // const br2 = createBreakElement("br");

// let precipContent = "";

// if (currentPrecipTypeData && currentPrecipInchesData) {
// } else if (currentPrecipTypeData && currentSnowInchesData) {
//   precipContent = `${currentPrecipTypeData}: ${currentSnowInchesData} inches`
// }

  // const currentPrecipType = createTextElement(
  //   "p",
  //   "current-precip-type",
  //   // `${currentPrecipTypeData ? currentPrecipTypeData : ""}: ${currentPrecipInches ? currentPrecipInches : ""}`
  //   precipContent
  // );

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


  // dataContent.append(

  //   weatherContent);

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
    currentLastUpdate,
    currentConditionsText,
    currentWeatherTextImgCont,
    currentUVIndex,
    chanceOfPrecipitation,
    currentWindInfo
    // currentPrecipType,
    // currentUVIndex,
    // br2,
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
    // currentUVIndex,
  );

  // if (currentPrecipTypeData > 0) {
  //   weatherContent.append(currentPrecipType);
  // }
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
