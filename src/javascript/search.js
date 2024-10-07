import { createFormElement, createBtnElement } from "./functionsBasic.js";

export function createSearch() {
  const searchContent = document.querySelector("#search-content");
  const placeHolderText = "Enter a location...";
  const searchInput = createFormElement(
    "input",
    "text",
    "search-input",
    placeHolderText
  );
  searchInput.required = true;

  const searchBtn = createBtnElement("search-btn", "Search");

  searchContent.append(searchInput, searchBtn);

  // searchBtn.addEventListener("click", () => {
  //   if (!searchInput.value.trim()) {
  //     alert("Please enter a search term."); // Custom validation message
  //   } else {
  //     // Proceed with your search logic here
  //     console.log(`Searching for: ${searchInput.value}`);
  //   }
  // });
}
