import ajaxService from "../services/ajaxService";
import renderDom from "../ui/renderDom";
import mealsPage from "../../pages/mealsPage";

export default function getRandomMeal() {
  const randomMealBtn = document.querySelector("#random-meal");

  if (randomMealBtn) {
    randomMealBtn.addEventListener("click", async () => {
      await fetchAndRenderRandomMeal();
    });
  } else {
    console.error("Random meal button not found.");
  }
}

async function fetchAndRenderRandomMeal() {
  try {
    const apiUrl = `https://www.themealdb.com/api/json/v1/1/random.php`;
    const randomMealData = await ajaxService(apiUrl);

    if (
      randomMealData &&
      Array.isArray(randomMealData.meals) &&
      randomMealData.meals.length > 0
    ) {
      const randomMealsPageContent = mealsPage(randomMealData.meals);

      renderDom(randomMealsPageContent, "#app", "App container was not found");
      getRandomMeal();
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
}
