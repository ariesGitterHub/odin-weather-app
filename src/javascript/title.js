import svgTitleWindAndLeaves from "../assets/titleWindAndLeaves.svg";
import svgTitleWeathervane from "../assets/titleWeathervane.svg"
import { createDivElement, createImgElement, createTextElement } from "./functionsBasic.js";

export function createTitle() {
  const titleContent = document.querySelector("#title-content");

  const titleImgDiv = createDivElement("title-img-div");

  const titleImg1 = createImgElement(
    "title-img1",
    svgTitleWindAndLeaves,
    "Wind And Leaves Icon"
  );

  const titleText = createTextElement("h1", "title-text", "Weathervane");

  const titleImg2 = createImgElement("title-img2", svgTitleWeathervane, "Weathervane Icon");

  const mmmText = createTextElement(
    "p",
    "MMM",
    "Mad Muffin Man Design Studio, ©2024"
  );

  titleContent.append(titleImgDiv, mmmText);
  titleImgDiv.append(titleImg1, titleText, titleImg2);
}