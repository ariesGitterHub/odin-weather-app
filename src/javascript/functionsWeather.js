import { format, parse } from "date-fns";
import clearDay from "../assets/clear-day.svg";
import clearNight from "../assets/clear-night.svg";
import cloudy from "../assets/cloudy.svg";
import fog from "../assets/fog.svg";
import hail from "../assets/hail.svg";
import partlyCloudyDay from "../assets/partly-cloudy-day.svg";
import partlyCloudyNight from "../assets/partly-cloudy-night.svg";
// import rainSnowShowersDay from "../assets/rain-snow-showers-day.svg";
// import rainSnowShowersNight from "../assets/rain-snow-showers-night.svg";
import rainSnow from "../assets/rain-snow.svg";
import rain from "../assets/rain.svg";
// import showersDay from "../assets/showers-day.svg";
// import showersNight from "../assets/showers-night.svg";
import sleet from "../assets/sleet.svg";
// import snowShowersDay from "../assets/snow-showers-day.svg";
// import snowShowersNight from "../assets/snow-showers-night.svg";
import snow from "../assets/snow.svg";
import thunderRain from "../assets/thunder-rain.svg";
// import thunderShowersDay from "../assets/thunder-showers-day.svg";
// import thunderShowersNight from "../assets/thunder-showers-night.svg";
import thunder from "../assets/thunder.svg";
import wind from "../assets/wind.svg";

import moon1New from "../assets/moon1-new.svg";
import moon2WaxCre from "../assets/moon2-waxing-crescent.svg";
import moon3FirQua from "../assets/moon3-first-quarter.svg";
import moon4WaxGib from "../assets/moon4-waxing-gibbous.svg";
import moon5Full from "../assets/moon5-full.svg";
import moon6WanGib from "../assets/moon6-waning-gibbous.svg";
import moon7LasQua from "../assets/moon7-last-quarter.svg";
import moon8WanCre from "../assets/moon8-waning-crescent.svg";

// CONVERT TO C FROM F
export function convertToCelsius(temp) {
  const celsius = Math.round((((temp - 32) * 5) / 9) * 10) / 10;
  return celsius;
}

// CONVERT TO F FROM C
export function convertToFahrenheit(temp) {
  const celsius = Math.round(((temp * 9) / 5 + 32) * 10) / 10;
  return celsius;
}

export function styleDayNight(data) {
  const parseLastUpdateLocalTime = format(
    parse(data.currentConditions.datetime, "HH:mm:ss", new Date()),
    "HH:mm:ss a"
  );

  const parseSunrise = format(
    parse(data.currentConditions.sunrise, "HH:mm:ss", new Date()),
    "HH:mm:ss a"
  );

  const parseSunset = format(
    parse(data.currentConditions.sunset, "HH:mm:ss", new Date()),
    "HH:mm:ss a"
  );

  // const locationContent = document.querySelector("#location-content")
  const weatherContent = document.querySelector("#weather-content");
  const conditionsText = document.querySelector("#conditions-text");
  const lastUpdate = document.querySelector("#last-update");
  // const weatherCont2Divs = document.querySelectorAll(".invert");

  if (
    parseLastUpdateLocalTime > parseSunrise &&
    parseLastUpdateLocalTime < parseSunset
  ) {
    // locationContent.style.backgroundColor = "var(--black)";
    // locationContent.style.color = "var(--white)";
    weatherContent.style.background =
      "var(--day-time)";
    // weatherContent.style.border = "1px solid var(--black)";
    conditionsText.style.color= "var(--black)";
    lastUpdate.style.color = "var(--black)";

    // weatherCont2Divs.forEach((element) => {
      // element.style.backgroundColor = "var(--black)";
      // element.style.color = "var(--white)";
      // element.style.border = "0.125rem solid var(--black)";
      // element.style.outline = "1px solid var(--white)";
    // });

  } else if (
    parseLastUpdateLocalTime < parseSunrise ||
    parseLastUpdateLocalTime > parseSunset
  ) {
    // locationContent.style.backgroundColor = "var(--white)";
    // locationContent.style.color = "var(--black)";
    weatherContent.style.background =
      "var(--night-time)";
    // weatherContent.style.border = "1px solid var(--white)";
    conditionsText.style.color = "var(--white)";
    lastUpdate.style.color = "var(--white)";
    // weatherCont2Divs.forEach((element) => {
      // element.style.backgroundColor = "var(--white)";
      // element.style.color = "var(--black)";
      // element.style.border = "0.125rem solid var(--white)";
      // element.style.outline = "1px solid var(--black)";
    // });

  }
}

