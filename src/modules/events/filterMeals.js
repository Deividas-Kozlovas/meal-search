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

      const filterKey = `${ingredient}-${category}-${area}`;

      const storedMeals = localStorage.getItem(filterKey);

      if (storedMeals) {
        const mealData = JSON.parse(storedMeals);
        renderMeals(mealData, `Filter: ${filterKey}`);
      } else {
        if (ingredient || category || area) {
          const filters = { ingredient, category, area };
          await fetchAndRenderFilteredMeals(filters, filterKey);
        } else {
          alert("Please provide at least one filter criteria.");
        }
      }
    });
  }
}

async function fetchAndRenderFilteredMeals(filters, filterKey) {
  const { ingredient, category, area } = filters;

  const params = new URLSearchParams();
  if (ingredient) params.append("i", ingredient);
  if (category) params.append("c", category);
  if (area) params.append("a", area);

  const apiUrl = `https://www.themealdb.com/api/json/v1/1/filter.php?${params.toString()}`;

  try {
    const mealData = await ajaxService(apiUrl);

    localStorage.setItem(filterKey, JSON.stringify(mealData));

    renderMeals(mealData, `Filter: ${params.toString()}`);
  } catch (error) {
    console.error("Error fetching filtered meal data:", error);
    renderMeals(null, `Filter: ${params.toString()}`);
  }
}
