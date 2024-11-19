import headerComponent from "../../components/headerComponent/headerComponent";

export default function renderHeader() {
  const header = document.querySelector("#header");
  if (header) {
    header.innerHTML = "";
    header.innerHTML = headerComponent();
  } else {
    console.error("Header section was not found");
  }
}
