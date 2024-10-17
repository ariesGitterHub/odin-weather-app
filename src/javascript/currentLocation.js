import {
  createDivElement,
  createTextElement,
  createRoundBtnElement,
  createImgElement,
} from "./functionsBasic.js";

import svgHourly from "../assets/hourly.svg";
import svgAlert from "../assets/alert.svg";
import svgMultiDay from "../assets/multi-day.svg";

export function createLocationView(query, data) {
  const noWDataAvailable = "No data currently available.";
  const dataContent = document.querySelector("#data-content");
  const alertsData = data.alerts;

  if (!data) {
    console.error(noWDataAvailable);
    return;
  }

  const locationContent = createDivElement("location-content");

  const locationName = createTextElement("h1", "location-name", query);

  const resolvedAddress = createTextElement(
    "p",
    "resolved-address",
    data.resolvedAddress
  );

  const locationLatLonDiv = createDivElement("location-lat-lon-div");
  const locationLatLonText = createTextElement(
    "p",
    "location-lat-lon-text",
    `Latitude: ${data.latitude}/Longitude: ${data.longitude}`
  );


  // const locationLatitudeText = createTextElement(
  //   "p",
  //   "location-latitude-text",
  //   `Latitude: ${data.latitude}/`
  // );

  // const locationLongitudeText = createTextElement(
  //   "p",
  //   "location-longitude-text",
  //   `Longitude: ${data.longitude}`
  // );

    const weatherBtnCont = createDivElement("weather-btn-cont");

    function checkForAlertInfo() {
      const hourlyBtn = createRoundBtnElement("hourly-btn", "round-btn");
      const alertBtn = createRoundBtnElement("alert-btn", "round-btn");
      const multiDayBtn = createRoundBtnElement("multi-day-btn", "round-btn");

      const hourlyBtnImg = createImgElement(
        "hourly-btn-img",
        svgHourly,
        "Hourly Forecast Icon"
      );
      const alertBtnImg = createImgElement(
        "alert-btn-img",
        svgAlert,
        "Weather Alert Icon"
      );
      const multiDayBtnImg = createImgElement(
        "multi-day-btn-img",
        svgMultiDay,
        "Multi-Day Forecast Icon"
      );

      if (alertsData.length > 0) {
        console.log(alertsData);
        weatherBtnCont.append(hourlyBtn, alertBtn, multiDayBtn);
        hourlyBtn.append(hourlyBtnImg);
        alertBtn.append(alertBtnImg);
        multiDayBtn.append(multiDayBtnImg);
      } else {
        weatherBtnCont.append(hourlyBtn, multiDayBtn);
        hourlyBtn.append(hourlyBtnImg);
        multiDayBtn.append(multiDayBtnImg);
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
    // locationLatitudeText,
    // locationLongitudeText,
    locationLatLonText,
  );
}
