import { format, parse } from "date-fns";
import {
  // createBreakElement,
  createDivElement,
  createImgElement,
  createTextElement,
} from "./functionsBasic.js";

import { styleDayNight } from "./functionsWeather.js";
import { getMoonPhase } from "./functionsWeather.js";

export function createLocationView(query, data) {
  const noWDataAvailable = "No data currently available.";
  const dataContent = document.querySelector("#data-content");
  if (!data) {
    console.error(noWDataAvailable);
    return;
  }

  // const parseLastUpdateLocalTime = format(
  //   parse(data.currentConditions.datetime, "HH:mm:ss", new Date()),
  //   "hh:mm:ss a"
  // );

  const parseSunrise = format(
    parse(data.currentConditions.sunrise, "HH:mm:ss", new Date()),
    "hh:mm:ss a"
  );

  const parseSunset = format(
    parse(data.currentConditions.sunset, "HH:mm:ss", new Date()),
    "hh:mm:ss a"
  );

  const locationContent = createDivElement("location-content");

  const locationName = createTextElement("h1", "location-name", query);

  const resolvedAddress = createTextElement(
    "p",
    "resolved-address",
    data.resolvedAddress
  );

  const locationLatLon = createTextElement(
    "p",
    "latitude-longitude",
    `(Latitude: ${data.latitude}, Longitude: ${data.longitude})`
  );

  const sunriseSunset = createTextElement(
    "p",
    "sunrise-sunset",
    `Sunrise: ${parseSunrise}, Sunset: ${parseSunset}`
  );

  const moonContent = createDivElement("moon-content");

  // const moonPhaseCont = createDivElement("moon-phase-cont")
  const moonPhaseText = createTextElement(
    "p",
    "moon-phase-text",
    getMoonPhase(data).moonPhase
  );
  const moonPhaseImg = createImgElement(
    "moon-phase-img",
    getMoonPhase(data).moonSrc,
    "Current moon phase"
  );

  dataContent.append(locationContent, moonContent);

  locationContent.append(
    locationName,
    resolvedAddress,
    locationLatLon,
    sunriseSunset,
    moonContent,
  );

  moonContent.append(moonPhaseText, moonPhaseImg);
  // moonPhaseCont.append(moonPhaseText, moonPhaseImg);

  // styleDayNight(data);
}