export function getMoonPhase(data) {
  const moonRatio = data.currentConditions.moonphase;
  let moonSrc;
  let moonPhase;
  console.log(`Moon Phase value: ${moonRatio}`);

  if (moonRatio === 0) {
    moonSrc = moon1New;
    moonPhase = "New Moon";
  } else if (moonRatio > 0 && moonRatio < 0.25) {
    moonSrc = moon2WaxCre;
    moonPhase = "Waxing Crescent";
  } else if (moonRatio === 0.25) {
    moonSrc = moon3FirQua;
    moonPhase = "First Quarter";
  } else if (moonRatio > 0.25 && moonRatio < 0.5) {
    moonSrc = moon4WaxGib;
    moonPhase = "Waxing Gibbous";
  } else if (moonRatio === 0.5) {
    moonSrc = moon5Full;
    moonPhase = "Full Moon";
  } else if (moonRatio > 0.5 && moonRatio < 0.75) {
    moonSrc = moon6WanGib;
    moonPhase = "Waning Gibbous";
  } else if (moonRatio === 0.75) {
    moonSrc = moon7LasQua;
    moonPhase = "Last Quarter";
  } else if (moonRatio > 0.75 && moonRatio < 1) {
    moonSrc = moon8WanCre;
    moonPhase = "Waning Crescent";
  } else if (moonRatio === 1) {
    moonSrc = moon1New;
    moonPhase = "New Moon";
  } else {
    return "Invalid Value";
  }

  return { moonSrc, moonPhase };
}

export function getWeatherIconSRC(data) {
  switch (data) {
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
      // return rainSnowShowers
      return rainSnow;
    case "rain-snow-showers-night":
      // return rainSnowShowersNight;
      return rainSnow;  
    case "rain-snow":
      return rainSnow;
    case "rain":
      return rain;
    case "showers-day":
      // return showersDay;
      return rain;
    case "showers-night":
      // return showersNight;
      return rain;
    case "sleet":
      return sleet;
    case "snow-showers-day":
      // return snowShowersDay;
      return snow;
    case "snow-showers-night":
      // return snowShowersNight;
      return snow;
    case "snow":
      return snow;
    case "thunder-rain":
      return thunderRain;
    case "thunder-showers-day":
      // return thunderShowersDay;
      return thunderRain;
    case "thunder-showers-night":
      // return thunderShowersNight;
      return thunderRain;
    case "thunder":
      return thunder;
    case "wind":
      return wind;
    default:
      return null;
  }
}

export function getWeatherIconBkgdColor(data) {
  let imgBkgdColor = "";

  switch (data.currentConditions.icon) {
    case "clear-day":
    case "partly-cloudy-day":
      imgBkgdColor = "var(--day-sky)";
      break;
    case "clear-night":
    case "partly-cloudy-night":
      imgBkgdColor = "var(--night-sky)";
      break;
    case "cloudy":
    case "fog":
    case "hail":
    case "rain":
    case "sleet":
    case "snow":
    case "thunder":
    case "wind":
      imgBkgdColor = "var(--overcast-sky)";
      break;
    case "rain-snow-showers-day":
    case "showers-day":
    case "snow-showers-day":
    case "thunder-showers-day":
      imgBkgdColor = "var(--day-overcast-sky)";
      break;
    case "rain-snow-showers-night":
    case "showers-night":
    case "snow-showers-night":
    case "thunder-showers-night":
      imgBkgdColor = "var(--night-overcast-sky)";
      break;
    default:
      imgBkgdColor = "";
      break;
  }

  return imgBkgdColor;
}

