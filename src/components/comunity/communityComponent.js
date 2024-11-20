export default function communityComponent(reviews) {
  return `
      <div class="community-section">
        <h2 class="community-section__title">From Our Community</h2>
        <div class="community-section__cards">
          ${reviews
            .map(
              (review) => `
              <div class="community-card">
                <div class="community-card__image">
                  <img src="${review.image}" alt="${review.title}" />
                </div>
                <div class="community-card__content">
                  <h3 class="community-card__title">${
                    review.title || "Untitled"
                  }</h3>
                  <p class="community-card__author">By ${
                    review.author || "Anonymous"
                  }</p>
                  <p class="community-card__description">${
                    review.description || "No description provided."
                  }</p>
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
