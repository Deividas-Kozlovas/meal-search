import ajaxService from "../services/ajaxService";
import renderDom from "../ui/renderDom";
import mealsPage from "../../pages/mealsPage";
import filterMeals from "./filterMeals";
import getRandomMeal from "./getRandomMeal";

export default function searchMeals() {
  const searchForm = document.querySelector("#search-meal-form");
  const searchInput = document.querySelector("#search-meal-input");

  if (searchForm && searchInput) {
    searchForm.addEventListener("submit", async (event) => {
      event.preventDefault();
      const query = searchInput.value.trim();

      if (query) {
        await fetchAndRenderMeals(query);

        filterMeals();
        getRandomMeal();
      } else {
        alert("Please enter a search query.");
      }
    });
  }
}

async function fetchAndRenderMeals(query) {
  try {
    const apiUrl = `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`;
    const mealData = await ajaxService(apiUrl);
    if (
      mealData &&
      Array.isArray(mealData.meals) &&
      mealData.meals.length > 0
    ) {
      const mealsPageContent = mealsPage(mealData.meals);
      renderDom(mealsPageContent, "#app", "App container was not found");
    } else {
      renderDom(
        `<p>No meals found for your search query "${query}".</p>`,
        "#app",
        "App container was not found"
      );
    }
  } catch (error) {
    console.error("Error fetching meal data:", error);
    renderDom(
      `<p>There was an error fetching the meals. Please try again later.</p>`,
      "#app",
      "App container was not found"
    );
  }
}
