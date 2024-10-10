// DIV ELEMENT
export function createDivElement(id) {
  const element = document.createElement("div");
  element.id = id;
  return element;
}

// SPAN ELEMENT
// export function createSpanElement(className, text) {
//   const element = document.createElement("span");
//   element.classList.add(className);
//   element.textContent = text;
//   return element;
// }

export function createSpanElement(id, text) {
  const element = document.createElement("span");
  element.id = id;
  element.textContent = text;
  return element;
}


export function createBreakElement(className) {
  const element = document.createElement("br");
  element.classList.add(className);
  return element;
}

//BTN ELEMENT (i.e., button)
export function createBtnElement(id, text) {
  const button = document.createElement("button");
  button.id = id;
  button.textContent = text;
  return button;
}

// IMG ELEMENT
export function createImgElement(id, src, alt = "") {
  const img = document.createElement("img");
  img.id = id;
  img.src = src;
  img.alt = alt;
  return img;
}

// FORM ELEMENT
export function createFormElement(tag, type, id, placeHolder) {
  const element = document.createElement(tag);
  element.type = type;
  element.id = id;
  element.placeholder = placeHolder;
  return element;
}

// TEXT ELEMENT
export function createTextElement(tag, id, textContent) {
  const element = document.createElement(tag);
  element.id = id;
  element.textContent = textContent;
  return element;
}

export function createTextClassElement(tag, className, text) {
  const element = document.createElement(tag);
  element.className = className;
  element.textContent = text;
  return element;
}


//TOGGLE SWITCH MAKER
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

// CLEAR DIVS
export function clearDivText(divId1, divId2, divId3) {
  const div1 = document.getElementById(divId1);
  if (div1) {
    div1.remove();
  }

  const div2 = document.getElementById(divId2);
  if (div2) {
    div2.remove();
  }

  const div3 = document.getElementById(divId3);
  if (div3) {
    div3.remove();
  }
}

// CLEAR QUERY ??????
export function clearQuery(query) {
  if (query !== "") {
    query = "";
  }
}

export function contentChecker() {
  const dataContent = document.querySelector("#data-content");

  if (dataContent && dataContent.childElementCount > 0) {
  clearDivText("location-content", "middle-content", "weather-content");
  } 
}

