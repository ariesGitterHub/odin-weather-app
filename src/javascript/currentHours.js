import { format, parse } from "date-fns";
import svgHumidity from "../assets/humidity.svg";
import svgDewPoint from "../assets/dew-point.svg";
import svgUVIndex from "../assets/uv-index.svg";
import svgCloudCover from "../assets/cloud-cover.svg";
import svgPrecipProb from "../assets/chance-of-precipitation.svg";
import svgWindInfo from "../assets/wind-sm.svg";

import {
  // getTodayDate,
  createDivElement,
  createImgElement,
  createTextElement,
  createWeatherElements,
  // getCurrentTimeIn24Format,
  roundUp24FormatToNextHour
} from "./functionsBasic.js";

import {
  getWeatherIconSRC,
  getWindDirection,
  getTempColor,
  getWeatherIconBkgdColor,
  getUVIndexValue,
  // getMoonPhase,
  getMonthBkgdColor,
  convertToCelsius,
} from "./functionsWeather.js";

export function createHoursView(data) {
  const tempScaleBtn = document.querySelector("#temp-scale-btn");

  const noWDataAvailable = "No data currently available.";
  const dataContent = document.querySelector("#data-content");

  // const limitedDaysData = data.days.slice(0, 1);
    const limitedDaysData = data.days[0];
  const hoursData = limitedDaysData.hours.slice(0, 3);
console.log(hoursData)
  
  function getHoursInfo() {
    if (!data) {
      console.error(noWDataAvailable);
      return;
    } 
    //else if (hoursData.length > 0) {
    //console.log(hoursData);

      const hoursContent = createDivElement("hours-content", "");

      const hoursTitle = createTextElement(
        "p",
        "hours-title",
        // `${hoursData.length} Hourly Forecast`,
        "Hourly Forecast",
        ""
      );

      dataContent.append(hoursContent);
      hoursContent.append(hoursTitle);

      hoursData.forEach((hours) => {
        const dateTimeData = hours.datetime;

        const conditionsData = hours.conditions;

        const tempData = hours.temp;
        const feelsLikeData = hours.feelslike;
        // const tempMaxData = hours.tempmax;
        // const tempMinData = hours.tempmin;

        const iconData = hours.icon;

        const humidityData = hours.humidity;
        const dewPointData = hours.dew;
        const precipProbData = hours.precipprob;

        const windSpeedMPHData = hours.windspeed;
        const windDirectionData = hours.winddir;
        const windGustMPHData = hours.windgust;
        const cloudCoverData = hours.cloudcover;

        const uvIndexData = hours.uvindex;

        // Get HH:mm:ss (24hr format) from array and convert to HH
        const parseArrTimeStrToHour = format(
          parse(dateTimeData, "HH:mm:ss", new Date()),
          "HH"
        );

        console.log(parseArrTimeStrToHour);

        // Turn HH array result into a number for "math-ing" (sic)
        const parseArrStrHourToNum = parseInt(parseArrTimeStrToHour);

        console.log(parseArrStrHourToNum);

        // Get the current time (24hr format) and round to next hour
        const nowTimeRoundUpHour = roundUp24FormatToNextHour();

        console.log(nowTimeRoundUpHour);

        // Turn the current hour to a number for the mathing

        const parseNowTimeRoundUpHour = parseInt(nowTimeRoundUpHour);

        console.log(parseNowTimeRoundUpHour);

        const parseHoursTime = format(
          parse(dateTimeData, "HH:mm:ss", new Date()),
          "hha"
        );

        const hoursTileCont = createDivElement("", "hours-tile-cont");

        const hoursConditionCont = createDivElement("", "hours-condition-cont");

        const hoursConditionText = createTextElement(
          "p",
          "",
          conditionsData,
          "hours-condition-text"
        );

        const hoursTimeCont = createDivElement("", "hours-time-cont");
        hoursTimeCont.style.backgroundColor = getMonthBkgdColor(parseHoursTime);

        const hoursTimeText = createTextElement(
          "p",
          "",
          // parseDaysDate
          parseHoursTime,
          "hours-time-text"
        );

        const hoursColRowCont1 = createDivElement("", "hours-col-row-cont1");

        const hoursColRowCont2 = createDivElement("", "hours-col-row-cont2");

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

        const hoursFeelsLikeCont = createDivElement(
          "",
          "hours-feels-like-cont"
        );
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
          if (tempScaleBtn.value === "C") {
            hoursDewPointText.textContent = `${convertToCelsius(
              dewPointData
            )}°C`;
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
        hoursTileCont.append(hoursConditionCont, hoursColRowCont1);
        hoursConditionCont.append(hoursConditionText);
        hoursColRowCont1.append(hoursColRowCont2, hoursWeatherCont);

        if (tempData !== feelsLikeData) {
          hoursColRowCont2.append(
            hoursTimeCont,
            hoursIconCont,
            hoursTempCont,
            hoursFeelsLikeCont
          );
        } else {
          hoursColRowCont2.append(hoursTimeCont, hoursIconCont, hoursTempCont);
        }
        // hoursColRowCont2.append(hoursTimeCont, hoursIconCont, hoursTempCont, hoursFeelsLikeCont);

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
  //}
  getHoursInfo();
}

// export function updateToHoursFC(data) {
//   const hoursData = data.days.hours;
//   const tempScaleBtn = document.querySelector("#temp-scale-btn");

//   hoursData.forEach((hours, index) => {
//     const tempMaxData = hours.tempmax;
//     const tempMinData = hours.tempmin;
//     const dewPointData = hours.dew;

//     const hoursTempMaxText = document.querySelectorAll(".hours-temp-max-text")[
//       index
//     ];
//     const hoursTempMinText = document.querySelectorAll(".hours-temp-min-text")[
//       index
//     ];
//     const hoursDewPointText = document.querySelectorAll(".hours-dew-point-text")[
//       index
//     ];

//     if (tempScaleBtn.value === "C") {
//       hoursDewPointText.textContent = `${convertToCelsius(dewPointData)}°C`;
//       hoursTempMaxText.textContent = `High ${convertToCelsius(tempMaxData)}°C`;
//       hoursTempMinText.textContent = `Low ${convertToCelsius(tempMinData)}°C`;
//     } else {
//       hoursDewPointText.textContent = `${dewPointData}°F`;
//       hoursTempMaxText.textContent = `High ${tempMaxData}°F`;
//       hoursTempMinText.textContent = `Low ${tempMinData}°F`;
//     }
//   });
// }
