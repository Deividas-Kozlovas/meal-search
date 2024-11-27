import ajaxService from "../services/ajaxService";
import renderMeals from "../ui/renderMeals";

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

    renderMeals(randomMealData);
  } catch (error) {
    console.error("Error fetching random meal data:", error);
    renderMeals(null);
  }
}
