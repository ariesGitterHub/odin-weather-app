import svgLatitude from "../assets/latitude.svg";
import svgLongitude from "../assets/longitude.svg";
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

const locationLatLonSunDiv = createDivElement("location-lat-lon-sun-div");

  const locationLatLonDiv = createDivElement("location-lat-lon-div");
  const locationLatitudeDiv = createDivElement("location-latitude-div");
  const locationLatitudeImg = createImgElement(
    "location-latitude-img",
    svgLatitude,
    "Latitude Icon"
  );

  const locationLatitudeText = createTextElement(
    "p",
    "location-latitude-text",
    data.latitude
  );
  const locationLongitudeDiv = createDivElement("location-longitude-div");
  const locationLongitudeImg = createImgElement(
    "location-longitude-img",
    svgLongitude,
    "Longitude Icon"
  );

  const locationLongitudeText = createTextElement(
    "p",
    "location-longitude-text",
    data.longitude
  );

  const sunriseSunsetDiv = createDivElement("sunrise-sunset-div");

  const sunriseDiv = createDivElement("sunrise-div");

  const sunriseImg = createImgElement("sunrise-img", svgSunrise, "Sunrise Icon");

  const sunriseText = createTextElement(
    "p",
    "sunrise-text",
    parseSunrise,
  );

    const sunsetDiv = createDivElement("sunset-div");

    const sunsetImg = createImgElement(
      "sunset-img",
      svgSunset,
      "Sunrise Icon"
    );

  const sunsetText = createTextElement("p", "sunset-text", parseSunset);

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
locationLatLonSunDiv,
    moonPhaseTextImgCont
  );

  locationLatLonSunDiv.append(locationLatLonDiv, sunriseSunsetDiv);

locationLatLonDiv.append(locationLatitudeDiv, locationLongitudeDiv);

locationLatitudeDiv.append(
  locationLatitudeImg,
  locationLatitudeText,);
locationLongitudeDiv.append(
  locationLongitudeImg,
  locationLongitudeText,);

  sunriseSunsetDiv.append(
    sunriseDiv,
    sunsetDiv
  ); 

    sunsetDiv.append(
      sunsetImg,
      sunsetText,
  );

      sunriseDiv.append(sunriseImg, sunriseText);
  moonPhaseTextImgCont.append(moonPhaseText, moonPhaseImg);
}
