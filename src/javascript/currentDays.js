import { format, parse } from "date-fns";
import svgTempHi from "../assets/hi.svg";
import svgTempLo from "../assets/lo.svg";
import svgHumidity from "../assets/humidity.svg";
import svgUVIndex from "../assets/uv-index.svg";
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



        const daysRowCont = createDivElement("", "days-row-cont");
        const daysColCont = createDivElement("", "days-col-cont");

        const daysDateTextCont = createDivElement("", "days-date-text-cont");

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

        const daysIconCont = createDivElement("", "days-icon-cont");
        const daysIconImg = createImgElement(
          "",
          getWeatherIconSRC(days.icon),
          "Weather icon based on forecast conditions.",
          "days-icon-img"
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
  "days-temp-hi"
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
  "days-temp-lo"
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
  "days-humidity"
);

const {
  targetDiv: daysPrecipProbDiv,
  targetImg: daysPrecipProbImg,
  targetText: daysPrecipProbText,
} = createWeatherElements(
  "",
  svgPrecipProb,
  `${days.precipprob}%`,
  "days-precip-prob"
);

const {
  targetDiv: daysWindInfoDiv,
  targetImg: daysWindInfoImg,
  targetText: daysWindInfoText,
} = createWeatherElements(
  "",
  svgWindInfo,
  `${days.windspeed}mph ${getWindDirection(days.winddir)}`,
  "days-wind-info"
);

const {
  targetDiv: daysUVIndexDiv,
  targetImg: daysUVIndexImg,
  targetText: daysUVIndexText,
} = createWeatherElements(
  "",
  svgUVIndex,
  `${getUVIndexValue(days.uvindex)}`,
  "days-uv-index"
);


        daysContent.append(daysRowCont);
        daysRowCont.append(daysColCont, daysWeatherCont);
        daysColCont.append(daysDateTextCont, daysIconCont);
        daysWeatherCont.append(
          daysTempHiDiv,
          daysTempLoDiv,
          daysHumidityDiv,
          daysPrecipProbDiv,
          daysWindInfoDiv,
          daysUVIndexDiv
        );
        daysDateTextCont.append(daysDateText);
        daysIconCont.append(daysIconImg);
        daysTempHiDiv.append(daysTempHiImg, daysTempHiText);
        daysTempLoDiv.append(daysTempLoImg, daysTempLoText);
        daysHumidityDiv.append(daysHumidityImg, daysHumidityText);
        daysPrecipProbDiv.append(daysPrecipProbImg, daysPrecipProbText);
        daysWindInfoDiv.append(daysWindInfoImg, daysWindInfoText);
        daysUVIndexDiv.append(daysUVIndexImg, daysUVIndexText)
      });
    }
  }
  getDaysInfo();
}
