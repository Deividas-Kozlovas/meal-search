import ajaxService from "../services/ajaxService";
import renderMeals from "../ui/renderMeals";

export default function searchMeals() {
  const searchForm = document.querySelector("#search-meal-form");
  const searchInput = document.querySelector("#search-meal-input");

  if (searchForm && searchInput) {
    searchForm.addEventListener("submit", async (event) => {
      event.preventDefault();

      const query = searchInput.value.trim();

      if (query) {
        await fetchAndRenderMeals(query);
      } else {
        alert("Please enter a meal query.");
      }
    });
  }
}

async function fetchAndRenderMeals(query) {
  const localStorageKey = `meal-search-${query.toLowerCase()}`;

  const storedData = localStorage.getItem(localStorageKey);

  if (storedData) {
    const mealData = JSON.parse(storedData);
    renderMeals(mealData, query);
  } else {
    const apiUrl = `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`;

    try {
      const mealData = await ajaxService(apiUrl);

      if (mealData && mealData.meals) {
        localStorage.setItem(localStorageKey, JSON.stringify(mealData.meals));

        renderMeals(mealData, query);
      } else {
        renderMeals(null, query);
      }
    } catch (error) {
      console.error("Error fetching meal data:", error);
      renderMeals(null, query);
    }
  }
}
