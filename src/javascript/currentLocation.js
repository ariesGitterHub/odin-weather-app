import {
  createDivElement,
  createTextElement,
  createBtnElement,
  createImgElement,
} from "./functionsBasic.js";

import { getTempColor } from "./functionsWeather.js"

import svgHours from "../assets/hourly.svg";
import svgAlerts from "../assets/alert.svg";
import svgDays from "../assets/multi-day.svg";

export function createLocationView(query, data) {
  const noWDataAvailable = "No data currently available.";
  const dataContent = document.querySelector("#data-content");
  const alertsData = data.alerts;
  const feelsLikeData = data.currentConditions.feelslike;


  if (!data) {
    console.error(noWDataAvailable);
    return;
  }

  const locationContent = createDivElement("location-content");
  locationContent.style.color = getTempColor(feelsLikeData);

  const locationName = createTextElement("h1", "location-name", query, "");

  const resolvedAddress = createTextElement(
    "p",
    "resolved-address",
    data.resolvedAddress,
    ""
  );

  const locationLatLonDiv = createDivElement("location-lat-lon-div");
  const locationLatLonText = createTextElement(
    "p",
    "location-lat-lon-text",
    `Latitude: ${data.latitude}/Longitude: ${data.longitude}`,
    ""
  );

    const weatherBtnCont = createDivElement("weather-btn-cont");

    function checkForAlertInfo() {
      const hoursBtn = createBtnElement("hours-btn", "", "round-btn");
      const alertsBtn = createBtnElement("alerts-btn", "", "round-btn");
      const daysBtn = createBtnElement("days-btn", "", "round-btn");

      const hoursBtnImg = createImgElement(
        "hours-btn-img",
        svgHours,
        "Hourly Forecast Icon",
        ""
      );
      const alertsBtnImg = createImgElement(
        "alerts-btn-img",
        svgAlerts,
        "Weather Alert Icon",
        ""
      );
      const daysBtnImg = createImgElement(
        "days-btn-img",
        svgDays,
        "Multi-Day Forecast Icon",
        ""
      );

      if (alertsData.length > 0) {
        console.log(alertsData);
        weatherBtnCont.append(hoursBtn, alertsBtn, daysBtn);
        hoursBtn.append(hoursBtnImg);
        alertsBtn.append(alertsBtnImg);
        daysBtn.append(daysBtnImg);
      } else {
        weatherBtnCont.append(hoursBtn, daysBtn);
        hoursBtn.append(hoursBtnImg);
        daysBtn.append(daysBtnImg);
      }
    }

    checkForAlertInfo();

  dataContent.append(locationContent);

  locationContent.append(
    locationName,
    resolvedAddress,
    locationLatLonDiv,
    weatherBtnCont,
  );

  locationLatLonDiv.append(
    locationLatLonText
  );
}
