import { setupHeader } from "./header.js";
import { setupList, getContent } from "./list.js";
import { setupEditor } from "./editor.js";

export function setupContent(element) {
  if (contentCheck()) {
    element.innerHTML = ` 
        <h1 id="header"></h1>
        <div id="list"></div>`;

    setupHeader(document.querySelector("#header"));
    setupList(document.querySelector("#list"));
  } else {
    element.innerHTML = `
     <h3 id="header">Создать новую страницу</h3>
     <div id="editor"></div>`;
    setupEditor(document.querySelector("#editor"));
  }
}

function contentCheck() {
  if (getContent()) {
    return true;
  }
  return false;
}
