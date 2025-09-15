export function setupList(element) {
  const content = getContent();
  element.innerHTML = content;
}

export function getContent() {
  const linkCount = 5;
  const urlParams = new URLSearchParams(window.location.search);

  let content = "";
  for (let i = 1; i <= linkCount; i++) {
    const item = getLink(urlParams, i);

    if (item) {
      content += item;
    }
  }

  if (content.trim().length === 0) {
    return false;
  }
  return content;
}

function getLink(urlParams, number) {
  const title = urlParams.get(`title${number}`);
  const link = urlParams.get(`link${number}`);

  if (!title || !link) {
    return null;
  }

  if (title.trim().length === 0) {
    return null;
  }

  if (link.trim().length === 0) {
    return null;
  }
  return `<a target="_blank" href="${link}" class="link" >${title}</a>`;
}
