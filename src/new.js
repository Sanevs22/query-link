import { getContent } from "./list.js";

export function setupNew(element) {
  if (contentCheck()) {
    element.innerHTML = ` 
       <a href="/">Создать новую страницу</a>`;
  } else {
    element.innerHTML = ``;
  }
}

function contentCheck() {
  if (getContent()) {
    return true;
  }
  return false;
}
