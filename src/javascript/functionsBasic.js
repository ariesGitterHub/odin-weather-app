import btnAudioFile from "../assets/sound-click.mp3";

//ELEMENT CREATOR FUNCTIONS

// BR ELEMENT CREATOR
export function createBreakElement(className) {
  const element = document.createElement("br");
  element.classList.add(className);
  return element;
}

//BTN ELEMENT CREATOR
export function createBtnElement(id, textContent, className) {
  const button = document.createElement("button");
  button.id = id;
  button.textContent = textContent;
  button.className = className;
  return button;
}

// DIV ELEMENT CREATOR
export function createDivElement(id, className) {
  const element = document.createElement("div");
  element.id = id;
  element.className = className;
  return element;
}

// IMG ELEMENT CREATOR
export function createImgElement(id, src, alt = "", className) {
  const img = document.createElement("img");
  img.id = id;
  img.src = src;
  img.alt = alt;
  img.className = className;
  return img;
}

// FORM ELEMENT CREATOR
export function createFormElement(tag, type, id, placeHolder) {
  const element = document.createElement(tag);
  element.type = type;
  element.id = id;
  element.placeholder = placeHolder;
  return element;
}

// SPAN ELEMENT  CREATOR
export function createSpanElement(id, textContent, className) {
  const element = document.createElement("span");
  element.id = id;
  element.textContent = textContent;
  element.className = className;
  return element;
}

// TEXT ELEMENT  CREATOR
export function createTextElement(tag, id, textContent, className) {
  const element = document.createElement(tag);
  element.id = id;
  element.textContent = textContent;
  element.className = className;
  return element;
}

// A MORE EFFICIENT ELEMENT CREATOR (THIS WAS SO MUCH FUN TO BUILD!!!)
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

// UTILITY FUNCTIONS

// ANIMATE TITLE IMGS
export function clickEffects() {
  const titleImg1 = document.querySelector("#title-img1");
  const titleImg2 = document.querySelector("#title-img2");

  titleImg1.classList.add("spin-ud");
  setTimeout(() => titleImg1.classList.remove("spin-ud"), 500);
  titleImg2.classList.add("spin-lr");
  setTimeout(() => titleImg2.classList.remove("spin-lr"), 500);
}

// AUDIO PLAYER
const btnAudio = new Audio(btnAudioFile);
btnAudio.preload = "auto";

export function playClickSound() {
  btnAudio.currentTime = 0; // Reset the audio to the beginning
  btnAudio.play();
}

export function getBtnSoundEffect() {
  const btnSound = document.querySelectorAll("button");
  btnSound.forEach((button) => {
    button.addEventListener("click", (event) => {
      playClickSound(event);
    });
  });
}

// CLEAR DIV TEXT
export function clearDivText(divId1, divId2, divId3, divId4, divId5, divId6) {
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
  const div5 = document.getElementById(divId5);
  if (div5) {
    div5.remove();
  }
  const div6 = document.getElementById(divId6);
  if (div6) {
    div6.remove();
  }
}

// CHECKS CONTENT AND CLEARS DIVS USING clearDivText FUNCTION ABOVE
export function contentChecker() {
  const dataContent = document.querySelector("#data-content");

  if (dataContent && dataContent.childElementCount > 0) {
    clearDivText(
      "message-content",
      "location-content",
      "hours-content",
      "alerts-content",
      "days-content",
      "weather-content"
    );
  }
}

// CLEAR QUERY - UNUSED! DID NOT WORK TOO WELL
export function clearQuery(query) {
  if (query !== "") {
    query = "";
  }
}

export function toggleContentDivStyleBtn(id) {
  const targetDiv = document.getElementById(`${id}-content`);
  const targetBtn = document.getElementById(`${id}-btn`);
  if (targetDiv.style.display === "none") {
    targetDiv.style.display = "flex";
    targetBtn.style.backgroundColor = "var(--alerts)";
  } else {
    targetDiv.style.display = "none";
    targetBtn.style.backgroundColor = "var(--white)";
  }
}

export function unToggleContentDivStyleBtn(id) {
  // const targetDiv = document.getElementById(id);
  const hoursBtn = document.querySelector("#hours-btn");
  const hoursContent = document.querySelector("#hours-content");

  const alertsBtn = document.querySelector("#alerts-btn");
  const alertsContent = document.querySelector("#alerts-content");

  const daysBtn = document.querySelector("#days-btn");
  const daysContent = document.querySelector("#days-content");

  // If alertsBtn is present, for all three buttons: hours, alerts, days
  if (alertsBtn) {
    // hours-btn
    if (id !== "alerts" && id !== "days") {
      alertsContent.style.display = "none";
      alertsBtn.style.backgroundColor = "var(--white)";
      daysContent.style.display = "none";
      daysBtn.style.backgroundColor = "var(--white)";
    }

    // alert-btn
    else if (id !== "hours" && id !== "days") {
      hoursContent.style.display = "none";
      hoursBtn.style.backgroundColor = "var(--white)";
      daysContent.style.display = "none";
      daysBtn.style.backgroundColor = "var(--white)";
    }

    // days-btn
    else {
      hoursContent.style.display = "none";
      hoursBtn.style.backgroundColor = "var(--white)";
      alertsContent.style.display = "none";
      alertsBtn.style.backgroundColor = "var(--white)";
    }
  }
  // Otherwise only two btns: hours and days
  else {
    // hours-btn
    if (id !== "days") {
      daysContent.style.display = "none";
      daysBtn.style.backgroundColor = "var(--white)";
    }
    // days-btn
    else {
      hoursContent.style.display = "none";
      hoursBtn.style.backgroundColor = "var(--white)";
    }
  }
}

// EVENT LISTENERS FOR LOCATION BTNS THAT USE TOGGLE/UNTOGGLE DIV FUNCTIONS
export function clickLocationContentBtn(
  id
  // , data
) {
  // const dataSet = data[id];
  // console.log(`This dataSet: ${dataSet}`);

  const targetBtn = document.getElementById(`${id}-btn`);
  if (
    // dataSet &&
    targetBtn
  ) {
    // const targetBtn = document.getElementById(`${id}-btn`);
    targetBtn.addEventListener("click", () => {
      getBtnSoundEffect();
      unToggleContentDivStyleBtn(id);
      // toggleContentDiv(`${id}-content`);
      // toggleContentDiv(id);
      toggleContentDivStyleBtn(id);
    });
  } else {
    console.error(
      `No WEATHER ALERTS, as no ${id} data is currently available.`
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

export function getTomorrowDate() {
  const today = new Date(); // Get today's date
  today.setDate(today.getDate() + 1); // Add one day to today's date
  const year = today.getFullYear();
  const month = (today.getMonth() + 1).toString().padStart(2, "0"); // Month is zero-indexed
  const day = today.getDate().toString().padStart(2, "0");
  return `${year}-${month}-${day}`; // Format as "YYYY-MM-DD"
}

export function getCurrentTimeIn24Format() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");
  return `${hours}:${minutes}:${seconds}`;
}

export function roundUpToNextHourNum(time) {
  let [hours, minutes] = time.split(":").map(Number);
  return minutes > 0 ? (hours + 1) % 24 : hours;
}
