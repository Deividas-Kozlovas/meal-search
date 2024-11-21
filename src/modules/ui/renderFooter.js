import footerComponent from "../../components/footer/footerComponent";

export default function renderFooter() {
  const header = document.querySelector("#footer");
  if (header) {
    header.innerHTML = "";
    header.innerHTML = footerComponent();
  } else {
    console.error("Footer section was not found");
  }
}
