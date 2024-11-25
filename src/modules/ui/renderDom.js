export default function renderDom(content, selector, errorMessage) {
  const container = document.querySelector(selector);
  if (container) {
    container.innerHTML = content;
  } else {
    console.error(errorMessage);
  }
}
