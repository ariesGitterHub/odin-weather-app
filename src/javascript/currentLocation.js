import {
  createDivElement,
  createSoloTextElement,
  createRoundBtnElement,
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

  if (!data) {
    console.error(noWDataAvailable);
    return;
  }

  const locationContent = createDivElement("location-content");
  locationContent.style.color = getTempColor(data);

  const locationName = createSoloTextElement("h1", "location-name", query);

  const resolvedAddress = createSoloTextElement(
    "p",
    "resolved-address",
    data.resolvedAddress
  );

  const locationLatLonDiv = createDivElement("location-lat-lon-div");
  const locationLatLonText = createSoloTextElement(
    "p",
    "location-lat-lon-text",
    `Latitude: ${data.latitude}/Longitude: ${data.longitude}`
  );

    const weatherBtnCont = createDivElement("weather-btn-cont");

    function checkForAlertInfo() {
      const hoursBtn = createRoundBtnElement("hours-btn", "round-btn");
      const alertsBtn = createRoundBtnElement("alerts-btn", "round-btn");
      const daysBtn = createRoundBtnElement("days-btn", "round-btn");

      const hoursBtnImg = createImgElement(
        "hours-btn-img",
        svgHours,
        "Hourly Forecast Icon"
      );
      const alertsBtnImg = createImgElement(
        "alerts-btn-img",
        svgAlerts,
        "Weather Alert Icon"
      );
      const daysBtnImg = createImgElement(
        "days-btn-img",
        svgDays,
        "Multi-Day Forecast Icon"
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
