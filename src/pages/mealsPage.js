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
    <div class="meals-page">
      <h1>Meals Page</h1>
      <div id="meals-list">
        ${mealsHTML}
      </div>
    </div>
  `;
}
