import {
  createDivElement,
  createSoloTextElement,
  createMultiTextElement,
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

      const alertsContent = createDivElement("alerts-content");

      const alertsTitle = createSoloTextElement("p", "alerts-title", "Weather Alert");
      dataContent.append(alertsContent);
      alertsContent.append(alertsTitle);

      alertsData.forEach((alerts) => {
        const alertsHeadline = createMultiTextElement(
          "p",
          "alerts-headline",
          `${alerts.headline}`
        );
        const alertsStartEnd = createMultiTextElement(
          "p",
          "alerts-start-end",
          `(Starts: ${alerts.onset}, Ends: ${alerts.ends})`
        );
        const alertsDescription = createMultiTextElement(
          "p",
          "alerts-description",
          `${alerts.description}`
        );
        const alertsAsterisks = createMultiTextElement(
          "p",
          "alerts-asterisks",
          "***"
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
