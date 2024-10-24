import { format, parse } from "date-fns";
import svgHumidity from "../assets/humidity.svg";
import svgDewPoint from "../assets/dew-point.svg";
import svgUVIndex from "../assets/uv-index.svg";
import svgCloudCover from "../assets/cloud-cover.svg";
import svgSunrise from "../assets/sunrise.svg";
import svgSunset from "../assets/sunset.svg";
import svgPrecipProb from "../assets/chance-of-precipitation.svg";
import svgWindInfo from "../assets/wind-sm.svg";

import {
  createDivElement,
  createImgElement,
  createTextElement,
  createWeatherElements,
} from "./functionsBasic.js";

import {
  convertToCelsius,
  styleTileDayNight,
  getWeatherIconSRC,
  getWeatherIconBkgdColor,
  getTempColor,
  getWindDirection,
  getUVIndexValue,
  getMoonPhase,
} from "./functionsWeather.js";

export function createWeatherView(data) {
  const dataContent = document.querySelector("#data-content");

  const weatherContent = createDivElement("weather-content", "");

  const tempScaleBtn = document.querySelector("#temp-scale-btn");
  const noWeatherDataAvailable = "No weather data available.";

  const conditionsData = data.currentConditions.conditions;
  const tempData = data.currentConditions.temp;
  const feelsLikeData = data.currentConditions.feelslike;
  const iconData = data.currentConditions.icon;

  const humidityData = data.currentConditions.humidity;
  const dewPointData = data.currentConditions.dew;
  const precipProbData = data.currentConditions.precipprob;

  const windSpeedMPHData = data.currentConditions.windspeed;
  const windDirectionData = data.currentConditions.winddir;
  const windGustMPHData = data.currentConditions.windgust;
  const cloudCoverData = data.currentConditions.cloudcover;

  const uvIndexData = data.currentConditions.uvindex;

  const moonPhaseData = data.currentConditions.moonphase;

  if (!data) {
    console.error(noWeatherDataAvailable);
    return;
  }

  const parseLastUpdateLocalTime = format(
    parse(data.currentConditions.datetime, "HH:mm:ss", new Date()),
    "h:mma"
  );

  const parseSunrise = format(
    parse(data.currentConditions.sunrise, "HH:mm:ss", new Date()),
    "h:mm:ssa"
  );

  const parseSunset = format(
    parse(data.currentConditions.sunset, "HH:mm:ss", new Date()),
    "h:mm:ssa"
  );

  const conditionsText = createTextElement(
    "p",
    "conditions-text",
    `Currently: ${conditionsData}`,
    ""
  );

  const lastUpdate = createTextElement(
    "p",
    "last-update",
    `(Updated at ${parseLastUpdateLocalTime} location time.)`,
    ""
  );

  const weatherCont1 = createDivElement("weather-cont1", "");

  const weatherTempCont = createDivElement("weather-temp-cont", "");

  const tempText = createTextElement("p", "temp-text", "", "");
  const feelsLikeText = createTextElement("p", "feels-like-text", "", "");

  weatherTempCont.style.backgroundColor = getTempColor(feelsLikeData);

  const weatherIconCont = createDivElement("weather-icon-cont", "");

  const weatherIconImg = createImgElement(
    "weather-icon-img",
    getWeatherIconSRC(iconData),
    "Weather icon based on current conditions.",
    ""
  );

  weatherIconCont.style.backgroundColor = getWeatherIconBkgdColor(iconData);

  const weatherMoistureCont = createDivElement("weather-moisture-cont", "");

  const {
    targetDiv: humidityDiv,
    targetImg: humidityImg,
    targetText: humidityText,
  } = createWeatherElements(
    "humidity",
    svgHumidity,
    `${humidityData}%`,
    "current"
  );

  const {
    targetDiv: dewPointDiv,
    targetImg: dewPointImg,
    targetText: dewPointText,
  } = createWeatherElements("dew-point", svgDewPoint, "", "current");

  const {
    targetDiv: precipProbDiv,
    targetImg: precipProbImg,
    targetText: precipProbText,
  } = createWeatherElements(
    "precip-prob",
    svgPrecipProb,
    `${precipProbData}%`,
    "current"
  );

  const weatherCont2 = createDivElement("weather-cont2", "");

  let windInfo = "";

  if (windSpeedMPHData && windDirectionData && windGustMPHData) {
    windInfo = `${windSpeedMPHData}mph ${getWindDirection(
      windDirectionData
    )} (gusts: ${windGustMPHData}mph)`;
  } else if (windSpeedMPHData && windDirectionData) {
    windInfo = `${windSpeedMPHData}mph ${getWindDirection(windDirectionData)}`;
  } else {
    windInfo = `${windSpeedMPHData}mph`;
  }

  const {
    targetDiv: windInfoDiv,
    targetImg: windInfoImg,
    targetText: windInfoText,
  } = createWeatherElements("wind-info", svgWindInfo, windInfo, "current");

  const {
    targetDiv: uvIndexDiv,
    targetImg: uvIndexImg,
    targetText: uvIndexText,
  } = createWeatherElements(
    "uv-index",
    svgUVIndex,
    `${getUVIndexValue(uvIndexData)}`,
    "current"
  );

  const {
    targetDiv: cloudCoverDiv,
    targetImg: cloudCoverImg,
    targetText: cloudCoverText,
  } = createWeatherElements(
    "cloud-cover",
    svgCloudCover,
    `${cloudCoverData}%`,
    "current"
  );

  const {
    targetDiv: sunriseDiv,
    targetImg: sunriseImg,
    targetText: sunriseText,
  } = createWeatherElements("sunrise", svgSunrise, parseSunrise, "current");

  const {
    targetDiv: sunsetDiv,
    targetImg: sunsetImg,
    targetText: sunsetText,
  } = createWeatherElements("sunset", svgSunset, parseSunset, "current");

  const {
    targetDiv: moonPhaseDiv,
    targetImg: moonPhaseImg,
    targetText: moonPhaseText,
  } = createWeatherElements(
    "moon-phase",
    getMoonPhase(moonPhaseData).moonSrc,
    getMoonPhase(moonPhaseData).moonPhase,
    "current"
  );

  // function initializeCurrentFC() {
  //   if (tempScaleBtn.value === "C") {
  //     dewPointText.textContent = `${convertToCelsius(dewPointData)}°C`;
  //     if (tempData !== feelsLikeData) {
  //       tempText.textContent = `${convertToCelsius(tempData)}°C`;
  //       feelsLikeText.textContent = `(Feels like ${convertToCelsius(
  //         feelsLikeData
  //       )}°C)`;
  //     } else {
  //       tempText.textContent = `${convertToCelsius(tempData)}°C`;
  //     }
  //   } else {
  //     dewPointText.textContent = `${dewPointData}°F`;
  //     if (tempData !== feelsLikeData) {
  //       tempText.textContent = `${tempData}°F`;
  //       feelsLikeText.textContent = `(Feels like ${feelsLikeData}°F)`;
  //     } else {
  //       tempText.textContent = `${tempData}°F`;
  //     }
  //   }
  // }

  function initializeCurrentFC() {
    dewPointText.dataset.dew = dewPointData;
    tempText.dataset.temp = tempData;
    feelsLikeText.dataset.feelslike = feelsLikeData;

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

  initializeCurrentFC();

  dataContent.append(weatherContent);
  weatherContent.append(conditionsText, lastUpdate, weatherCont1, weatherCont2);

  weatherCont1.append(weatherIconCont, weatherTempCont);

  if (tempData !== feelsLikeData) {
    weatherTempCont.append(tempText, feelsLikeText);
  } else {
    weatherTempCont.append(tempText);
  }

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

  weatherMoistureCont.append(humidityDiv, dewPointDiv, precipProbDiv);

  humidityDiv.append(humidityImg, humidityText);
  cloudCoverDiv.append(cloudCoverImg, cloudCoverText);
  dewPointDiv.append(dewPointImg, dewPointText);
  windInfoDiv.append(windInfoImg, windInfoText);
  uvIndexDiv.append(uvIndexImg, uvIndexText);
  sunsetDiv.append(sunsetImg, sunsetText);
  sunriseDiv.append(sunriseImg, sunriseText);
  moonPhaseDiv.append(moonPhaseImg, moonPhaseText);
  precipProbDiv.append(precipProbImg, precipProbText);

  styleTileDayNight(data);
}

// export function updateCurrentFC(data) {
//   const tempData = data.currentConditions.temp;
//   const feelsLikeData = data.currentConditions.feelslike;
//   const dewPointData = data.currentConditions.dew;

//   const tempText = document.querySelector("#temp-text");
//   const feelsLikeText = document.querySelector(
//     "#feels-like-text"
//   );

//   const dewPointText = document.querySelector("#dew-point-text");

//   const tempScaleBtn = document.querySelector("#temp-scale-btn");

//   if (tempScaleBtn.value === "C") {
//     dewPointText.textContent = `${convertToCelsius(dewPointData)}°C`;
//     if (tempData !== feelsLikeData) {
//       tempText.textContent = `${convertToCelsius(tempData)}°C`;
//       feelsLikeText.textContent = `(Feels like ${convertToCelsius(
//         feelsLikeData
//       )}°C)`;
//     } else {
//       tempText.textContent = `${convertToCelsius(tempData)}°C`;
//     }
//   } else {
//     dewPointText.textContent = `${dewPointData}°F`;
//     if (tempData !== feelsLikeData) {
//       tempText.textContent = `${tempData}°F`;
//       feelsLikeText.textContent = `(Feels like ${feelsLikeData}°F)`;
//     } else {
//       tempText.textContent = `${tempData}°F`;
//     }
//   }
// }

export function updateCurrentFC() {
  const dewPointText = document.querySelector("#dew-point-text");
  const tempText = document.querySelector("#temp-text");
  const feelsLikeText = document.querySelector("#feels-like-text");

  const tempScaleBtn = document.querySelector("#temp-scale-btn");

    if (tempText && tempScaleBtn.value === "C") { // Using tempText, I just need one of the three for all to be true
      dewPointText.textContent = `${convertToCelsius(
        dewPointText.dataset.dew
      )}°C`;
      if (feelsLikeText) {
        tempText.textContent = `${convertToCelsius(tempText.dataset.temp)}°C`;
        feelsLikeText.textContent = `(Feels like ${convertToCelsius(
          feelsLikeText.dataset.feelslike
        )}°C)`;
      } else {
        tempText.textContent = `${convertToCelsius(tempText.dataset.temp)}°C`;
      }
    } else if (tempText && tempScaleBtn.value === "F") {
      dewPointText.textContent = `${dewPointText.dataset.dew}°F`;
      if (feelsLikeText) {
        tempText.textContent = `${tempText.dataset.temp}°F`;
        feelsLikeText.textContent = `(Feels like ${feelsLikeText.dataset.feelslike}°F)`;
      } else {
        tempText.textContent = `${tempText.dataset.temp}°F`;
      }
    } else {
      console.log("No location has been selected yet.");
    }
}
