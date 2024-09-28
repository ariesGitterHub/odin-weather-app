import "./styles/styles.css";

import { createTitle } from "./javascript/title.js";
import { createSearch } from "./javascript/search.js"
import { createBtns, 
  displayCF
  // , toggleEarthImg
 } from "./javascript/btns.js";
import { fetchWithHandling } from "./javascript/fetch.js";

document.addEventListener("DOMContentLoaded", () => {
  createTitle();
  createSearch();
  createBtns();
  // toggleEarthImg();
  displayCF();
  const searchInput = document.querySelector("#search-input"); // Get searchInput from search function
  let query = "";
  const k = "5BZ3MHEVJJ7AWTKSA5VSR3473";

  const searchButton = document.querySelector("button");
  const titleImg1 = document.querySelector("#title-img1");
  const titleImg2 = document.querySelector("#title-img2");
  searchButton.addEventListener("click", () => {
    titleImg1.classList.add("shake");
    setTimeout(() => titleImg1.classList.remove("shake"), 500);
    titleImg2.classList.add("spin");
    setTimeout(() => titleImg2.classList.remove("spin"), 500);
    query = searchInput.value;
    console.log(`Searching for: ${query}`);

    // const url = `https://api.giphy.com/v1/gifs/translate?api_key=bb2006d9d3454578be1a99cfad65913d&s=${query}`;

    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${query}?unitGroup=us&key=${k}&contentType=json`;

    // fetchGiphy(url);
    fetchWithHandling(url);

// const switchButton = document.querySelector(".switch");
// switchButton.addEventListener("click", () => {
//   switchButton.classList.toggle("switched");
// });
  });
});

