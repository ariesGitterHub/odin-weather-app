import { format, parse } from "date-fns";
// import svgTempHi from "../assets/hi.svg";
// import svgTempLo from "../assets/lo.svg";
import svgHumidity from "../assets/humidity.svg";
import svgDewPoint from "../assets/dew-point.svg";
import svgUVIndex from "../assets/uv-index.svg";
import svgCloudCover from "../assets/cloud-cover.svg";
import svgSunrise from "../assets/sunrise.svg";
import svgSunset from "../assets/sunset.svg";
import svgPrecipProb from "../assets/chance-of-precipitation.svg";
import svgWindInfo from "../assets/wind-sm.svg";

import {
  getTodayDate,
  createDivElement,
  createImgElement,
  createTextElement,
  createWeatherElements,
  
} from "./functionsBasic.js";

import {
  getWeatherIconSRC,
  getWindDirection,
  getTempColor,
  getWeatherIconBkgdColor,
  getUVIndexValue,
  getMoonPhase,
  getMonthBkgdColor,
  convertToCelsius,
} from "./functionsWeather.js";

export function createDaysView(data) {
  const tempScaleBtn = document.querySelector("#temp-scale-btn");

  const noWDataAvailable = "No data currently available.";
  const dataContent = document.querySelector("#data-content");

  const daysData = data.days;
  const limitedDaysData = daysData.slice(0, 1); // Only iterates 10 out of 15 days

  function getDaysInfo() {
    if (!data) {
      console.error(noWDataAvailable);
      return;
    } 
    //else if (daysData.length > 0) {
      // console.log(daysData);

      const daysContent = createDivElement("days-content", "");

      const daysTitle = createTextElement(
        "p",
        "days-title",
        //"10 Day Forecast",
        `${limitedDaysData.length} Day Forecast`,
        ""
      );

      dataContent.append(daysContent);
      daysContent.append(daysTitle);

      limitedDaysData.forEach((days) => {
        const dateTimeData = days.datetime;

        const conditionsData = days.conditions;

        // const tempData = days.temp;
        // const feelsLikeData = days.feelslike;
        const tempMaxData = days.tempmax;
        const tempMinData = days.tempmin;

        const iconData = days.icon;

        const humidityData = days.humidity;
        const dewPointData = days.dew;
        const precipProbData = days.precipprob;

        const windSpeedMPHData = days.windspeed;
        const windDirectionData = days.winddir;
        const windGustMPHData = days.windgust;
        const cloudCoverData = days.cloudcover;

        const uvIndexData = days.uvindex;

        const moonPhaseData = days.moonphase;

        const parseDaysDate = format(
          parse(dateTimeData, "yyyy-MM-dd", new Date()),
          "EEE, MMM dd"
        );

        const parseDaysMonthDayDate = format(
          parse(dateTimeData, "yyyy-MM-dd", new Date()),
          "MMM dd"
        );

        const parseDaysMonth = format(
          parse(dateTimeData, "yyyy-MM-dd", new Date()),
          "MMM"
        );

        // console.log(parseDaysMonth);

        const daysTileCont = createDivElement("", "days-tile-cont");

        const daysConditionCont = createDivElement("", "days-condition-cont");

        const daysConditionText = createTextElement(
          "p",
          "",
          conditionsData,
          "days-condition-text"
        );

        function checkForToday() {
          const todayIs = getTodayDate();
          if (todayIs === dateTimeData) {
            return `Today, ${parseDaysMonthDayDate}`;
          } else {
            return parseDaysDate;
          }
        }

        const daysDateCont = createDivElement("", "days-date-cont");

        daysDateCont.style.backgroundColor = getMonthBkgdColor(parseDaysMonth);

        const daysDateText = createTextElement(
          "p",
          "",
          // parseDaysDate
          checkForToday(),
          "days-date-text"
        );

        const parseSunrise = format(
          parse(days.sunrise, "HH:mm:ss", new Date()),
          "hh:mm:ssa"
        );

        const parseSunset = format(
          parse(days.sunset, "HH:mm:ss", new Date()),
          "hh:mm:ssa"
        );

        const daysColRowCont1 = createDivElement("", "days-col-row-cont1");

        const daysColRowCont2 = createDivElement("", "days-col-row-cont2");

        const daysIconCont = createDivElement("", "days-icon-cont");
        const daysIconImg = createImgElement(
          "",
          getWeatherIconSRC(iconData),
          "Weather icon based on forecast conditions.",
          "days-icon-img"
        );

        daysIconCont.style.backgroundColor = getWeatherIconBkgdColor(iconData);

        daysIconImg.style.backgroundColor = getWeatherIconBkgdColor(iconData);
        const daysWeatherCont = createDivElement("", "days-weather-cont");

        const daysTempMaxCont = createDivElement("", "days-temp-max-cont");
        daysTempMaxCont.style.backgroundColor = getTempColor(tempMaxData);

        const daysTempMinCont = createDivElement("", "days-temp-min-cont");
        daysTempMinCont.style.backgroundColor = getTempColor(tempMinData);

        const daysTempMaxText = createTextElement(
          "p",
          "",
          "",
          "days-temp-max-text"
        );

        const daysTempMinText = createTextElement(
          "p",
          "",
          "",
          "days-temp-min-text"
        );

        const {
          targetDiv: daysHumidityDiv,
          targetImg: daysHumidityImg,
          targetText: daysHumidityText,
        } = createWeatherElements(
          "",
          svgHumidity,
          `${humidityData}%`,
          "days-humidity",
          false
        );

        const {
          targetDiv: daysDewPointDiv,
          targetImg: daysDewPointImg,
          targetText: daysDewPointText,
        } = createWeatherElements(
          "",
          svgDewPoint,
          `${dewPointData}°F`,
          "days-dew-point",
          false
        );

        const {
          targetDiv: daysPrecipProbDiv,
          targetImg: daysPrecipProbImg,
          targetText: daysPrecipProbText,
        } = createWeatherElements(
          "",
          svgPrecipProb,
          `${precipProbData}%`,
          "days-precip-prob",
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
          targetDiv: daysWindInfoDiv,
          targetImg: daysWindInfoImg,
          targetText: daysWindInfoText,
        } = createWeatherElements(
          "",
          svgWindInfo,
          windInfo,
          "days-wind-info",
          false
        );

        const {
          targetDiv: daysCloudCoverDiv,
          targetImg: daysCloudCoverImg,
          targetText: daysCloudCoverText,
        } = createWeatherElements(
          "",
          svgCloudCover,
          `${cloudCoverData}%`,
          "days-cloud-cover",
          false
        );

        const {
          targetDiv: daysUVIndexDiv,
          targetImg: daysUVIndexImg,
          targetText: daysUVIndexText,
        } = createWeatherElements(
          "",
          svgUVIndex,
          `${getUVIndexValue(uvIndexData)}`,
          "days-uv-index",
          false
        );

        const {
          targetDiv: daysSunriseDiv,
          targetImg: daysSunriseImg,
          targetText: daysSunriseText,
        } = createWeatherElements(
          "",
          svgSunrise,
          parseSunrise,
          "days-sunrise",
          false
        );

        const {
          targetDiv: daysSunsetDiv,
          targetImg: daysSunsetImg,
          targetText: daysSunsetText,
        } = createWeatherElements(
          "",
          svgSunset,
          parseSunset,
          "days-sunset",
          false
        );

        const {
          targetDiv: daysMoonPhaseDiv,
          targetImg: daysMoonPhaseImg,
          targetText: daysMoonPhaseText,
        } = createWeatherElements(
          "",
          getMoonPhase(moonPhaseData).moonSrc,
          getMoonPhase(moonPhaseData).moonPhase,
          "days-moon-phase",
          false
        );

        function initializeDaysFC() {
          if (tempScaleBtn.value === "C") {
            daysDewPointText.textContent = `${convertToCelsius(
              dewPointData
            )}°C`;
            daysTempMaxText.textContent = `High ${convertToCelsius(
              tempMaxData
            )}°C`;
            daysTempMinText.textContent = `Low ${convertToCelsius(
              tempMinData
            )}°C`;
          } else {
            daysDewPointText.textContent = `${dewPointData}°F`;
            daysTempMaxText.textContent = `High ${tempMaxData}°F`;
            daysTempMinText.textContent = `Low ${tempMinData}°F`;
          }
        }

        initializeDaysFC();

        daysContent.append(daysTileCont);
        daysTileCont.append(daysConditionCont, daysColRowCont1);
        daysConditionCont.append(daysConditionText);
        daysColRowCont1.append(daysColRowCont2, daysWeatherCont);
        daysColRowCont2.append(
          daysDateCont,
          daysIconCont,
          daysTempMaxCont,
          daysTempMinCont
        );
        daysDateCont.append(daysDateText);
        daysIconCont.append(daysIconImg);
        daysTempMaxCont.append(daysTempMaxText);
        daysTempMinCont.append(daysTempMinText);
        daysWeatherCont.append(
          daysHumidityDiv,
          daysDewPointDiv,
          daysPrecipProbDiv,
          daysWindInfoDiv,
          daysCloudCoverDiv,
          daysUVIndexDiv,
          daysSunriseDiv,
          daysSunsetDiv,
          daysMoonPhaseDiv
        );
        daysHumidityDiv.append(daysHumidityImg, daysHumidityText);
        daysDewPointDiv.append(daysDewPointImg, daysDewPointText);
        daysPrecipProbDiv.append(daysPrecipProbImg, daysPrecipProbText);
        daysWindInfoDiv.append(daysWindInfoImg, daysWindInfoText);
        daysCloudCoverDiv.append(daysCloudCoverImg, daysCloudCoverText);
        daysUVIndexDiv.append(daysUVIndexImg, daysUVIndexText);
        daysSunriseDiv.append(daysSunriseImg, daysSunriseText);
        daysSunsetDiv.append(daysSunsetImg, daysSunsetText);
        daysMoonPhaseDiv.append(daysMoonPhaseImg, daysMoonPhaseText);
      });
    }
  //}
  getDaysInfo();
}

