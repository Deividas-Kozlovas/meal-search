import discoverComponent from "../../components/discover/discoverComponent";

export default function renderDiscover() {
  const discover = document.querySelector("#discover");
  if (discover) {
    discover.innerHTML = "";
    discover.innerHTML = discoverComponent();
  } else {
    console.error("discover element was not found");
  }
}
