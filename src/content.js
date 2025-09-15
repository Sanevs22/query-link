import { setupHeader } from "./header.js";
import { setupList, getContent } from "./list.js";

export function setupContent(element) {
  if (contentCheck()) {
    element.innerHTML = ` 
        <h1 id="header"></h1>
        <div id="list"></div>`;

    setupHeader(document.querySelector("#header"));
    setupList(document.querySelector("#list"));
  } else {
    element.innerHTML = `
    <h1 id="header">Создай</h1>`;
  }
}

function contentCheck() {
  if (getContent()) {
    return true;
  }
  return false;
}
