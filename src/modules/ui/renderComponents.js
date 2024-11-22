export default function renderComponent(component, sectionId, message) {
  const renderSection = document.querySelector(sectionId);
  if (renderSection) {
    renderSection.innerHTML = "";
    renderSection.innerHTML = component;
  } else {
    console.error(message);
  }
}
