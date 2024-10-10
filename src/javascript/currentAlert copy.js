// import { format, parse } from "date-fns";
import {
  createDivElement,
  createImgElement,
  createTextElement,
  createTextClassElement,
  createBtnElement,
} from "./functionsBasic.js";

// import { getMoonPhase } from "./functionsWeather.js";

export function createAlertView(data) {
  const noWDataAvailable = "No data currently available.";
  const dataContent = document.querySelector("#data-content");

  const alertsData = data.alerts;

    function getAlertInfo() {
  if (!alertsData) {
    console.error(noWDataAvailable);
    return;
  } else if (alertsData.length > 0) {
    console.log(alertsData);

    const alertContent = createDivElement("alert-content");
    const hourlyBtn = createBtnElement("hourly-btn", "Hourly")
    const alertBtn = createBtnElement("alert-btn", "Alert");
    // const alertTitle = createTextElement("p", "alert-title", "Weather Alert");
    const sevenDayBtn = createBtnElement("seven-day-btn", "7 Day")
    dataContent.append(alertContent);
    // alertContent.append(alertTitle);
        alertContent.append(hourlyBtn, alertBtn, sevenDayBtn);

    alertsData.forEach((alert) => {
      const alertHeadline = createTextClassElement(
        "p",
        "alert-headlines",
        `➤ ${alert.event}: ${alert.headline} (ends: ${alert.ends})`
      );
      alertContent.append(alertHeadline);
    });
  }
}

// alertContent.append(alertTitle);
getAlertInfo();
}
