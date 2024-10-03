import svgEarth1 from "../assets/earth1.svg";
// import svgEarth2 from "../assets/earth2.svg";
import svgUSA from "../assets/usa.svg";
import svgC from "../assets/c.svg";
import svgF from "../assets/f.svg";
import {
  createBtnElement,
  createImgElement,
  // createToggleSwitch,
} from "./basicFunctions.js";
// import { updateDataFC } from "./weatherView.js"

import { convertToCelsius } from "./basicFunctions.js";
import { convertToFahrenheit } from "./basicFunctions.js";

// export function toggleEarthImg() {
//   const worldImg = document.querySelector("#world-img");

//   if (!worldImg) {
//     console.error("Element with ID 'world-img' not found");
//     return; // Exit the function if the element doesn't exist
//   }

//   const myTimeout = setInterval(() => {
//     if (worldImg.src.includes(svgEarth1)) {
//       worldImg.src = svgEarth2;
//     } else {
//       worldImg.src = svgEarth1;
//     }
//   }, 10000);
// }

// function refreshTemp() {
//   const temperatures = document.querySelector("#temperatures");
//   temperatures.style.fontSize = "2rem";
// }

export function displayFC(data) {
  const tempScaleBtn = document.querySelector("#temp-scale-btn");
  tempScaleBtn.value = "F"
  const tempScaleImg = document.querySelector("#temp-scale-img");
  tempScaleImg.src = svgF;

  const temperatures = document.querySelector("#temperatures");

  tempScaleBtn.addEventListener("click", () => {
      if (tempScaleImg.src === svgF && tempScaleBtn.value === "F") {
        tempScaleBtn.value = "C"
        tempScaleImg.src = svgC;
        console.log("Temperature scale set to Celsius.");  

        temperatures.textContent = `Currently: ${convertToCelsius(
          data.currentConditions.temp
        )}°${tempScaleBtn.value} (Feels Like: ${convertToCelsius(
          data.currentConditions.feelslike
        )}°${tempScaleBtn.value})`;

    } else 
    // if (tempScaleImg.src === svgC && tempScaleBtn.value === "C") 
      {
        tempScaleBtn.value = "F";
        tempScaleImg.src = svgF;
        console.log("Temperature scale set to Fahrenheit.");

        temperatures.textContent = `Currently: ${data.currentConditions.temp}°${tempScaleBtn.value} (Feels Like: ${data.currentConditions.feelslike}°${tempScaleBtn.value})`;
        console.log("Temperature scale set to Fahrenheit.");

        // temperatures.textContent = `Currently: ${convertToFahrenheit(
        //   data.currentConditions.temp
        // )}°${tempScaleBtn.value} (Feels Like: ${convertToFahrenheit(
        //   data.currentConditions.feelslike
        // )}°${tempScaleBtn.value})`;
    }

  });
}

export function createBtns() {
  const btnContent = document.querySelector("#btn-content");

  const worldBtn = createBtnElement("world-btn");
  const worldImg = createImgElement("world-img", svgEarth1, "Earth Icon");

  // const toggleC2F = createToggleSwitch("toggle-c2f", true);
  // const tempScaleImg = createImgElement("temp-scale-img", "");

  const tempScaleBtn = createBtnElement("temp-scale-btn");
  tempScaleBtn.value = "F";
  const tempScaleImg = createImgElement("temp-scale-img", svgF, "")  
  const usaBtn = createBtnElement("usa-btn");
  const usaImg = createImgElement("usa-img", svgUSA, "United States Icon");

  btnContent.append(worldBtn, tempScaleBtn,
    //  toggleC2F,
      usaBtn);
  worldBtn.append(worldImg);
  tempScaleBtn.append(tempScaleImg);
  // toggleC2F.append(tempScaleImg);
  usaBtn.append(usaImg); 
}
