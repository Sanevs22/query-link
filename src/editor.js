export function setupEditor(element) {
  element.innerHTML = `
        <div id="list">
            <input class="input_text" placeholder="Название страницы" id="header_text" type="text">
            <input class="input_text" placeholder="Заголовок 1" id="title_1" type="text">
            <input class="input_text" placeholder="Ссылка 1" id="link_1" type="text">

            <input class="input_text" placeholder="Заголовок 2" id="title_2" type="text">
            <input class="input_text" placeholder="Ссылка 2" id="link_2" type="text">

            <input class="input_text" placeholder="Заголовок 3" id="title_3" type="text">
            <input class="input_text" placeholder="Ссылка 3" id="link_3" type="text">

            <input class="input_text" placeholder="Заголовок 4" id="title_4" type="text">
            <input class="input_text" placeholder="Ссылка 4" id="link_4" type="text">

            <input class="input_text" placeholder="Заголовок 5" id="title_5" type="text">
            <input class="input_text" placeholder="Ссылка 5" id="link_5" type="text">

            <button class="link" id="button_editor">Получить ссылку</button>
         </div>`;
  const urlParams = new URLSearchParams(window.location.search);

  setHeader(urlParams, document.querySelector("#header_text"));
  setTitle(urlParams, document.querySelector("#title_1"), 1);
  setLink(urlParams, document.querySelector("#link_1"), 1);

  setTitle(urlParams, document.querySelector("#title_2"), 2);
  setLink(urlParams, document.querySelector("#link_2"), 2);

  setTitle(urlParams, document.querySelector("#title_3"), 3);
  setLink(urlParams, document.querySelector("#link_3"), 3);

  setTitle(urlParams, document.querySelector("#title_4"), 4);
  setLink(urlParams, document.querySelector("#link_4"), 4);

  setTitle(urlParams, document.querySelector("#title_5"), 5);
  setLink(urlParams, document.querySelector("#link_5"), 5);

  setupButton(urlParams, document.querySelector("#button_editor"));
}

export function setHeader(urlParams, element) {
  element.addEventListener("input", (e) => {
    const value = e.target.value;
    urlParams.set("header", value);
  });
}

export function setTitle(urlParams, element, number) {
  element.addEventListener("input", (e) => {
    urlParams.set(`title${number}`, e.target.value);
  });
}

export function setLink(urlParams, element, number) {
  element.addEventListener("input", (e) => {
    urlParams.set(`link${number}`, e.target.value);
  });
}

export function setupButton(urlParams, element) {
  const setCounter = () => {
    const host = "https://query-link.vercel.app/?";
    const url = host + urlParams.toString();
    window.open(url, "_blank");
  };
  element.addEventListener("click", () => setCounter());
}
