import svgWeathervane from "../assets/weathervane.svg"

export function createTitle() {
    const titleContent = document.querySelector("#title-content");
    const titleText = document.createElement("h1");
    titleText.id = "title-text";
    titleText.textContent = "Weathervane";

    const titleImg = document.createElement("img");
    titleImg.id = "title-img";
    titleImg.src = svgWeathervane;

    titleContent.append(titleText, titleImg);
}