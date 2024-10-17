import {
  createDivElement,
  createTextElement,
} from "./functionsBasic.js";

export function createLocationView(query, data) {
  const noWDataAvailable = "No data currently available.";
  const dataContent = document.querySelector("#data-content");
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

  const locationLatitudeText = createTextElement(
    "p",
    "location-latitude-text",
    `Latitude: ${data.latitude}/`
  );

  const locationLongitudeText = createTextElement(
    "p",
    "location-longitude-text",
    `Longitude: ${data.longitude}`
  );

  dataContent.append(locationContent);

  locationContent.append(
    locationName,
    resolvedAddress,
    locationLatLonDiv,
  );

  locationLatLonDiv.append(locationLatitudeText, locationLongitudeText);
}
