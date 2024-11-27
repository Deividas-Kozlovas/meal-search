import renderDom from "../ui/renderDom";
import mealsPage from "../../pages/mealsPage";
import getRandomMeals from "../../modules/events/getRandomMeal";

export default function renderMeals(mealData, query = "") {
  if (mealData && Array.isArray(mealData.meals) && mealData.meals.length > 0) {
    const mealsPageContent = mealsPage(mealData.meals);
    renderDom(mealsPageContent, "#app", "App container was not found");
    getRandomMeals();
  } else {
    renderDom(
      `<p>No meals found for your search query "${query}".</p>`,
      "#app",
      "App container was not found"
    );
  }
}
