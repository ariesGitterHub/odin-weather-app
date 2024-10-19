import { format, parse } from "date-fns";
import svgHumidity from "../assets/humidity.svg";
import svgDewPoint from "../assets/dew-point.svg";
import svgUVIndex from "../assets/uv-index.svg";
import svgCloudCover from "../assets/cloud-cover.svg";
import svgSunrise from "../assets/sunrise.svg";
import svgSunset from "../assets/sunset.svg";
import svgChanceOfPrecipitation from "../assets/chance-of-precipitation.svg";
import svgWindInfo from "../assets/wind-sm.svg";

import {
  createDivElement,
  createImgElement,
  createSoloTextElement,
  createDataCurrentElements,
} from "./functionsBasic.js";

import {
  convertToCelsius,
  styleDayNight,
  getWeatherIconSRC,
  getWeatherIconBkgdColor,
  getTempColor,
  getWindDirection,
  getUVIndexValue,
  getMoonPhase,
  // initializeFC,
} from "./functionsWeather.js";

export function createWeatherView(data) {
  const dataContent = document.querySelector("#data-content");

  const weatherContent = createDivElement("weather-content");

  const tempScaleBtn = document.querySelector("#temp-scale-btn");
  const noWeatherDataAvailable = "No weather data available.";

  const conditionsData = data.currentConditions.conditions;
  const iconData = data.currentConditions.icon;
  const tempData = data.currentConditions.temp;
  const feelsLikeData = data.currentConditions.feelslike;
  const humidityData = data.currentConditions.humidity;
  const dewPointData = data.currentConditions.dew;
  const chanceOfPrecipitationData = data.currentConditions.precipprob;
  const cloudCoverData = data.currentConditions.cloudcover;

  const windSpeedMPHData = data.currentConditions.windspeed;
  const windDirectionData = data.currentConditions.winddir;
  const windGustMPHData = data.currentConditions.windgust;

  if (!data) {
    console.error(noWeatherDataAvailable);
    return;
  }

  const parseLastUpdateLocalTime = format(
    parse(data.currentConditions.datetime, "HH:mm:ss", new Date()),
    "hh:mm:ssa"
  );

  const parseSunrise = format(
    parse(data.currentConditions.sunrise, "HH:mm:ss", new Date()),
    "hh:mm:ssa"
  );

  const parseSunset = format(
    parse(data.currentConditions.sunset, "HH:mm:ss", new Date()),
    "hh:mm:ssa"
  );

  const conditionsText = createSoloTextElement(
    "p",
    "conditions-text",
    conditionsData
  );

  const lastUpdate = createSoloTextElement(
    "p",
    "last-update",
    `(Updated at ${parseLastUpdateLocalTime} location time.)`
  );

  const weatherCont1 = createDivElement("weather-cont1");

  const weatherTempCont = createDivElement("weather-temp-cont");

  const tempText = createSoloTextElement("p", "temp-text", "");
  const feelsLikeText = createSoloTextElement(
    "p",
    "feels-like-text",
    ""
  );

  weatherTempCont.style.backgroundColor = getTempColor(data);

  const weatherIconCont = createDivElement("weather-icon-cont");

  const weatherIconImg = createImgElement(
    "weather-icon-img",
    getWeatherIconSRC(iconData),
    "Weather icon based on current conditions.",
    ""
  );

  weatherIconCont.style.backgroundColor = getWeatherIconBkgdColor(data);

  const weatherMoistureCont = createDivElement("weather-moisture-cont");

  const {
    targetDiv: humidityDiv,
    targetImg: humidityImg,
    targetText: humidityText,
  } = createDataCurrentElements("humidity", svgHumidity, `${humidityData}%`);

  const {
    targetDiv: dewPointDiv,
    targetImg: dewPointImg,
    targetText: dewPointText,
  } = createDataCurrentElements("dew-point", svgDewPoint, "");

  const {
    targetDiv: chanceOfPrecipitationDiv,
    targetImg: chanceOfPrecipitationImg,
    targetText: chanceOfPrecipitationText,
  } = createDataCurrentElements(
    "chance-of-precipitation",
    svgChanceOfPrecipitation,
    `${chanceOfPrecipitationData}%`
  );

  if (tempScaleBtn.value === "C") {
    dewPointText.textContent = `${convertToCelsius(dewPointData)}°C`;
    if (tempData !== feelsLikeData) {
      tempText.textContent = `${convertToCelsius(tempData)}°C`;
      feelsLikeText.textContent = `(Feels like ${convertToCelsius(
        feelsLikeData
      )}°C)`;
    } else {
      tempText.textContent = `${convertToCelsius(tempData)}°C`;
    }
  } else {
    dewPointText.textContent = `${dewPointData}°F`;
    if (tempData !== feelsLikeData) {
      tempText.textContent = `${tempData}°F`;
      feelsLikeText.textContent = `(Feels like ${feelsLikeData}°F)`;
    } else {
      tempText.textContent = `${tempData}°F`;
    }
  }

  const weatherCont2 = createDivElement("weather-cont2");

  let windInfo = "";

  if (windSpeedMPHData && windDirectionData && windGustMPHData) {
    windInfo = `${windSpeedMPHData}mph ${getWindDirection(
      data
    )} (gusts: ${windGustMPHData}mph)`;
  } else if (windSpeedMPHData && windDirectionData) {
    windInfo = `${windSpeedMPHData}mph ${getWindDirection(data)}`;
  } else {
    windInfo = `${windSpeedMPHData}mph`;
  }

  const {
    targetDiv: windInfoDiv,
    targetImg: windInfoImg,
    targetText: windInfoText,
  } = createDataCurrentElements("wind-info", svgWindInfo, windInfo);

  const {
    targetDiv: uvIndexDiv,
    targetImg: uvIndexImg,
    targetText: uvIndexText,
  } = createDataCurrentElements(
    "uv-index",
    svgUVIndex,
    `${getUVIndexValue(data)}`
  );

  const {
    targetDiv: cloudCoverDiv,
    targetImg: cloudCoverImg,
    targetText: cloudCoverText,
  } = createDataCurrentElements(
    "cloud-cover",
    svgCloudCover,
    `${cloudCoverData}%`
  );

  const {
    targetDiv: sunriseDiv,
    targetImg: sunriseImg,
    targetText: sunriseText,
  } = createDataCurrentElements("sunrise", svgSunrise, parseSunrise);

  const {
    targetDiv: sunsetDiv,
    targetImg: sunsetImg,
    targetText: sunsetText,
  } = createDataCurrentElements("sunset", svgSunset, parseSunset);

  const {
    targetDiv: moonPhaseDiv,
    targetImg: moonPhaseImg,
    targetText: moonPhaseText,
  } = createDataCurrentElements(
    "moon-phase",
    getMoonPhase(data).moonSrc,
    getMoonPhase(data).moonPhase
  );

  // initializeFC(data);

  dataContent.append(weatherContent);
  weatherContent.append(conditionsText, lastUpdate, weatherCont1, weatherCont2);

  weatherCont1.append(weatherTempCont, weatherIconCont);

  weatherTempCont.append(tempText, feelsLikeText);

  weatherIconCont.append(weatherIconImg);

  weatherCont2.append(
    weatherMoistureCont,
    windInfoDiv,
    cloudCoverDiv,
    uvIndexDiv,
    sunriseDiv,
    sunsetDiv,
    moonPhaseDiv
  );

  weatherMoistureCont.append(
    humidityDiv,
    dewPointDiv,
    chanceOfPrecipitationDiv
  );

  humidityDiv.append(humidityImg, humidityText);
  cloudCoverDiv.append(cloudCoverImg, cloudCoverText);
  dewPointDiv.append(dewPointImg, dewPointText);
  windInfoDiv.append(windInfoImg, windInfoText);
  uvIndexDiv.append(uvIndexImg, uvIndexText);
  sunsetDiv.append(sunsetImg, sunsetText);
  sunriseDiv.append(sunriseImg, sunriseText);
  moonPhaseDiv.append(moonPhaseImg, moonPhaseText);
  chanceOfPrecipitationDiv.append(
    chanceOfPrecipitationImg,
    chanceOfPrecipitationText
  );

  styleDayNight(data);
}

export function updateDataFC(data) {
  const tempData = data.currentConditions.temp;
  const feelsLikeData = data.currentConditions.feelslike;
  const dewPointData = data.currentConditions.dew;

  const tempText = document.querySelector("#temp-text");
  const feelsLikeText = document.querySelector(
    "#feels-like-text"
  );

  const dewPointText = document.querySelector("#dew-point-text");

  const tempScaleBtn = document.querySelector("#temp-scale-btn");

  if (tempScaleBtn.value === "C") {
    dewPointText.textContent = `${convertToCelsius(dewPointData)}°C`;
    if (tempData !== feelsLikeData) {
      tempText.textContent = `${convertToCelsius(tempData)}°C`;
      feelsLikeText.textContent = `(Feels like ${convertToCelsius(
        feelsLikeData
      )}°C)`;
    } else {
      tempText.textContent = `${convertToCelsius(tempData)}°C`;
    }
  } else {
    dewPointText.textContent = `${dewPointData}°F`;
    if (tempData !== feelsLikeData) {
      tempText.textContent = `${tempData}°F`;
      feelsLikeText.textContent = `(Feels like ${feelsLikeData}°F)`;
    } else {
      tempText.textContent = `${tempData}°F`;
    }
  }
}
