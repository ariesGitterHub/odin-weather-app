import { format, parse } from "date-fns";

import svgHumidity from "../assets/humidity.svg";
import svgDewPoint from "../assets/dew-point.svg";
import svgUVIndex from "../assets/uv-index.svg";
import svgCloudCover from "../assets/cloud-cover.svg";
import svgPrecipProb from "../assets/chance-of-precipitation.svg";
import svgWindInfo from "../assets/wind-sm.svg";

import {
  getTodayDate,
  getTomorrowDate,
  createDivElement,
  createImgElement,
  createTextElement,
  createWeatherElements,
  roundUpToNextHourNum,
} from "./functionsBasic.js";

import {
  getWeatherIconSRC,
  getWindDirection,
  getTempColor,
  getWeatherIconBkgdColor,
  getUVIndexValue,
  styleHoursDayNight,
  convertToCelsius,
} from "./functionsWeather.js";

export function createHoursView(data) {
  const tempScaleBtn = document.querySelector("#temp-scale-btn");

  const noWDataAvailable = "No data currently available.";
  const dataContent = document.querySelector("#data-content");

  // I need data from currentConditions (datetime which will be the lastUpdateTime locally), days( indexes 0 and 1, and datetime, which will be a date that I use below the hour), and hours (which has all the hourly data by the data, the bulk of my needs)

  function getHoursInfo() {
    if (!data) {
      console.error(noWDataAvailable);
      return;
    }

    const numberOfHours = 24; // The number of hours you want the hourly forecast to cover
    const hoursContent = createDivElement("hours-content", "");
    const hoursTitleText = createTextElement(
      "p",
      "hours-title-text",
      `Your ${numberOfHours}-Hour Outlook!`,
      ""
    );
    const currentFeelsLikeData = data.currentConditions.feelslike;
    hoursTitleText.style.color = getTempColor(currentFeelsLikeData);
    const dateTimeLastUpdateData = data.currentConditions.datetime;
    const parseLastUpdateLocalTime = format(
      parse(dateTimeLastUpdateData, "HH:mm:ss", new Date()),
      "HH:mm"
    );
    const lastUpdateHHNum = roundUpToNextHourNum(parseLastUpdateLocalTime);
    const startHour = lastUpdateHHNum;
    const finalHour = startHour + numberOfHours;
    const limitedDaysData = [data.days[0], data.days[1]];
    const hoursData = limitedDaysData
      .flatMap((day) => day.hours)
      .slice(startHour, finalHour);

    dataContent.append(hoursContent);
    hoursContent.append(hoursTitleText);

    const sunrise0Time = data.days[0].sunrise;
    const sunset0Time = data.days[0].sunset;

    hoursData.forEach((hours, index) => {
      const dateTimeData = hours.datetime;
      const conditionsData = hours.conditions;
      const tempData = hours.temp;
      const feelsLikeData = hours.feelslike;
      const iconData = hours.icon;
      const humidityData = hours.humidity;
      const dewPointData = hours.dew;
      const precipProbData = hours.precipprob;
      const windSpeedMPHData = hours.windspeed;
      const windDirectionData = hours.winddir;
      const windGustMPHData = hours.windgust;
      const cloudCoverData = hours.cloudcover;
      const uvIndexData = hours.uvindex;

      // GETS YOU 06AM, eg...USE one H to kill leading zero!!!
      const parseHoursTime = format(
        parse(dateTimeData, "HH:mm:ss", new Date()),
        "ha"
      );

      const todayIs = getTodayDate();
      const tomorrowIs = getTomorrowDate();
      const parseTodayDate = format(
        parse(todayIs, "yyyy-MM-dd", new Date()),
        "MMM d"
      );
      const parseTomorrowDate = format(
        parse(tomorrowIs, "yyyy-MM-dd", new Date()),
        "MMM d"
      );
      function checkHourGetDate() {
        let hourlyTimeisWhatDate = "";
        let count = index;
        if (startHour + count > 0 && startHour + count <= 23) {
          hourlyTimeisWhatDate = parseTodayDate;
        } else {
          hourlyTimeisWhatDate = parseTomorrowDate;
        }
        return hourlyTimeisWhatDate;
      }

      const hoursTileCont = createDivElement("", "hours-tile-cont");
      const hoursConditionCont = createDivElement("", "hours-condition-cont");
      const hoursConditionText = createTextElement(
        "p",
        "",
        conditionsData,
        "hours-condition-text"
      );
      const hoursTimeCont = createDivElement("", "hours-time-cont");
      hoursTimeCont.style.backgroundColor = styleHoursDayNight(
        dateTimeData,
        sunrise0Time,
        sunset0Time
      ).colorBkgd;
      hoursTimeCont.style.color = styleHoursDayNight(
        dateTimeData,
        sunrise0Time,
        sunset0Time
      ).colorText;
      const hoursTimeText = createTextElement(
        "p",
        "",
        `${parseHoursTime}, ${checkHourGetDate()}`,
        "hours-time-text"
      );
      const hoursRowCont = createDivElement("", "hours-row-cont");
      const hoursIconCont = createDivElement("", "hours-icon-cont");
      const hoursIconImg = createImgElement(
        "",
        getWeatherIconSRC(iconData),
        "Weather icon based on forecast conditions.",
        "hours-icon-img"
      );
      hoursIconCont.style.backgroundColor = getWeatherIconBkgdColor(iconData);
      hoursIconImg.style.backgroundColor = getWeatherIconBkgdColor(iconData);
      const hoursWeatherCont = createDivElement("", "hours-weather-cont");
      const hoursTempCont = createDivElement("", "hours-temp-cont");
      hoursTempCont.style.backgroundColor = getTempColor(tempData);
      const hoursTempText = createTextElement("p", "", "", "hours-temp-text");
      const hoursFeelsLikeCont = createDivElement("", "hours-feels-like-cont");
      hoursFeelsLikeCont.style.backgroundColor = getTempColor(tempData);
      const hoursFeelsLikeText = createTextElement(
        "p",
        "",
        "",
        "hours-feels-like-text"
      );
      const {
        targetDiv: hoursHumidityDiv,
        targetImg: hoursHumidityImg,
        targetText: hoursHumidityText,
      } = createWeatherElements(
        "",
        svgHumidity,
        `${humidityData}%`,
        "hours-humidity",
        false
      );
      const {
        targetDiv: hoursDewPointDiv,
        targetImg: hoursDewPointImg,
        targetText: hoursDewPointText,
      } = createWeatherElements(
        "",
        svgDewPoint,
        `${dewPointData}°F`,
        "hours-dew-point",
        false
      );
      const {
        targetDiv: hoursPrecipProbDiv,
        targetImg: hoursPrecipProbImg,
        targetText: hoursPrecipProbText,
      } = createWeatherElements(
        "",
        svgPrecipProb,
        `${precipProbData}%`,
        "hours-precip-prob",
        false
      );

      let windInfo = "";
      if (windSpeedMPHData && windDirectionData && windGustMPHData) {
        windInfo = `${windSpeedMPHData}mph ${getWindDirection(
          windDirectionData
        )} (gusts: ${windGustMPHData}mph)`;
      } else if (windSpeedMPHData && windDirectionData) {
        windInfo = `${windSpeedMPHData}mph ${getWindDirection(
          windDirectionData
        )}`;
      } else {
        windInfo = `${windSpeedMPHData}mph`;
      }
      const {
        targetDiv: hoursWindInfoDiv,
        targetImg: hoursWindInfoImg,
        targetText: hoursWindInfoText,
      } = createWeatherElements(
        "",
        svgWindInfo,
        windInfo,
        "hours-wind-info",
        false
      );
      const {
        targetDiv: hoursCloudCoverDiv,
        targetImg: hoursCloudCoverImg,
        targetText: hoursCloudCoverText,
      } = createWeatherElements(
        "",
        svgCloudCover,
        `${cloudCoverData}%`,
        "hours-cloud-cover",
        false
      );
      const {
        targetDiv: hoursUVIndexDiv,
        targetImg: hoursUVIndexImg,
        targetText: hoursUVIndexText,
      } = createWeatherElements(
        "",
        svgUVIndex,
        `${getUVIndexValue(uvIndexData)}`,
        "hours-uv-index",
        false
      );

      function initializeHoursFC() {
        hoursDewPointText.dataset.dew = dewPointData;
        hoursTempText.dataset.temp = tempData;
        hoursFeelsLikeText.dataset.feelslike = feelsLikeData;

        if (tempScaleBtn.value === "C") {
          hoursDewPointText.textContent = `${convertToCelsius(dewPointData)}°C`;
          hoursTempText.textContent = `Temp ${convertToCelsius(tempData)}°C`;
          hoursFeelsLikeText.textContent = `Feels ${convertToCelsius(
            feelsLikeData
          )}°C`;
        } else {
          hoursDewPointText.textContent = `${dewPointData}°F`;
          hoursTempText.textContent = `Temp ${tempData}°F`;
          hoursFeelsLikeText.textContent = `Feels ${feelsLikeData}°F`;
        }
      }

      initializeHoursFC();

      hoursContent.append(hoursTileCont);
      hoursTileCont.append(hoursConditionCont, hoursRowCont, hoursWeatherCont);
      hoursConditionCont.append(hoursConditionText);

      if (tempData !== feelsLikeData) {
        hoursRowCont.append(
          hoursTimeCont,
          hoursIconCont,
          hoursTempCont,
          hoursFeelsLikeCont
        );
      } else {
        hoursRowCont.append(hoursTimeCont, hoursIconCont, hoursTempCont);
      }

      hoursTimeCont.append(hoursTimeText);
      hoursIconCont.append(hoursIconImg);
      hoursTempCont.append(hoursTempText);
      hoursFeelsLikeCont.append(hoursFeelsLikeText);
      hoursWeatherCont.append(
        hoursHumidityDiv,
        hoursDewPointDiv,
        hoursPrecipProbDiv,
        hoursWindInfoDiv,
        hoursCloudCoverDiv,
        hoursUVIndexDiv
      );
      hoursHumidityDiv.append(hoursHumidityImg, hoursHumidityText);
      hoursDewPointDiv.append(hoursDewPointImg, hoursDewPointText);
      hoursPrecipProbDiv.append(hoursPrecipProbImg, hoursPrecipProbText);
      hoursWindInfoDiv.append(hoursWindInfoImg, hoursWindInfoText);
      hoursCloudCoverDiv.append(hoursCloudCoverImg, hoursCloudCoverText);
      hoursUVIndexDiv.append(hoursUVIndexImg, hoursUVIndexText);
    });
  }

  getHoursInfo();
}

