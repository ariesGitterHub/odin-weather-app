import {
  createDivElement,
  createTextElement,
} from "./functionsBasic.js";

export function createMessageView(data) {
  const worldButton = "world button";
  const usaButton = "USA button";

  const noDataSelectedYet = `View weather activity from around the world by entering a municipal location in the search bar above. You may also click on the "${worldButton}" or the "${usaButton}" for a random capital city's weather report.`;

  const dataContent = document.querySelector("#data-content");

  function getMessageInfo() {
    // Clear previous messages
    dataContent.innerHTML = "";

    // Handle error or no data
    if (data && data.error) {
      const messageContent = createDivElement(
        "message-content",
        "error-message"
      );
      const messageText = createTextElement(
        "p",
        "message-text",
        data.error,
        ""
      );
      dataContent.append(messageContent);
      messageContent.append(messageText);
    } else if (!data) {
      // Handle case where data is null
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
