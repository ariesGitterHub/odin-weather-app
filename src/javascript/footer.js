import { createTextElement } from "./basicFunctions.js";

export function createFooter() {
  const footerContent = document.querySelector("#footer-content");

  const footerText = createTextElement(
    "p",
    "MMM",
    "A Mad Muffin Man Design Studio, ©2024"
  );

  footerContent.append(footerText);
}