import { format, parse } from "date-fns";
import svgTempHi from "../assets/hi.svg";
import svgTempLo from "../assets/lo.svg";
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
} from "./functionsWeather.js";

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

      const daysContent = createDivElement("days-content", "");

      const daysTitle = createTextElement("p", "days-title", "15 Day Forecast", "");

      dataContent.append(daysContent);
      daysContent.append(daysTitle);

      daysData.forEach((days) => {
        const parseDaysDate = format(
          parse(days.datetime, "yyyy-MM-dd", new Date()),
          "EEE MMM dd"
        );

        const daysColCont = createDivElement("", "days-col-cont");

        const daysDateConditionCont = createDivElement("", "days-date-condition-cont");

        function checkForToday() {
          const todayIs = getTodayDate();
          if (todayIs === days.datetime) {
            return "Today";
          } else {
            return parseDaysDate;
          }
        }
        // const iconData = days.icons;

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

        const daysConditionText = createTextElement("p", "", `(${days.conditions})`, "days-condition-text")
        
        const daysRowCont = createDivElement("", "days-row-cont")

        const daysIconCont = createDivElement("", "days-icon-cont");
        const daysIconImg = createImgElement(
          "",
          getWeatherIconSRC(days.icon),
          "Weather icon based on forecast conditions.",
          "days-icon-img"
        );

      daysIconCont.style.backgroundColor = getWeatherIconBkgdColor(
        days.icon
      );

      daysIconImg.style.backgroundColor = getWeatherIconBkgdColor(days.icon);
        const daysWeatherCont = createDivElement("", "days-weather-cont");

// const daysTempHiText = createTextElement("p", "", `HI ${days.tempmax}°F`, "days-temp-hi-text");
// daysTempHiText.style.backgroundColor = getTempColor(days.tempmax);

// const daysTempLoText = createTextElement("p", "", `LO ${days.tempmin}°F`, "days-temp-lo-text");
// daysTempLoText.style.backgroundColor = getTempColor(days.tempmin);

const {
  targetDiv: daysTempHiDiv,
  targetImg: daysTempHiImg,
  targetText: daysTempHiText,
} = createWeatherElements(
  "",
  svgTempHi,
  `${days.tempmax}°F`,
  "days-temp-hi",
  false
);

daysTempHiImg.style.backgroundColor = getTempColor(days.tempmax);
daysTempHiText.style.color = getTempColor(days.tempmax);

const {
  targetDiv: daysTempLoDiv,
  targetImg: daysTempLoImg,
  targetText: daysTempLoText,
} = createWeatherElements(
  "",
  svgTempLo,
  `${days.tempmin}°F`,
  "days-temp-lo",
  false
);

daysTempLoImg.style.backgroundColor = getTempColor(days.tempmin);
daysTempLoText.style.color = getTempColor(days.tempmin);

const {
  targetDiv: daysHumidityDiv,
  targetImg: daysHumidityImg,
  targetText: daysHumidityText,
} = createWeatherElements(
  "",
  svgHumidity,
  `${days.humidity}%`,
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
    `${days.dew}°F`,
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
  `${days.precipprob}%`,
  "days-precip-prob",
  false
);

const {
  targetDiv: daysWindInfoDiv,
  targetImg: daysWindInfoImg,
  targetText: daysWindInfoText,
} = createWeatherElements(
  "",
  svgWindInfo,
  `${days.windspeed}mph ${getWindDirection(days.winddir)}`,
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
    `${days.cloudcover}%`,
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
  `${getUVIndexValue(days.uvindex)}`,
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
  } = createWeatherElements("", svgSunset, parseSunset, "days-sunset", false);

    const {
      targetDiv: daysMoonPhaseDiv,
      targetImg: daysMoonPhaseImg,
      targetText: daysMoonPhaseText,
    } = createWeatherElements(
      "",
      getMoonPhase(days.moonphase).moonSrc,
      getMoonPhase(days.moonphase).moonPhase,
      "days-moon-phase", false
    );


        daysContent.append(daysColCont);
        daysColCont.append(daysDateConditionCont, daysRowCont);
        daysDateConditionCont.append(daysDateText, daysConditionText);
        daysRowCont.append(
          daysIconCont,
          daysWeatherCont,
            // daysIconCont,
            // daysTempHiDiv,
            // daysTempLoDiv,
            // daysHumidityDiv,
            // daysPrecipProbDiv,
            // daysWindInfoDiv,
            // daysUVIndexDiv
          );
        daysIconCont.append(daysIconImg);
        daysWeatherCont.append(
          // daysIconCont,
          daysTempHiDiv,
          daysTempLoDiv,
          daysHumidityDiv,
          daysDewPointDiv,
          daysPrecipProbDiv,
          daysWindInfoDiv,
          daysCloudCoverDiv,
          daysUVIndexDiv, 
          daysSunriseDiv,
          daysSunsetDiv,
          daysMoonPhaseDiv,

        );
        // daysXXXDiv.append(daysXXXImg, daysXXXText);

        daysTempHiDiv.append(daysTempHiImg, daysTempHiText);
        daysTempLoDiv.append(daysTempLoImg, daysTempLoText);
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
  }
  getDaysInfo();
}
