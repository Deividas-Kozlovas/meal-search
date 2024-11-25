import ajaxService from "../services/ajaxService";
import renderDom from "../ui/renderDom";
import fullMealCardComponent from "../../components/fullMealCard/fullMealCardComponent"; // The component to display full meal details

export default async function showMealDetails(mealId) {
  try {
    const apiUrl = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
    const mealData = await ajaxService(apiUrl);

    if (mealData && mealData.meals) {
      const meal = mealData.meals[0];
      // Render the full meal details in the app container
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
