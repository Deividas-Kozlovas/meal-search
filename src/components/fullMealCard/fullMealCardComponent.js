import "./fullMealCardComponent.scss";

export default function fullMealCardComponent(meal) {
  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    if (meal[`strIngredient${i}`]) {
      ingredients.push(
        `${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`
      );
    }
  }

  return `
      <div class="full-meal-card">
        <div class="full-meal-card__top">
          <div class="full-meal-card__image">
            <img src="${meal.strMealThumb}" alt="${meal.strMeal}" />
          </div>
          <div class="full-meal-card__content">
            <div class="full-meal-card__text">
              <h3 class="full-meal-card__title">${meal.strMeal}</h3>
              <h4>Ingredients:</h4>
              <ul class="full-meal-card__ingredients">
                ${ingredients
                  .map((ingredient) => `<li>${ingredient}</li>`)
                  .join("")}
              </ul>
            </div>
          </div>
        </div>
        <div class="full-meal-card__instructions-container">
          <h4>Instructions:</h4>
          <p class="full-meal-card__instructions">${meal.strInstructions}</p>
        </div>
      </div>
    `;
}