export function updateHoursFC() {
  const hoursDewPointText = document.querySelectorAll(".hours-dew-point-text");
  const hoursTempText = document.querySelectorAll(".hours-temp-text");
  const hoursFeelsLikeText = document.querySelectorAll(
    ".hours-feels-like-text"
  );

  const tempScaleBtn = document.querySelector("#temp-scale-btn");
  const hoursContent = document.querySelector("#hours-content");

  if (!hoursContent) {
    console.log("No 24 hour outlook view has been selected yet.");
    return;
  }

  hoursDewPointText.forEach((element) => {
    if (tempScaleBtn.value === "C") {
      element.textContent = `${convertToCelsius(element.dataset.dew)}°C`;
    } else if (tempScaleBtn.value === "F") {
      element.textContent = `${element.dataset.dew}°F`;
    }
  });

  hoursTempText.forEach((element) => {
    if (tempScaleBtn.value === "C") {
      element.textContent = `Temp ${convertToCelsius(element.dataset.temp)}°C`;
    } else if (tempScaleBtn.value === "F") {
      element.textContent = `Temp ${element.dataset.temp}°F`;
    }
  });

  if (hoursFeelsLikeText.length > 0) {
    hoursFeelsLikeText.forEach((element) => {
      if (tempScaleBtn.value === "C") {
        element.textContent = `Feels ${convertToCelsius(
          element.dataset.feelslike
        )}°C`;
      } else if (tempScaleBtn.value === "F") {
        element.textContent = `Feels ${element.dataset.feelslike}°F`;
      }
    });
  }
}
