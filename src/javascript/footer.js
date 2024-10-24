// UNUSED; KEEP THIS FILE AS A FUTURE PROJECT TEMPLATE

import { createTextElement } from "./functionsBasic.js";

export function createFooter() {
  const footerContent = document.querySelector("#footer-content");

  const footerText = createTextElement(
    "p",
    "MMM",
    "Mad Muffin Man Design Studio, ©2024"
  );

  footerContent.append(footerText);
}