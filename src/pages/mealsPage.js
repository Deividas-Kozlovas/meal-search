import searchFilterComponent from "../components/searchFIlter/searchFilterComponent";

export default function mealsPage(meals = []) {
  const mealsHTML = meals
    .map((meal) => {
      return `
        <div class="meal-item">
          <h3>${meal.strMeal}</h3>
          <p>${meal.strInstructions}</p>
          <img src="${meal.strMealThumb}" alt="${meal.strMeal}" />
        </div>
      `;
    })
    .join("");

  return `
    <h1>Explore meals tailored to your taste</h1>
    ${searchFilterComponent()}
    <div class="meals-page">
      <div id="meals-list">
        ${mealsHTML}
      </div>
    </div>
  `;
}
