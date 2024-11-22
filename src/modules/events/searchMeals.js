import ajaxService from "../utils/ajaxService";
import mealsPage from "../../pages/mealsPage";
import renderPage from "../ui/renderPage";

export default function searchMeals() {
  const searchInput = document.querySelector("#search-input");

  if (searchInput) {
    searchInput.addEventListener("keydown", async (event) => {
      const query = event.target.value.trim();

      if (event.key === "Enter" && query) {
        const currentUrl = window.location.pathname;
        const newUrl = `/meals`;

        if (currentUrl !== newUrl) {
          window.history.pushState({ query }, "", newUrl);

          await fetchAndRenderMeals(query);
        } else {
          await fetchAndRenderMeals(query);
        }
      }
    });
  }
}

async function fetchAndRenderMeals(query) {
  try {
    const apiUrl = `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`;
    const mealData = await ajaxService(apiUrl);

    if (mealData && mealData.meals) {
      const mealContent = mealsPage(mealData.meals);
      renderPage(mealContent, "#app", "App container was not found");
    } else {
      alert("No meals found for this search.");
    }
  } catch (error) {
    console.error("Error fetching meal data:", error);
  }
}
