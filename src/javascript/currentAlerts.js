import {
  createDivElement,
  createTextElement,
} from "./functionsBasic.js";

export function createAlertsView(data) {
  const noWDataAvailable = "No data currently available.";
  const dataContent = document.querySelector("#data-content");

  const alertsData = data.alerts;

  function getAlertsInfo() {
    if (!alertsData) {
      console.error(noWDataAvailable);
      return;
    } else if (alertsData.length > 0) {
      console.log(alertsData);

      const alertsContent = createDivElement("alerts-content", "");

      const alertsTitle = createTextElement(
        "p",
        "alerts-title",
        "Weather Alert",
        "alerts"
      );
      dataContent.append(alertsContent);
      alertsContent.append(alertsTitle);

      alertsData.forEach((alerts) => {
        const alertsHeadline = createTextElement(
          "p",
          "alerts-headline",
          `${alerts.headline}`,
          "alerts"
        );
        const alertsStartEnd = createTextElement(
          "p",
          "alerts-start-end",
          `(Starts: ${alerts.onset}, Ends: ${alerts.ends})`,
          "alerts"
        );
        const alertsDescription = createTextElement(
          "p",
          "alerts-description",
          `${alerts.description}`,
          "alerts"
        );
        const alertsAsterisks = createTextElement(
          "p",
          "alerts-asterisks",
          "***",
          "alerts"
        );

        alertsContent.append(
          alertsHeadline,
          alertsStartEnd,
          alertsDescription,
          alertsAsterisks
        );
      });
    }
  }

  getAlertsInfo();
}
