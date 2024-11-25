import ajaxService from "../services/ajaxService";
import renderDom from "../ui/renderDom";
import mealsPage from "../../pages/mealsPage";

export default function filterMeals() {
  const filterForm = document.querySelector("#filter-form");

  if (filterForm) {
    filterForm.addEventListener("submit", async (event) => {
      event.preventDefault();

      const ingredient = document
        .querySelector("#ingredient-filter")
        .value.trim();
      const category = document.querySelector("#category-filter").value.trim();
      const area = document.querySelector("#area-filter").value.trim();

      if (ingredient || category || area) {
        await fetchAndRenderFilteredMeals({ ingredient, category, area });
      } else {
        alert("Please provide at least one filter criteria.");
      }
    });
  }
}

async function fetchAndRenderFilteredMeals(filters) {
  const { ingredient, category, area } = filters;

  const params = new URLSearchParams();
  if (ingredient) params.append("i", ingredient);
  if (category) params.append("c", category);
  if (area) params.append("a", area);

  const apiUrl = `https://www.themealdb.com/api/json/v1/1/filter.php?${params.toString()}`;

  console.log(apiUrl);

  try {
    const mealData = await ajaxService(apiUrl);

    console.log("API Response:", mealData);

    if (
      mealData &&
      Array.isArray(mealData.meals) &&
      mealData.meals.length > 0
    ) {
      renderDom(
        mealsPage(mealData.meals),
        "#app",
        "App container was not found"
      );
    } else {
      renderDom(
        `<p>No meals match your filter criteria.</p>`,
        "#app",
        "App container was not found"
      );
    }
  } catch (error) {
    console.error("Error fetching filtered meal data:", error);
    renderDom(
      `<p>There was an error fetching meals. Please try again later.</p>`,
      "#app",
      "App container was not found"
    );
  }
}
