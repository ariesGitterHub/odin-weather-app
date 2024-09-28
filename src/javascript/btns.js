import svgEarth1 from "../assets/earth1.svg";
// import svgEarth2 from "../assets/earth2.svg";
import svgUSA from "../assets/usa.svg";
import svgC from "../assets/c.svg";
import svgF from "../assets/f.svg";

function createBtnElement(id, text) {
  const button = document.createElement("button");
  button.id = id;
  button.textContent = text;
  return button;
}

function createImgElement(id, src, alt = "") {
  const img = document.createElement("img");
  img.id = id;
  img.src = src;
  img.alt = alt;
  return img;
};

function createToggleSwitch(id, isChecked) {
  const label = document.createElement("label");
  label.htmlFor = id;

  const input = document.createElement("input");
  input.type = "checkbox";
  input.id = id;
  input.checked = isChecked;

  const span = document.createElement("span");
  span.id = "toggle-slider"; // You can style this class with CSS to look like a toggle switch.

  label.appendChild(input);
  label.appendChild(span);
 
  return label;
}




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

export function displayCF() {
  // const toggleC2F = document.querySelector("#toggle-c2f");
  // const toggleSlider = document.querySelector("#toggle-slider");
  const tempScaleBtn = document.querySelector("#temp-scale-btn");
  tempScaleBtn.value = "F"
  const tempScaleImg = document.querySelector("#temp-scale-img");
  tempScaleImg.src = svgF;
  // toggleSlider.append(tempScaleImg)
  // toggleSlider.textContent = "°F/°C";
  tempScaleBtn.addEventListener("click", () => {
    // console.log(toggleC2F.checked);
    if (tempScaleImg.src === svgF && tempScaleBtn.value === "F") {
      // toggleSlider.textContent = "F";
      tempScaleBtn.value = "C"
      tempScaleImg.src = svgC;
    } else {
      // toggleSlider.textContent = "C";
      tempScaleBtn.value = "F";
      tempScaleImg.src = svgF;
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
  const tempScaleImg = createImgElement("temp-scale-img", "", "")  
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
