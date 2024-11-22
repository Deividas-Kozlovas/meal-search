export default function renderPage(component, sectionId, message) {
  const renderSection = document.querySelector(sectionId);

  if (renderSection) {
    renderSection.innerHTML = component;
  } else {
    console.error(message);
  }
}
