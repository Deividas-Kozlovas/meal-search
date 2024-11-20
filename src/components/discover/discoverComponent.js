import "./discoverComponent.scss";
const prepTime = require("../../images/icons/preperation-time.png");
const servings = require("../../images/icons/servings.png");
const difficulty = require("../../images/icons/difficulty.png");

export default function discoverComponent(meals) {
  return `
    <div class="discover__header">
      <div class="discover__title">
        <h2 class="discover__title-heading">Discover, Create, Share</h2>
        <p class="discover__title-description">
          Check out our most popular recipes of this week
        </p>
      </div>
      <a href="#" class="discover__see-all">See All</a>
    </div>
    <div class="discover__recipes">
      ${meals
        .map(
          (meal) => `
          <article class="recipe">
            <div class="recipe__image">
              <img src="${meal.strMealThumb || "default-image.jpg"}" alt="${
            meal.strMeal
          }" class="recipe__image-img" />
          <div class="recipe__info">
              <div class="recipe__info-duration">
                <img src="${prepTime}" alt="Time icon" class="recipe__info-icon" />
                <p class="recipe__info-text">15 min</p> <!-- Example placeholder -->
              </div>
              <div class="recipe__info-serving">
                <img src="${servings}" alt="Serving icon" class="recipe__info-icon" />
                <p class="recipe__info-text">2 servings</p> <!-- Example placeholder -->
              </div>
              <div class="recipe__info-difficulty">
                <img src="${difficulty}" alt="Difficulty icon" class="recipe__info-icon" />
                <p class="recipe__info-text">${meal.strCategory || "Easy"}</p>
              </div>
            </div>   
          </div> 
            <div class="recipe__details">
              <p class="recipe__name">${meal.strMeal || "No name"}</p>
              <a href="#" class="recipe__view-link" target="_blank">View Recipe</a>
            </div>
          </article>
        `
        )
        .join("")}
    </div>
  `;
}
