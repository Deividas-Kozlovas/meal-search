const star = require("../../images/icons/star.png");

export default function communityComponent(reviews) {
  return `
    <div class="community-section">
      <h4 class="community-section__title">From Our Community</h4>
      <div class="community-section__cards">
        ${reviews
          .map(
            (review) => `
            <div class="community-card">
              <div class="community-card__user">
                <div class="community-card__user-image">
                  <img 
                    src="${review.authoImage || "default-author.png"}" 
                    alt="${review.author || "Anonymous"}'s Profile Picture" 
                    class="community-card__author-image"
                  />
                </div>
                <div class="community-card__user-info">
                  <h3 class="community-card__title">${
                    review.title || "Untitled"
                  }</h3>
                  <p class="community-card__author">By ${
                    review.author || "Anonymous"
                  }</p>
                </div>
              </div>
              <div class="community-card__content">
                <div class="community-card__rating">
                  <img 
                    src="${star}" 
                    alt="Review star" 
                    class="community-card__star"
                  />
                </div>
                <p class="community-card__description">${
                  review.description || "No description provided."
                }</p>
              </div>
              <div class="community-card__meal">
                <img 
                  src="${review.mealImage || "default-meal.png"}" 
                  alt="${review.title || "Untitled"}" 
                  class="community-card__meal-image"
                />
              </div>
              <div class="community-card__actions">
                <span class="community-card__likes">❤️ ${
                  review.likes || 0
                }</span>
                <span class="community-card__share">🔗 Share</span>
              </div>
            </div>
          `
          )
          .join("")}
      </div>
    </div>
  `;
}
