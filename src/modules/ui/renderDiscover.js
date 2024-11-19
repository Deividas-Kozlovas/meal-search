import discoverComponent from "../../components/discover/discoverComponent";
import getSixMeals from "../api/getSixMeals";

export default async function renderDiscover() {
  const discover = document.querySelector("#discover");
  if (discover) {
    discover.innerHTML = "";

    try {
      const sixMeals = await getSixMeals();
      discover.innerHTML = discoverComponent(sixMeals);
    } catch (error) {
      console.error("Error rendering discover component:", error);
      discover.innerHTML =
        "<p>Failed to load recipes. Please try again later.</p>";
    }
  } else {
    console.error("Discover element was not found");
  }
}
