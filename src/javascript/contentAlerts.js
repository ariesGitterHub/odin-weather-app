import { createDivElement, createTextElement } from "./functionsBasic.js";

export function createAlertsView(data) {
  const noWDataAvailable = "No data currently available.";
  const dataContent = document.querySelector("#data-content");

  const alertsData = data.alerts;

  function getAlertsInfo() {
    if (!data) {
      console.error(noWDataAvailable);
      return;
    } else if (alertsData.length > 0) {
      const alertsContent = createDivElement("alerts-content", "");
      const alertsTitle = createTextElement(
        "p",
        "alerts-title",
        "Weather Alert",
        ""
      );
      dataContent.append(alertsContent);
      alertsContent.append(alertsTitle);

      alertsData.forEach((alerts) => {
        const headlineData = alerts.headline;
        const onsetData = alerts.onset;
        const endData = alerts.ends;
        const descriptionData = alerts.description;

        const alertsHeadline = createTextElement(
          "p",
          "",
          headlineData,
          "alerts-headline"
        );
        const alertsStartEnd = createTextElement(
          "p",
          "",
          `(Starts: ${onsetData}, Ends: ${endData})`,
          "alerts-start-end"
        );
        const alertsDescription = createTextElement(
          "p",
          "",
          descriptionData,
          "alerts-description"
        );
        const alertsAsterisks = createTextElement(
          "p",
          "",
          "***",
          "alerts-asterisks"
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
