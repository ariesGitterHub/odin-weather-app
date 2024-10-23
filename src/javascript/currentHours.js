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
  // getTodayDate,
  // getCurrentTimeIn24Format,
  roundUpToNextHourNum,
} from "./functionsBasic.js";

import {
  getWeatherIconSRC,
  getWindDirection,
  getTempColor,
  getWeatherIconBkgdColor,
  getUVIndexValue,
  getMonthBkgdColor,
  styleHoursDayNight,
  convertToCelsius,
} from "./functionsWeather.js";

export function createHoursView(data) {
  const tempScaleBtn = document.querySelector("#temp-scale-btn");

  const noWDataAvailable = "No data currently available.";
  const dataContent = document.querySelector("#data-content");


  // const limitedDaysData = [data.days[0], data.days[1]];
  // const hoursData = limitedDaysData.hours.slice(0, 48);

  // const hoursData = limitedDaysData.flatMap((day) => day.hours).slice(0, 1);
  // console.log(hoursData);

  // const limitedDaysData = [data.days[0], data.days[1]];
  // const hoursData = limitedDaysData.flatMap((day) => day.hours).slice(0, 1);
  // console.log(hoursData);

  // const hoursData = data

  // I need data from currentConditions (datetime which will be the lastUpdateTime locally), days( indexes 0 and 1, and datetime, which will be a date that I use below the hour), and hours (which has all the hourly data by the data, the bulk of my needs)

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



    const dateTimeLastUpdateData = data.currentConditions.datetime;
    console.log(`LAST UPDATE: ${dateTimeLastUpdateData}`);

    const parseLastUpdateLocalTime = format(
      parse(dateTimeLastUpdateData, "HH:mm:ss", new Date()),
      "HH:mm"
    );
    console.log(`hh:mma: ${parseLastUpdateLocalTime}`);

    const lastUpdateHHNum = roundUpToNextHourNum(
      parseLastUpdateLocalTime
    );
    console.log(`ROUNDED UP NUM: ${lastUpdateHHNum}`);
    console.log(typeof lastUpdateHHNum);
    
    const startHour = lastUpdateHHNum;
    const finalHour = startHour + 24;

    const limitedDaysData = [data.days[0], data.days[1]];
    const hoursData = limitedDaysData
      .flatMap((day) => day.hours)
      .slice(startHour, finalHour);
    console.log(hoursData);


    const dateTimeDate0Data = data.days[0].datetime;
    console.log(`DAYS0 DATETIME: ${dateTimeDate0Data}`);
       const sunrise0Data = data.days[0].sunrise;
       console.log(`SUNRISE 0 TIME: ${sunrise0Data}`);

    const dateTimeDate1Data = data.days[1].datetime;
    console.log(`DAYS1 DATETIME: ${dateTimeDate1Data}`);

    // const dateTimeHour0Data = data.days[0].hours.datetime;
    // const dateTimeHour1Data = data.days[1].hours.datetime;

    dataContent.append(hoursContent);
    hoursContent.append(hoursTitle);

    const sunrise0Time = data.days[0].sunrise;
    const sunset0Time = data.days[0].sunset;

    hoursData.forEach((hours, index) => {
      const dateTimeData = hours.datetime;
      console.log(`dateTimeData ==== ${dateTimeData}`);

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

      // GETS YOU 06AM, eg...USE one H to kill leading zero!!!
      const parseHoursTime = format(
        parse(dateTimeData, "HH:mm:ss", new Date()),
        "ha"
      );
      console.log(`parseHoursTime is ---> ${parseHoursTime}`);

      // const noLeadingZero = yourstr.replace(/^0(?:0:0?)?/, "");
      

      const parseHoursTimeNum = parseInt(parseHoursTime);
      console.log(`parseHoursTimeNum is a ${typeof parseHoursTimeNum}`);

      // GETS TODAY'S DATE
      const todayIs = getTodayDate();
      const tomorrowIs = getTomorrowDate();

      // PARSES IT INTO OCT 22. eg...

      // const parseDaysMonthDayDate = format(
      //   parse(todayIs, "yyyy-MM-dd", new Date()),
      //   "MMM dd"
      // );

      const parseTodayDate = format(
        parse(todayIs, "yyyy-MM-dd", new Date()),
        "MMM d"
      );

      const parseTomorrowDate = format(
        parse(tomorrowIs, "yyyy-MM-dd", new Date()),
        "MMM d"
      );
      // dateTimeData

      // function startHourCount() {

      // }

      function checkHourGetDate() {
        let hourlyTimeisWhatDate = "";
        let count = index
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
        // parseDaysDate
        `${parseHoursTime}, ${checkHourGetDate()}`,
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
