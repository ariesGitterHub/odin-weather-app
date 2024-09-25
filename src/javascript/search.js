// function createImageElement(id, src, alt = "") {
//   const img = document.createElement("img");
//   img.id = id;
//   img.src = src;
//   img.alt = alt;
//   return img;
// };

// function createTextElement(tag, id, textContent) {
//   const element = document.createElement(tag);
//   element.id = id;
//   element.textContent = textContent;
//   return element;
// };

function createFormElement(tag, type, id, placeHolder) {
  const element = document.createElement(tag);
  element.id = id;
  element.placeholder = placeHolder;
  return element;
};

function createBtnElement(id, text) {
  const button = document.createElement("button");
  button.id = id;
  button.classList.add("nav-btn");
  button.textContent = text;
  return button;
};

export function createSearch() {
  const searchContent = document.querySelector("#search-content");
  const placeHolderText = "Location, state/country..."; 
  const searchInput = createFormElement("input", "text", "search-input", placeHolderText);
  
  const searchBtn = createBtnElement("search-btn", "Search");

  searchContent.append(searchInput, searchBtn);
};