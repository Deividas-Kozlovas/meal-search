import ajaxService from "../services/ajaxService";
import renderDom from "../ui/renderDom";
import mealsPage from "../../pages/mealsPage";

export default async function getRandomMeal() {
  const randomMealBtn = document.querySelector("#random-meal");
  if (!randomMealBtn) {
    console.error("Random meal button not found.");
    return;
  }

  randomMealBtn.addEventListener("click", async () => {
    try {
      const apiUrl = `https://www.themealdb.com/api/json/v1/1/random.php`; // Updated to fetch a random meal
      const randomMealData = await ajaxService(apiUrl);

      if (
        randomMealData &&
        Array.isArray(randomMealData.meals) &&
        randomMealData.meals.length > 0
      ) {
        const randommealsPageContent = mealsPage(randomMealData.meals);
        renderDom(
          randommealsPageContent,
          "#app",
          "App container was not found"
        );
      } else {
        renderDom(
          `<p>No meals found. Please try again.</p>`,
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
  });
}
