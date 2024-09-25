import svgEarth1 from "../assets/earth1.svg";
import svgEarth2 from "../assets/earth2.svg";
import svgUSA from "../assets/usa.svg";

function createBtnElement(id, text) {
  const button = document.createElement("button");
  button.id = id;
  button.textContent = text;
  return button;
}

function createToggleSwitch(id, isChecked) {
  const label = document.createElement("label");
  label.htmlFor = id;

  const input = document.createElement("input");
  input.type = "checkbox";
  input.id = id;
  input.checked = isChecked;

  const span = document.createElement("span");
  span.classList.add("toggle-slider"); // You can style this class with CSS to look like a toggle switch.

  label.appendChild(input);
  label.appendChild(span);

  return label;
}


function createImgElement(id, src, alt = "") {
  const img = document.createElement("img");
  img.id = id;
  img.src = src;
  img.alt = alt;
  return img;
};

export function createBtns() {
  const btnContent = document.querySelector("#btn-content");

  const worldBtn = createBtnElement("world-btn");
  const worldImg1 = createImgElement("world-img1", svgEarth1, "Earth Icon");
  const worldImg2 = createImgElement("world-img21", svgEarth2, "Earth Icon");

  const toggleSwitch = createToggleSwitch("myToggle", true);
  
  const usaBtn = createBtnElement("usa-btn");
  const usaImg = createImgElement("usa-img", svgUSA, "United States Icon");

  btnContent.append(worldBtn, toggleSwitch, usaBtn);
  worldBtn.append(worldImg1);
  usaBtn.append(usaImg);
}
