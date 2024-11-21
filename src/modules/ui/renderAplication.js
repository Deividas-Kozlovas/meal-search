import mobileAppComponent from "../../components/mobileApp/mobileAppComponent";

export default function renderMobileApp() {
  const aplication = document.querySelector("#mobileApp");
  if (aplication) {
    aplication.innerHTML = "";
    aplication.innerHTML = mobileAppComponent();
  } else {
    console.error("mobileApp section was not found");
  }
}
