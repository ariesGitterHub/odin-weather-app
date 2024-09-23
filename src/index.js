import "./styles/styles.css";

import { createTitle } from "./javascript/title.js";
import { createSearch } from "./javascript/search.js"
import { fetchWithHandling } from "./javascript/fetch.js";

document.addEventListener("DOMContentLoaded", () => {
  createTitle();
  createSearch()
  const searchInput = document.querySelector("#search-input"); // Get searchInput from search function
  let query = "";

  const searchButton = document.querySelector("button");
  searchButton.addEventListener("click", () => {
    query = searchInput.value;
    console.log(`Searching for: ${query}`);

    // const url = `https://api.giphy.com/v1/gifs/translate?api_key=bb2006d9d3454578be1a99cfad65913d&s=${query}`;

    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${query}?unitGroup=us&key=5BZ3MHEVJJ7AWTKSA5VSR3473&contentType=json`;

    // fetchGiphy(url);
    fetchWithHandling(url);
  });
});