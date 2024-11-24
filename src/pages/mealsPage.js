import searchFilterComponent from "../components/searchFIlter/searchFilterComponent";
import mealCardComponent from "../components/mealCard/mealCardComponent";

export default function mealsPage(meals = []) {
  const mealsHTML = meals.map(mealCardComponent).join("");

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
