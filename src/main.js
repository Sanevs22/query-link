import "./style.css";
import github from "/github.svg";
import { setupContent } from "./content.js";
import { setupNew } from "./new.js";
document.querySelector("#app").innerHTML = `
  <div class="main"> 
    <p class="read-the-docs">
      <strong>query link</strong>
      <br>
      мультиссылка бесплатно и без регистрации
    </p>

    <div id="content"></div>
    
      <div id="new"></div>

      <a href="https://github.com/Sanevs22/query-link" target="_blank">
      <img src="${github}" class="logo" alt="github logo" />
    </a>
  </div>
`;

setupContent(document.querySelector("#content"));
setupNew(document.querySelector("#new"));
