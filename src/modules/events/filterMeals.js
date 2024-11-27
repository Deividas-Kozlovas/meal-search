import ajaxService from "../services/ajaxService";
import renderMeals from "../ui/renderMeals";

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
        const filters = { ingredient, category, area };
        await fetchAndRenderFilteredMeals(filters);
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

  try {
    const mealData = await ajaxService(apiUrl);

    renderMeals(mealData, `Filter: ${params.toString()}`);
  } catch (error) {
    console.error("Error fetching filtered meal data:", error);
    renderMeals(null, `Filter: ${params.toString()}`);
  }
}
