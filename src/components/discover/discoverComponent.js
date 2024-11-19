import "./discoverComponent.scss";

export default function discoverComponent() {
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
      <article class="recipe">
        <div class="recipe__image">
          <img src="path_to_image.jpg" alt="Dish name image" class="recipe__image-img" />
        </div>
        <div class="recipe__info">
          <div class="recipe__info-duration">
            <img src="time-icon.png" alt="Time icon" class="recipe__info-icon" />
            <p class="recipe__info-text">10 min</p>
          </div>
          <div class="recipe__info-serving">
            <img src="serving-icon.png" alt="Serving icon" class="recipe__info-icon" />
            <p class="recipe__info-text">2 servings</p>
          </div>
          <div class="recipe__info-difficulty">
            <img src="difficulty-icon.png" alt="Difficulty icon" class="recipe__info-icon" />
            <p class="recipe__info-text">Easy</p>
          </div>
          <div class="recipe__details">
            <p class="recipe__name">Dish Name</p>
            <a href="recipe-detail-link.html" class="recipe__view-link">View Recipe</a>
          </div>
        </div>
      </article>
    </div>
  `;
}
