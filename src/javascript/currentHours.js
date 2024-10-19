import {
  createDivElement,
  createTextElement,
  createTextClassElement,
} from "./functionsBasic.js";

export function createHourlyView(data) {
  const noWDataAvailable = "No data currently available.";
  const dataContent = document.querySelector("#data-content");

  const hourlyData = data.days; // how many hours? start at the immediate next hour location time, sister up with following days hours if desired max hours is not met?

  function getHourlyInfo() {
    if (!alertsData) {
      console.error(noWDataAvailable);
      return;
    } else if (alertsData.length > 0) {
      console.log(alertsData);

      const alertContent = createDivElement("alert-content");

      const alertTitle = createTextElement("p", "alert-title", "Weather Alert");
      dataContent.append(alertContent);
      alertContent.append(alertTitle);

      alertsData.forEach((alert) => {
        const alertHeadline = createTextClassElement(
          "p",
          "alert-headline",
          `${alert.headline}`
        );
        const alertStartEnd = createTextClassElement(
          "p",
          "alert-start-end",
          `(Starts: ${alert.onset}, Ends: ${alert.ends})`
        );
        const alertDescription = createTextClassElement(
          "p",
          "alert-description",
          `${alert.description}`
        );
        const asterisks = createTextClassElement("p", "asterisks", "***");

        alertContent.append(
          alertHeadline,
          alertStartEnd,
          alertDescription,
          asterisks
        );
      });
    }
  }

  getAlertInfo();
}
