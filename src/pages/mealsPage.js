import searchFilterComponent from "../components/searchFIlter/searchFilterComponent";
import mealCardComponent from "../components/mealCard/mealCardComponent";
import showMealDetails from "../modules/events/showMealDetails";
export default function mealsPage(meals = []) {
  const mealsHTML = meals.map(mealCardComponent).join("");

  setTimeout(() => {
    const mealCards = document.querySelectorAll(".meal-card");
    mealCards.forEach((card) => {
      card.addEventListener("click", (event) => {
        const mealId = event.currentTarget.getAttribute("data-meal-id");
        showMealDetails(mealId);
      });
    });
  }, 0);
  return `
    ${searchFilterComponent()}
    <h1 class="meals-page__title">Explore meals tailored to your taste</h1>
    <div class="meals-page">
      <div class="meals-page__list" id="meals-list">
        ${mealsHTML}
      </div>
    </div>
  `;
}
