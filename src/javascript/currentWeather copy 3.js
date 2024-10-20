import { format, parse } from "date-fns";
// import svgTemperature from "../assets/temperature.svg";
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
  // createRoundBtnElement,
  createImgElement,
  createSoloTextElement,
  // createText2Element,
  createDataElements,
} from "./functionsBasic.js";
import {
  convertToCelsius,
  styleDayNight,
  getWeatherIconSRC,
  getWeatherIconBkgdColor,
  getTemperatureColor,
  getWindDirection,
  getUVIndexValue,
  getMoonPhase,
} from "./functionsWeather.js";

export function createWeatherView(data) {
  const dataContent = document.querySelector("#data-content");

  const weatherContent = createDivElement("weather-content");

  const tempScaleBtn = document.querySelector("#temp-scale-btn");
  const noWeatherDataAvailable = "No weather data available.";

  const conditionsData = data.currentConditions.conditions;
  const temperatureData = data.currentConditions.temp;
  const feelsLikeTemperatureData = data.currentConditions.feelslike;
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

  // const conditionsTitle = createTextElement(
  //   "p",
  //   "conditions-title",
  //   "Current Conditions"
  // );

  // weatherContent.style.backgroundColor = getTempColorBkgd(data);

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

  // const weatherTempIconCont = createDivElement("weather-temp-icon-cont");

  const weatherTemperatureCont = createDivElement("weather-temperature-cont");
  // const temperatureDiv = createDivElement("temperature-div");
  // const temperatureImg = createImgElement(
  //   "temperature-img",
  //   svgTemperature,
  //   "Temperature Icon"
  // );
  const temperatureText = createSoloTextElement("p", "temperature-text", "");
  const feelsLikeTemperatureText = createSoloTextElement(
    "p",
    "feels-like-temperature-text",
    ""
  );

  // temperatureText.style.color = getTemperatureColor(data);
  // feelsLikeTemperatureText.color = getTemperatureColor(data);

  weatherTemperatureCont.style.backgroundColor = getTemperatureColor(data);

  const weatherIconCont = createDivElement("weather-icon-cont");

  const weatherIconImg = createImgElement(
    "weather-icon-img",
    getWeatherIconSRC(data),
    "Weather icon based on current conditions."
  );

  weatherIconCont.style.backgroundColor = getWeatherIconBkgdColor(data);

  const weatherMoistureCont = createDivElement("weather-moisture-cont");

  // const humidityDiv = createDivElement("humidity-div", "data-div");
  // const humidityImg = createImgElement(
  //   "humidity-img",
  //   svgHumidity,
  //   "Humidity Icon"
  // );
  // const humidityText = createTextElement(
  //   "p",
  //   "humidity-text",
  //   `${humidityData}%`
  // );

  // const { humidityDiv, humidityImg, humidityText } = createDataElements(
  //   "humidity",
  //   svgHumidity,
  //   humidityData
  // );

  const {
    targetDiv: humidityDiv,
    targetImg: humidityImg,
    targetText: humidityText,
  } = createDataElements("humidity", svgHumidity, `${humidityData}%`);

  const {
    targetDiv: dewPointDiv,
    targetImg: dewPointImg,
    targetText: dewPointText,
  } = createDataElements("dew-point", svgDewPoint, "");

  // const dewPointDiv = createDivElement("dew-point-div", "data-div");
  // const dewPointImg = createImgElement(
  //   "dew-point-img",
  //   svgDewPoint,
  //   "Dew Point Icon"
  // );
  // const dewPointText = createTextElement("p", "dew-point-text", "");

  const {
    targetDiv: chanceOfPrecipitationDiv,
    targetImg: chanceOfPrecipitationImg,
    targetText: chanceOfPrecipitationText,
  } = createDataElements(
    "chance-of-precipitation",
    svgChanceOfPrecipitation,
    `${chanceOfPrecipitationData}%`
  );

  // const chanceOfPrecipitationDiv = createDivElement(
  //   "chance-of-precipitation-div",
  //   "data-div"
  // );
  // const chanceOfPrecipitationImg = createImgElement(
  //   "chance-of-precipitation-img",
  //   svgChanceOfPrecipitation,
  //   "Chance of Precipitation Icon"
  // );
  // const chanceOfPrecipitationText = createTextElement(
  //   "p",
  //   "chance-of-precipitation-text",
  //   `${chanceOfPrecipitationData}%`
  // );

  if (tempScaleBtn.value === "C") {
    dewPointText.textContent = `${convertToCelsius(dewPointData)}°C`;
    if (temperatureData !== feelsLikeTemperatureData) {
      temperatureText.textContent = `${convertToCelsius(temperatureData)}°C`;
      feelsLikeTemperatureText.textContent = `(Feels like ${convertToCelsius(
        feelsLikeTemperatureData
      )}°C)`;
    } else {
      temperatureText.textContent = `${convertToCelsius(temperatureData)}°C`;
    }
  } else {
    dewPointText.textContent = `${dewPointData}°F`;
    if (temperatureData !== feelsLikeTemperatureData) {
      temperatureText.textContent = `${temperatureData}°F`;
      feelsLikeTemperatureText.textContent = `(Feels like ${feelsLikeTemperatureData}°F)`;
    } else {
      temperatureText.textContent = `${temperatureData}°F`;
    }
  }

  const weatherCont2 = createDivElement("weather-cont2");

  let windInfo = "";

  const {
    targetDiv: windInfoDiv,
    targetImg: windInfoImg,
    targetText: windInfoText,
  } = createDataElements("wind-info", svgWindInfo, windInfo);

  if (windSpeedMPHData && windDirectionData && windGustMPHData) {
    windInfo = `${windSpeedMPHData}mph ${getWindDirection(
      data
    )} (gusts: ${windGustMPHData}mph)`;
  } else if (windSpeedMPHData && windDirectionData) {
    windInfo = `${windSpeedMPHData}mph ${getWindDirection(data)}`;
  } else {
    windInfo = `${windSpeedMPHData}mph`;
  }

  // const windInfoDiv = createDivElement("wind-info-div", "data-div");

  // const windInfoImg = createImgElement("wind-info-img", "");
  // const windInfoText = createTextElement("p", "win-info-text", windInfo);

  // if (windInfo !== "") {
  //   windInfoImg.src = svgWindSm;
  //   windInfoImg.alt = "Wind Icon";
  //   windInfoDiv.append(windInfoImg, windInfoText);
  // } else if (windInfo === "") {
  //   windInfoImg.src = "";
  //   windInfoImg.alt = "";
  //   windInfoImg.style.border = "none";
  // }

  const {
    targetDiv: uvIndexDiv,
    targetImg: uvIndexImg,
    targetText: uvIndexText,
  } = createDataElements("uv-index", svgUVIndex, `${getUVIndexValue(data)}`);

  // const uvIndexDiv = createDivElement("uv-index-div", "data-div");
  // const uvIndexImg = createImgElement(
  //   "uv-index-img",
  //   svgUVIndex,
  //   "UV Index Icon"
  // );
  // const uvIndexText = createTextElement(
  //   "p",
  //   "uv-index-text",
  //   // `${uvIndexData} ${getUVIndexValue(data)}`
  //   `${getUVIndexValue(data)}`
  // );

  const {
    targetDiv: cloudCoverDiv,
    targetImg: cloudCoverImg,
    targetText: cloudCoverText,
  } = createDataElements("cloud-cover", svgCloudCover, `${cloudCoverData}%`);

  // const cloudCoverDiv = createDivElement("cloud-cover-div", "data-div");
  // const cloudCoverImg = createImgElement(
  //   "cloud-cover-img",
  //   svgCloudCover,
  //   "Cloud Cover Icon"
  // );
  // const cloudCoverText = createTextElement(
  //   "p",
  //   "cloud-cover-text",
  //   `${cloudCoverData}%`
  // );

  // const sunriseDiv = createDivElement("sunrise-div", "data-div");

  // const sunriseImg = createImgElement(
  //   "sunrise-img",
  //   svgSunrise,
  //   "Sunrise Icon"
  // );

  // const sunriseText = createTextElement("p", "sunrise-text", parseSunrise);

  const {
    targetDiv: sunriseDiv,
    targetImg: sunriseImg,
    targetText: sunriseText,
  } = createDataElements("sunrise", svgSunrise, parseSunrise);

  // const sunsetDiv = createDivElement("sunset-div", "data-div");

  // const sunsetImg = createImgElement("sunset-img", svgSunset, "Sunrise Icon");

  // const sunsetText = createTextElement("p", "sunset-text", parseSunset);

  const {
    targetDiv: sunsetDiv,
    targetImg: sunsetImg,
    targetText: sunsetText,
  } = createDataElements("sunset", svgSunset, parseSunset);

  // const moonPhaseDiv = createDivElement("moon-phase-div", "data-div");

  // const moonPhaseText = createTextElement(
  //   "p",
  //   "moon-phase-text",
  //   getMoonPhase(data).moonPhase
  // );
  // const moonPhaseImg = createImgElement(
  //   "moon-phase-img",
  //   getMoonPhase(data).moonSrc,
  //   "Current Moon Phase Icon"
  // );

  const {
    targetDiv: moonPhaseDiv,
    targetImg: moonPhaseImg,
    targetText: moonPhaseText,
  } = createDataElements(
    "moon-phase",
    getMoonPhase(data).moonSrc,
    getMoonPhase(data).moonPhase
  );

  dataContent.append(weatherContent);
  weatherContent.append(
    // conditionsTitle,
    conditionsText,
    lastUpdate,
    weatherCont1,
    // weatherBtnCont,
    weatherCont2
  );

  weatherCont1.append(
    weatherTemperatureCont,
    weatherIconCont
    // weatherTempIconCont,
    // weatherMoistureCont,
  );

  // weatherTempIconCont.append(
  //   weatherTemperatureCont,
  //   weatherIconCont,
  // );

  weatherTemperatureCont.append(
    // temperatureDiv,
    temperatureText,
    feelsLikeTemperatureText
  );

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

  //temperatureDiv.append(
  // temperatureImg,
  //  temperatureText
  //);

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
  const temperatureData = data.currentConditions.temp;
  const feelsLikeTemperatureData = data.currentConditions.feelslike;
  const dewPointData = data.currentConditions.dew;

  const temperatureText = document.querySelector("#temperature-text");
  const feelsLikeTemperatureText = document.querySelector(
    "#feels-like-temperature-text"
  );

  const dewPointText = document.querySelector("#dew-point-text");

  const tempScaleBtn = document.querySelector("#temp-scale-btn");

  if (tempScaleBtn.value === "C") {
    dewPointText.textContent = `${convertToCelsius(dewPointData)}°C`;
    if (temperatureData !== feelsLikeTemperatureData) {
      temperatureText.textContent = `${convertToCelsius(temperatureData)}°C`;
      feelsLikeTemperatureText.textContent = `(Feels like ${convertToCelsius(
        feelsLikeTemperatureData
      )}°C)`;
    } else {
      temperatureText.textContent = `${convertToCelsius(temperatureData)}°C`;
    }
  } else {
    dewPointText.textContent = `${dewPointData}°F`;
    if (temperatureData !== feelsLikeTemperatureData) {
      temperatureText.textContent = `${temperatureData}°F`;
      feelsLikeTemperatureText.textContent = `(Feels like ${feelsLikeTemperatureData}°F)`;
    } else {
      temperatureText.textContent = `${temperatureData}°F`;
    }
  }
}
