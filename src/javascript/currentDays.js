import { format, parse } from "date-fns";
import { getTodayDate } from "./functionsBasic.js";

import svgTemp from "../assets/temperature.svg";
import svgHumidity from "../assets/humidity.svg";
// import svgDewPoint from "../assets/dew-point.svg";
import svgUVIndex from "../assets/uv-index.svg";
// import svgCloudCover from "../assets/cloud-cover.svg";
import svgSunrise from "../assets/sunrise.svg";
import svgSunset from "../assets/sunset.svg";
import svgChanceOfPrecipitation from "../assets/chance-of-precipitation.svg";
import svgWindSm from "../assets/wind-sm.svg";

import {
  createDivElement,
  createImgElement,
  createSoloTextElement,
  createMultiTextElement,
  createDataDaysElements,
} from "./functionsBasic.js";

import { getWeatherIconSRC } from "./functionsWeather.js";

export function createDaysView(data) {
  const noWDataAvailable = "No data currently available.";
  const dataContent = document.querySelector("#data-content");

  const daysData = data.days;


  function getDaysInfo() {
    if (!data) {
      console.error(noWDataAvailable);
      return;
    } else if (daysData.length > 0) {
      console.log(daysData);

      const daysContent = createDivElement("days-content");

      const daysTitle = createSoloTextElement("p", "days-title", "15 Day Forecast");

      dataContent.append(daysContent);
      daysContent.append(daysTitle);

      daysData.forEach((days) => {
        const parseDaysDate = format(
          parse(days.datetime, "yyyy-MM-dd", new Date()),
          "EEE MMM dd"
        );

        function checkForToday() {
          const todayIs = getTodayDate();
          if (todayIs === days.datetime) {
            return "Today";
          } else {
            return parseDaysDate;
          }
        }
        // const iconData = days.icons;
        const daysRow = createDivElement("", "days-row");

        const daysSideLeft = createDivElement("", "days-side-left");

        const daysSideRight = createDivElement("", "days-side-right");

        const daysDateText = createMultiTextElement(
          "p",
          "",
          // parseDaysDate
          checkForToday(),
          "days-date-text"
        );
        const daysIconCont = createDivElement("", "days-icon-cont");

const daysTempHiText = createMultiTextElement("p", "", `HI ${days.tempmax}°F`, "days-temp-hi-text");

const daysTempLoText = createMultiTextElement("p", "", `LO ${days.tempmin}°F`, "days-temp-lo-text");



const daysIconImg = createImgElement(
  "",
  getWeatherIconSRC(days.icon),
  "Weather icon based on forecast conditions.",
  "days-icon-img"
);

const daysChanceOfPrecipPropText = createMultiTextElement(
  "p",
  "",
  `%P ${days.precipprob}%`,
  "days-chance-of-precip-prob-text"
);


        // const {
        //   targetDiv: daysTempHiLoDiv,
        //   targetImg: daysTempHiLoImg,
        //   targetText: daysTempHiLoText,
        // } = createDataDaysElements(
        //   "day-temp-hi-lo",
        //   svgTemp,
        //   `${days.tempmax}°F/${days.tempmin}°F `
        // );

        daysContent.append(daysRow);
        daysRow.append(daysSideLeft, daysSideRight);
        daysSideLeft.append(daysDateText, daysTempHiText, daysTempLoText, daysIconCont);
        daysIconCont.append(daysIconImg);
        daysSideRight.append(daysChanceOfPrecipPropText);
        
      });
    }
  }
  getDaysInfo();
}
