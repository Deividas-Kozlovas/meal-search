import ajaxService from "../services/ajaxService";
import renderDom from "../ui/renderDom";
import fullMealCardComponent from "../../components/fullMealCard/fullMealCardComponent";

export default async function showMealDetails(mealId) {
  const localStorageKey = `meal-details-${mealId}`;

  const storedMeal = localStorage.getItem(localStorageKey);

  if (storedMeal) {
    const meal = JSON.parse(storedMeal);
    const fullMealCard = fullMealCardComponent(meal);
    renderDom(fullMealCard, "#app", "App container was not found");
  } else {
    try {
      const apiUrl = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
      const mealData = await ajaxService(apiUrl);

      if (mealData && mealData.meals) {
        const meal = mealData.meals[0];

        localStorage.setItem(localStorageKey, JSON.stringify(meal));

        const fullMealCard = fullMealCardComponent(meal);
        renderDom(fullMealCard, "#app", "App container was not found");
      } else {
        renderDom(
          `<p>Meal not found!</p>`,
          "#app",
          "App container was not found"
        );
      }
    } catch (error) {
      console.error("Error fetching meal details:", error);
      renderDom(
        `<p>There was an error fetching the meal details. Please try again later.</p>`,
        "#app",
        "App container was not found"
      );
    }
  }
}
