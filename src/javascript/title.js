import svgTitleWindAndLeaves from "../assets/titleWindAndLeaves.svg";
import svgTitleWeathervane from "../assets/titleWeathervane.svg"
import { createImageElement, createTextElement } from "./basicFunctions.js"

export function createTitle() {
  const titleContent = document.querySelector("#title-content");

  const titleImg1 = createImageElement("title-img1", svgTitleWindAndLeaves, "Wind And Leaves Icon");

  const titleText = createTextElement("h1", "title-text", "Weathervane");

  const titleImg2 = createImageElement("title-img2", svgTitleWeathervane,  "Weathervane Icon");

  titleContent.append(titleImg1, titleText, titleImg2);
}