import {
  createDivElement,
  createTextElement,
} from "./functionsBasic.js";

export function createMessageView(data) {
  const noDataSelectedYet = `View weather from around the world by entering a location in the search bar. You may also click on the "world button" or the "USA button" for a random capital city's weather report.`;
  
  const dataContent = document.querySelector("#data-content");

  function getMessageInfo() {
    if (data) {
      return;
    } else if (!data) {
      const messageContent = createDivElement("message-content", "");
      const messageText = createTextElement(
        "p",
        "message-text",
        noDataSelectedYet,
        ""
      );
      dataContent.append(messageContent);
      messageContent.append(messageText);

    }
  }
  getMessageInfo();
}
