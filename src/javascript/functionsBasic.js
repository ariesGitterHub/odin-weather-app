// DIV ELEMENT
export function createDivElement(id, className) {
  const element = document.createElement("div");
  element.id = id;
  element.className = className;
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

export function createRoundBtnElement(id, className) {
  const button = document.createElement("button");
  button.id = id;
  button.className = className;
  return button;
}

// IMG ELEMENT
export function createImgElement(id, src, alt = "", className) {
  const img = document.createElement("img");
  img.id = id;
  img.src = src;
  img.alt = alt;
  img.className = className;
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
export function createSoloTextElement(tag, id, textContent) {
  const element = document.createElement(tag);
  element.id = id;
  element.textContent = textContent;
  return element;
}

// export function createTextClassElement(tag, className, text) {
//   const element = document.createElement(tag);
//   element.className = className;
//   element.textContent = text;
//   return element;
// }

export function createMultiTextElement(tag, id, textContent, className) {
  const element = document.createElement(tag);
  element.id = id;
  element.textContent = textContent;
  element.className = className;
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
export function clearDivText(divId1, divId2, divId3, divId4) {
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

  const div4 = document.getElementById(divId4);
  if (div4) {
    div4.remove();
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
  clearDivText("location-content", "alert-content", "days-content", "weather-content");
  } 
}


export function toggleContentDiv(id) {
  const targetDiv = document.getElementById(id);
  if (targetDiv.style.display === "none") {
    targetDiv.style.display = "flex";
  } else {
    targetDiv.style.display = "none";
  }
}

export function clickLocationContentBtn(id, data) {
  const dataSet = data[id];
  const targetBtn = document.getElementById(`${id}-btn`);
  if (dataSet && targetBtn) {
    // const targetBtn = document.getElementById(`${id}-btn`);
    targetBtn.addEventListener("click", () => {
      toggleContentDiv(`${id}-content`);
    });
  } else {
    console.error(
      `Button with ID ${id}-btn not found or no ${id} data is available.`
    );
  }
}


export function getTodayDate() {
  const today = new Date();
  const year = today.getFullYear();
  const month = (today.getMonth() + 1).toString().padStart(2, "0");
  const day = today.getDate().toString().padStart(2, "0");
  return `${year}-${month}-${day}`;
}



export function createDataCurrentElements(target, targetSrc, targetData) {
  const targetDiv = createDivElement(`${target}-div`, "data-current-div");
  const targetImg = createImgElement(
    `${target}-img`,
    targetSrc,
    `${target} icon`,
    "data-current-img"
  );
  const targetText = createMultiTextElement(
    "p",
    `${target}-text`,
    targetData,
    "data-current-text"
  );
  return {
    targetDiv,
    targetImg,
    targetText,
  };
}



export function createDataDaysElements(target, targetSrc, targetData) {
  const targetDiv = createDivElement(`${target}-div`, "data-days-div");
  const targetImg = createImgElement(
    `${target}-img`,
    targetSrc,
    `${target} icon`,
    "data-days-img"
  );
  const targetText = createMultiTextElement(
    "p",
    `${target}-text`,
    targetData,
    "data-days-text"
  );
  return {
    targetDiv,
    targetImg,
    targetText,
  };
}