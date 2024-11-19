import "./aboutComponent.scss";
const background = require("../../images/about-background.png");
const bread = require("../../images/bread.png");
const avocado = require("../../images/avocado.png");

export default function aboutComponent() {
  return `
    <div class="about">
      <div class="about__background">
        <img src="${background}" alt="Background" class="about__background-img">
      </div>
      <div class="about__info">
        <h3 class="about__title">About Us</h3>
        <p class="about__description">
          Our recipes are the heart and soul of our culinary community, and they reflect our commitment to providing you with memorable and delightful dining experiences.
        </p>
        <a href="#" class="about__link">Learn More</a>
        <div class="about__images">
          <img src="${bread}" alt="Bread" class="about__image about__image--bread">
          <img src="${avocado}" alt="Avocado" class="about__image about__image--avocado">
        </div>
      </div>
      <div class="about__footer">
        <p class="about__footer-text">50+ Quick Food Recipes That Are Easy To Do!</p>
      </div>
    </div>
  `;
}
