export function createBtnElement(id, text) {
  const button = document.createElement("button");
  button.id = id;
  button.textContent = text;
  return button;
}

export function createImageElement(id, src, alt = "") {
  const img = document.createElement("img");
  img.id = id;
  img.src = src;
  img.alt = alt;
  return img;
};

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
};

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
