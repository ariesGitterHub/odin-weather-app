// BR ELEMENT
export function createBreakElement(className) {
  const element = document.createElement("br");
  element.classList.add(className);
  return element;
}

//BTN ELEMENT (i.e., button)
export function createBtnElement(id, textContent, className) {
  const button = document.createElement("button");
  button.id = id;
  button.textContent = textContent;
  button.className = className;
  return button;
}

// DIV ELEMENT
export function createDivElement(id, className) {
  const element = document.createElement("div");
  element.id = id;
  element.className = className;
  return element;
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

 // SPAN ELEMENT
export function createSpanElement(className) {
  const element = document.createElement("br");
  element.classList.add(className);
  return element;
}

// TEXT ELEMENT
export function createTextElement(tag, id, textContent, className) {
  const element = document.createElement(tag);
  element.id = id;
  element.textContent = textContent;
  element.className = className;
  return element;
}

//TOGGLE SWITCH MAKER
// export function createToggleSwitch(id, isChecked) {
//   const label = document.createElement("label");
//   label.htmlFor = id;

//   const input = document.createElement("input");
//   input.type = "checkbox";
//   input.id = id;
//   input.checked = isChecked;

//   const span = document.createElement("span");
//   span.id = "toggle-slider";

//   label.appendChild(input);
//   label.appendChild(span);

//   return label;
// }

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

export function contentChecker() {
  const dataContent = document.querySelector("#data-content");

  if (dataContent && dataContent.childElementCount > 0) {
  clearDivText("location-content", "alert-content", "days-content", "weather-content");
  } 
}

// CLEAR QUERY
// export function clearQuery(query) {
//   if (query !== "") {
//     query = "";
//   }
// }

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

// export function createWeatherElements(targetWord, targetSrc, targetData, groupClass) {
//   const targetDiv = createDivElement(
//     `${targetWord}-div`, 
//     `${groupClass}-div`
//   );
//   const targetImg = createImgElement(
//     `${targetWord}-img`,
//     targetSrc,
//     `${targetWord} icon`,
//     `${groupClass}-img`
//   );
//   const targetText = createTextElement(
//     `p`,
//     `${targetWord}-text`,
//     targetData,
//     `${groupClass}-text`
//   );
//   return {
//     targetDiv,
//     targetImg,
//     targetText,
//   };
// }

// THIS WAS SO MUCH FUN TO BUILD!!!
export function createWeatherElements(
  targetWord,
  targetSrc,
  targetData,
  groupClass,
  useId = true
) {
  const targetDiv = createDivElement(
    useId ? `${targetWord}-div` : "",
    `${groupClass}-div`
  );
  const targetImg = createImgElement(
    useId ? `${targetWord}-img` : "",
    targetSrc,
    `${targetWord} icon`,
    `${groupClass}-img`
  );
  const targetText = createTextElement(
    "p",
    useId ? `${targetWord}-text` : "",
    targetData,
    `${groupClass}-text`
  );

  return {
    targetDiv,
    targetImg,
    targetText,
  };
}
