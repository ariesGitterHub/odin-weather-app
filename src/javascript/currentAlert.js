// import { format, parse } from "date-fns";
import {
  createDivElement,
  createImgElement,
  createTextElement,
  createTextClassElement,
} from "./functionsBasic.js";

// import { getMoonPhase } from "./functionsWeather.js";

export function createAlertView(data) {
  const noWDataAvailable = "No data currently available.";
  const dataContent = document.querySelector("#data-content");
  if (!data) {
    console.error(noWDataAvailable);
    return;
  }

  //   const parseSunrise = format(
  //     parse(data.currentConditions.sunrise, "HH:mm:ss", new Date()),
  //     "hh:mm:ss a"
  //   );

  //   const parseSunset = format(
  //     parse(data.currentConditions.sunset, "HH:mm:ss", new Date()),
  //     "hh:mm:ss a"
  //   );

  const alertContent = createDivElement("alert-content");
  const alertTitle = createTextElement("p", "alert-title", "Weather Alert")

  const alertsData = data.alerts;
//   const alertsHeadlineData = data.alerts.headline;

function getAlertInfo() {
  if (alertsData) {
    alertsData.forEach((alert) => {
      const alertHeadline = createTextClassElement(
        "p",
        "alert-headlines",
        `➡ ${alert.headline}`
      );
      alertContent.append(alertHeadline);
    });
  }
}

dataContent.append(alertContent);
alertContent.append(alertTitle);
getAlertInfo();
}
