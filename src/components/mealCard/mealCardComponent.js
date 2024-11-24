export default function mealCardComponent(meal) {
  return `
      <div class="meal-card">
        <div class="meal-card__image">
          <img src="${meal.strMealThumb}" alt="${meal.strMeal}" />
        </div>
        <div class="meal-card__content">
          <h3 class="meal-card__title">${meal.strMeal}</h3>
          <p class="meal-card__instructions">${meal.strInstructions}</p>
        </div>
      </div>
    `;
}
