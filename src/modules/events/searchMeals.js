import ajaxService from "../services/ajaxService";
import getRandomMeals from "./getRandomMeal";

export default function searchMeals(renderMeals) {
  const searchForm = document.querySelector("#search-meal-form");
  const searchInput = document.querySelector("#search-meal-input");

  if (searchForm && searchInput) {
    searchForm.addEventListener("submit", async (event) => {
      event.preventDefault();

      const query = searchInput.value.trim();

      if (query) {
        await fetchAndRenderMeals(query, renderMeals);
      } else {
        alert("Please enter a meal recipe.");
      }
    });
  }
}

async function fetchAndRenderMeals(query, renderMeals) {
  const encodedQuery = encodeURIComponent(query);
  const apiUrl = `https://www.themealdb.com/api/json/v1/1/search.php?s=${encodedQuery}`;

  try {
    const mealData = await ajaxService(apiUrl);

    if (mealData && mealData.meals && mealData.meals.length > 0) {
      renderMeals({ meals: mealData.meals }, query, getRandomMeals);
    } else {
      renderMeals({ meals: [] }, query, getRandomMeals);
    }
  } catch (error) {
    console.error("Error fetching meal data:", error);
    renderMeals({ meals: [] }, query, getRandomMeals);
  }
}
