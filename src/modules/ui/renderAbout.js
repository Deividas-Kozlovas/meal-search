import aboutComponent from "../../components/about/aboutComponent";

export default function renderAbout() {
  const about = document.querySelector("#about");
  if (about) {
    about.innerHTML = "";
    about.innerHTML = aboutComponent();
  } else {
    console.error("About section was not found");
  }
}
