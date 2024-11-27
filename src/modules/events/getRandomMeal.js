import ajaxService from "../services/ajaxService";

export default function getRandomMeal(renderMeals) {
  const randomMealBtn = document.querySelector("#random-meal");

  if (randomMealBtn) {
    randomMealBtn.addEventListener("click", async () => {
      await fetchAndRenderRandomMeal(renderMeals);
    });
  } else {
    console.error("Random meal button not found.");
  }
}

async function fetchAndRenderRandomMeal(renderMeals) {
  try {
    const apiUrl = `https://www.themealdb.com/api/json/v1/1/random.php`;
    const randomMealData = await ajaxService(apiUrl);

    if (randomMealData && randomMealData.meals) {
      renderMeals(randomMealData, "Random Meal", getRandomMeal);
    } else {
      renderMeals(null, "Random Meal", getRandomMeal);
    }
  } catch (error) {
    console.error("Error fetching random meal data:", error);
    renderMeals(null, "Random Meal");
  }
}