// export function updateToDaysFC(data) {
//   const daysData = data.days;
//   const tempScaleBtn = document.querySelector("#temp-scale-btn");

//   daysData.forEach((days) => {
//     const tempMaxData = days.tempmax;
//     const tempMinData = days.tempmin;
//     const dewPointData = days.dew;

//     const daysTempMaxText = document.querySelectorAll(".days-temp-max-text");
//     const daysTempMinText = document.querySelectorAll(".days-temp-min-text")
//     const daysDewPointText = document.querySelectorAll(".days-dew-point-text")

//     if (tempScaleBtn.value === "C") {
//       daysDewPointText.textContent = `${convertToCelsius(dewPointData)}°C`;
//       daysTempMaxText.textContent = `High ${convertToCelsius(tempMaxData)}°C`;
//       daysTempMinText.textContent = `Low ${convertToCelsius(tempMinData)}°C`;
//     } else {
//       daysDewPointText.textContent = `${dewPointData}°F`;
//       daysTempMaxText.textContent = `High ${tempMaxData}°F`;
//       daysTempMinText.textContent = `Low ${tempMinData}°F`;
//     }
//   });
// }

export function updateDaysFC(data) {
  const daysData = data.days;
  const tempScaleBtn = document.querySelector("#temp-scale-btn");

  daysData.forEach((days, index) => {
    const tempMaxData = days.tempmax;
    const tempMinData = days.tempmin;
    const dewPointData = days.dew;

    const daysTempMaxText = document.querySelectorAll(".days-temp-max-text")[
      index
    ];
    const daysTempMinText = document.querySelectorAll(".days-temp-min-text")[
      index
    ];
    const daysDewPointText = document.querySelectorAll(".days-dew-point-text")[
      index
    ];

    if (tempScaleBtn.value === "C") {
      daysDewPointText.textContent = `${convertToCelsius(dewPointData)}°C`;
      daysTempMaxText.textContent = `High ${convertToCelsius(tempMaxData)}°C`;
      daysTempMinText.textContent = `Low ${convertToCelsius(tempMinData)}°C`;
    } else {
      daysDewPointText.textContent = `${dewPointData}°F`;
      daysTempMaxText.textContent = `High ${tempMaxData}°F`;
      daysTempMinText.textContent = `Low ${tempMinData}°F`;
    }
  });
}