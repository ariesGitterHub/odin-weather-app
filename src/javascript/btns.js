import svgEarth1 from "../assets/earth1.svg";
import svgUSA from "../assets/usa.svg";
import svgF from "../assets/f.svg";
import { createRoundBtnElement, createImgElement } from "./functionsBasic.js";

export function createBtns() {
  const btnContent = document.querySelector("#btn-content");
  const worldBtn = createRoundBtnElement("world-btn", "round-btn");
  const worldImg = createImgElement("world-img", svgEarth1, "Earth Icon");
  const tempScaleBtn = createRoundBtnElement("temp-scale-btn", "round-btn");
  tempScaleBtn.value = "F";
  const tempScaleImg = createImgElement("temp-scale-img", svgF, "");
  const usaBtn = createRoundBtnElement("usa-btn", "round-btn");
  const usaImg = createImgElement("usa-img", svgUSA, "United States Icon");

  btnContent.append(worldBtn, tempScaleBtn, usaBtn);
  worldBtn.append(worldImg);
  tempScaleBtn.append(tempScaleImg);
  usaBtn.append(usaImg);
}