export function getWindDirection(data) {
  const windDegrees = data.currentConditions.winddir;
  let windDesc;
  if (windDegrees >= 348.75 || windDegrees < 11.25) windDesc = "N";
  else if (windDegrees >= 11.25 && windDegrees < 33.75) windDesc = "NNE";
  else if (windDegrees >= 33.75 && windDegrees < 56.25) windDesc = "NE";
  else if (windDegrees >= 56.25 && windDegrees < 78.75) windDesc = "ENE";
  else if (windDegrees >= 78.75 && windDegrees < 101.25) windDesc = "E";
  else if (windDegrees >= 101.25 && windDegrees < 123.75) windDesc = "ESE";
  else if (windDegrees >= 123.75 && windDegrees < 146.25) windDesc = "SE";
  else if (windDegrees >= 146.25 && windDegrees < 168.75) windDesc = "SSE";
  else if (windDegrees >= 168.75 && windDegrees < 191.25) windDesc = "S";
  else if (windDegrees >= 191.25 && windDegrees < 213.75) windDesc = "SSW";
  else if (windDegrees >= 213.75 && windDegrees < 236.25) windDesc = "SW";
  else if (windDegrees >= 236.25 && windDegrees < 258.75) windDesc = "WSW";
  else if (windDegrees >= 258.75 && windDegrees < 281.25) windDesc = "W";
  else if (windDegrees >= 281.25 && windDegrees < 303.75) windDesc = "WNW";
  else if (windDegrees >= 303.75 && windDegrees < 326.25) windDesc = "NW";
  else if (windDegrees >= 326.25 && windDegrees < 348.75) windDesc = "NNW";
  else windDesc = "Unknown Wind Direction";

  return windDesc;
}

export function getUVIndexValue(data) {
  const uvIndexData = data.currentConditions.uvindex;
  let uvWarning;
  if (uvIndexData >= 0 && uvIndexData <= 2)
    uvWarning = `${uvIndexData} (low)`;
  else if (uvIndexData >= 3 && uvIndexData <= 5)
    uvWarning = `${uvIndexData} (moderate)`;
  else if (uvIndexData >= 6 && uvIndexData <= 7)
    uvWarning = `${uvIndexData} (high)`;
  else if (uvIndexData >= 8 && uvIndexData <= 10)
    uvWarning = `${uvIndexData} (very high)`;
  else if (uvIndexData >= 11) uvWarning = `${uvIndexData} (extreme)`;
  else uvWarning = "Unknown UV Index";

  return uvWarning;
}

export function getTempColor(data) {
  const feelsLikeData = data.currentConditions.feelslike;
  let tempColor;
  if (feelsLikeData < 32) tempColor = "var(--very-cold)";
  else if (feelsLikeData >= 32 && feelsLikeData < 50)
    tempColor = "var(--cold)";
  else if (feelsLikeData >= 50 && feelsLikeData < 68)
    tempColor = "var(--mild)";
  else if (feelsLikeData >= 68 && feelsLikeData < 86)
    tempColor = "var(--warm)";
  else if (feelsLikeData >= 86 && feelsLikeData < 104)
    tempColor = "var(--hot)";
  else if (feelsLikeData >= 104) tempColor = "var(--very-hot)";
  else tempColor = "Unknown Temperature";

  return tempColor;
}

export function initializeFC(data) {
  const tempScaleBtn = document.querySelector("#temp-scale-btn");
  const tempData = data.currentConditions.temp;
  const feelsLikeData = data.currentConditions.feelslike;
  const dewPointData = data.currentConditions.dew;

  const dewPointText = document.querySelector("#dew-point-text");
  const tempText = document.querySelector("#temp-text");
  const feelsLikeText = document.querySelector("#feels-like-text");

  if (tempScaleBtn.value === "C") {
    dewPointText.textContent = `${convertToCelsius(dewPointData)}°C`;
    tempText.textContent = `${convertToCelsius(tempData)}°C`;
    feelsLikeText.textContent = `(Feels like ${convertToCelsius(feelsLikeData)}°C)`;
  } else {
    dewPointText.textContent = `${dewPointData}°F`;
    tempText.textContent = `${tempData}°F`;
    feelsLikeText.textContent = `(Feels like ${feelsLikeData}°F)`;
  }
}

  
  // if (tempScaleBtn.value === "C") {
  //   dewPointText.textContent = `${convertToCelsius(dewPointData)}°C`;      
  //   tempText.textContent = `${convertToCelsius(tempData)}°C`;
  //   feelsLikeText.textContent = `(Feels like ${convertToCelsius(feelsLikeData)}°C)`;
  //   }
  // } else {
  //   dewPointText.textContent = `${dewPointData}°F`;
  //   tempText.textContent = `${tempData}°F`;
  //   feelsLikeText.textContent = `(Feels like ${feelsLikeData}°F)`;
  // }

