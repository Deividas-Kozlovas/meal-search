import "./headerComponent.scss";
const heroImage = require("../../images/hero-image.png");
const tomatoImage = require("../../images/tomato.png");

export default function headerComponent() {
  return `
    <header class="header">
      <div class="hero">
        <div class="hero__content">
          <h1>Cooking Made Fun and Easy: Unleash Your Inner Chef</h1>
          <p>Discover more than <span>10,000 recipes</span> at your fingertips. Find the easiest way to cook with the best recipes!</p>
          <a href="#recipe" class="hero__btn nav-link">Explore Recipes</a>
        </div>
        <div class="hero__images">
          <img src="${heroImage}" alt="Hero Image" class="hero__image" />
          <img src="${tomatoImage}" alt="Tomato Image" class="hero__image-tomato" />
        </div>
      </div>
    </header>
  `;
}
