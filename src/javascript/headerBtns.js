import svgEarth1 from "../assets/earth1.svg";
import svgF from "../assets/f.svg";
import svgUSA from "../assets/usa.svg";

import { createBtnElement, createImgElement } from "./functionsBasic.js";

export function createBtns() {
  const btnContent = document.querySelector("#btn-content");
  const worldBtn = createBtnElement("world-btn", "", "round-btn");
  const worldBtnImg = createImgElement(
    "world-btn-img",
    svgEarth1,
    "Earth Icon",
    ""
  );
  const tempScaleBtn = createBtnElement("temp-scale-btn", "", "round-btn");
  tempScaleBtn.value = "F";
  const tempScaleImg = createImgElement(
    "temp-scale-img",
    svgF,
    "Celsius or Fahrenheit Icon",
    ""
  );
  const usaBtn = createBtnElement("usa-btn", "", "round-btn");
  const usaBtnImg = createImgElement(
    "usa-btn-img",
    svgUSA,
    "United States Icon",
    ""
  );

  btnContent.append(worldBtn, tempScaleBtn, usaBtn);
  worldBtn.append(worldBtnImg);
  tempScaleBtn.append(tempScaleImg);
  usaBtn.append(usaBtnImg);
}
