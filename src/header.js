export function setupHeader(element) {
  const urlParams = new URLSearchParams(window.location.search);
  const header = urlParams.get("header");

  if (!header) {
    return null;
  }

  if (header.length > 0) {
    element.innerHTML = `${header}`;
  }
}
