import { format, parse } from "date-fns";
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

  const locationContent = document.querySelector("#location-content");
  const weatherContent = document.querySelector("#weather-content");
  const currentWeatherIconImg = document.querySelector(
    "#current-weather-icon-img"
  );

  if (
    parseLastUpdateLocalTime > parseSunrise &&
    parseLastUpdateLocalTime < parseSunset
  ) {
    locationContent.style.backgroundImage =
      "linear-gradient(to top left, var(--day), var(--dawn))";
    locationContent.style.color = "var(--night)";
    weatherContent.style.backgroundImage =
      "linear-gradient(to bottom right, var(--day), var(--dawn))";
    weatherContent.style.color = "var(--night)";
    currentWeatherIconImg.style.border = "1px dashed var(--night)";
  } else if (
    parseLastUpdateLocalTime < parseSunrise ||
    parseLastUpdateLocalTime > parseSunset
  ) {
    locationContent.style.backgroundImage =
      "linear-gradient(to top left, var(--dusk), var(--night))";
    locationContent.style.color = "var(--day)";
    weatherContent.style.backgroundImage =
      "linear-gradient(to bottom right, var(--dusk), var(--night))";
    weatherContent.style.color = "var(--day)";
    currentWeatherIconImg.style.border = "1px dashed var(--day)";
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
    return "Invalid value";
  }

  return { moonSrc, moonPhase };
}

export function getWeatherIconSRC(data) {
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