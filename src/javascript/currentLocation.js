import svgSunrise from "../assets/sunrise.svg";
import svgSunset from "../assets/sunset.svg";

import { format, parse } from "date-fns";
import {
  createDivElement,
  createImgElement,
  createTextElement,
} from "./functionsBasic.js";

import { getMoonPhase } from "./functionsWeather.js";

export function createLocationView(query, data) {
  const noWDataAvailable = "No data currently available.";
  const dataContent = document.querySelector("#data-content");
  if (!data) {
    console.error(noWDataAvailable);
    return;
  }

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

    const locationLatLonDiv = createDivElement("location-lat-lon-div");

  const locationLatitude = createTextElement(
    "p",
    "location-latitude",
    `Latitude: ${data.latitude}/ `
  );

    const locationLongitude = createTextElement(
      "p",
      "location-longitude",
      `Longitude: ${data.longitude}`
    );

  const sunriseSunsetDiv = createDivElement("sunrise-sunset-div");

  // const sunriseImg = createImgElement("sunrise-img", svgSunrise, "Sunrise Icon");

  const sunriseText = createTextElement(
    "p",
    "sunrise-text",
    `Sunrise: ${parseSunrise}/`
  );

    // const sunsetImg = createImgElement(
    //   "sunset-img",
    //   svgSunset,
    //   "Sunrise Icon"
    // );

    const sunsetText = createTextElement("p", "sunset-text", `Sunset: ${parseSunset}`);

  const moonPhaseTextImgCont = createDivElement("moon-phase-text-img-cont");

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

  dataContent.append(locationContent);

  locationContent.append(
    locationName,
    resolvedAddress,
locationLatLonDiv,
    sunriseSunsetDiv,
    moonPhaseTextImgCont
  );

locationLatLonDiv.append(locationLatitude, locationLongitude);

  sunriseSunsetDiv.append(
    // sunriseImg,
     sunriseText,
      // sunsetImg,
       sunsetText); 
  moonPhaseTextImgCont.append(moonPhaseText, moonPhaseImg);
}
