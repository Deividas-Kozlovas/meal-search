import "./aboutComponent.scss";
const background = require("../../images/about-background.png");
const bread = require("../../images/bread.png");
const avocado = require("../../images/avocado.png");

export default function aboutComponent() {
  return `
    <div class="about-section">
      <div class="about-section__background">
        <img src="${background}" alt="Background" class="about-section__background-img">
      </div>
      <div class="about-section__content">
        <h3 class="about-section__heading">About Us</h3>
        <p class="about-section__description">
          Our recipes are the heart and soul of our culinary community, and they reflect our commitment to providing you with memorable and delightful dining experiences.
        </p>
        <a href="#" class="about-section__link">Learn More</a>
        <div class="about-section__image">
          <img src="${bread}" alt="Bread" class="about-section__image about-section__image--bread">
          <img src="${avocado}" alt="Avocado" class="about-section__image about-section__image--avocado">
        </div>
      </div>
      <div class="about-section__footer">
        <p class="about-section__footer-text">50+ Quick Food Recipes That Are Easy To Do!</p>
      </div>
    </div>
  `;
}
