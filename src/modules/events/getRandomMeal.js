// getRandomMeal.js
import ajaxService from "../services/ajaxService";
import renderMeals from "../ui/renderMeals"; // Import renderMeals function

export default function getRandomMeal() {
  const randomMealBtn = document.querySelector("#random-meal");

  // Ensure the button is found before attaching the event listener
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
    const randomMealData = await ajaxService(apiUrl); // Fetch the random meal data from the API

    renderMeals(randomMealData); // Use renderMeals function to render the fetched meal data
  } catch (error) {
    console.error("Error fetching random meal data:", error);
    renderMeals(null); // If there's an error, render a fallback (no meals found)
  }
}
