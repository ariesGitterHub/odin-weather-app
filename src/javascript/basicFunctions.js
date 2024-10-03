export function createDivElement(id) {
  const element = document.createElement("div");
  element.id = id;
  return element;
}

export function createSpanElement(className, text) {
  const element = document.createElement("span");
  element.classList.add(className);
  element.textContent = text;
  return element;
}

export function createBtnElement(id, text) {
  const button = document.createElement("button");
  button.id = id;
  button.textContent = text;
  return button;
}

export function createImgElement(id, src, alt = "") {
  const img = document.createElement("img");
  img.id = id;
  img.src = src;
  img.alt = alt;
  return img;
}

export function createFormElement(tag, type, id, placeHolder) {
  const element = document.createElement(tag);
  element.id = id;
  element.placeholder = placeHolder;
  return element;
}

export function createTextElement(tag, id, textContent) {
  const element = document.createElement(tag);
  element.id = id;
  element.textContent = textContent;
  return element;
}

// export function handleTextElement(id, textContent) {
//   const element = document.getElementById(id);
//   element.textContent = textContent;
//   return element;
// };

export function createToggleSwitch(id, isChecked) {
  const label = document.createElement("label");
  label.htmlFor = id;

  const input = document.createElement("input");
  input.type = "checkbox";
  input.id = id;
  input.checked = isChecked;

  const span = document.createElement("span");
  span.id = "toggle-slider";

  label.appendChild(input);
  label.appendChild(span);

  return label;
}

// export function clearTextNodes(divId) {
//   const div = document.getElementById(divId);
//   if (div) {
//     Array.from(div.childNodes).forEach((node) => {
//       if (node.nodeType === Node.TEXT_NODE) {
//         node.textContent = ""; // Clear text nodes
//       }
//     });
//   }
// }

// export function clearDivText(divId) {
//   const div = document.getElementById(divId);
//   if (div) {
//     div.innerHTML = ""; // Clears all text and child elements
//   }
// }

export function clearDivText(divId1, divId2) {
  const div1 = document.getElementById(divId1);
  if (div1) {
    div1.remove();
  }

  const div2 = document.getElementById(divId2);
  if (div2) {
    div2.remove();
  }
}

export function clearQuery(query) {
  if (query !== "") {
    query = "";
  }

}

export function convertToCelsius(temp) {
  const celsius = Math.round((((temp - 32) * 5) / 9) * 10) / 10;
  return celsius;
}

export function convertToFahrenheit(temp) {
  const celsius = Math.round(((temp * 9) / 5 + 32) * 10) / 10;
  return celsius;
}
