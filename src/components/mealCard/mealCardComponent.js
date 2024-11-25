import "./mealCardComponent.scss";

export default function mealCardComponent(meal) {
  return `
    <div class="meal-card" data-meal-id="${meal.idMeal}">
      <div class="meal-card__image">
        <img src="${meal.strMealThumb}" alt="${meal.strMeal}" />
      </div>
      <div class="meal-card__content">
        <h3 class="meal-card__title">${meal.strMeal}</h3>
        ${
          meal.strInstructions
            ? `<p class="meal-card__instructions">${meal.strInstructions.slice(
                0,
                200
              )}${meal.strInstructions.length > 200 ? "..." : ""}</p>`
            : ""
        }
      </div>
    </div>
  `;
}
