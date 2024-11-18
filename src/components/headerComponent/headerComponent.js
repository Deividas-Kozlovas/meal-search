// Import images dynamically using Webpack
const logoPath = require("../../images/logo.png");
const searchIconPath = require("../../images/search.png");
const userIconPath = require("../../images/user.png");
const heroImagePath = require("../../images/hero-image.png");
const tomatoImagePath = require("../../images/tomato.png");

export default function headerComponent() {
  return `
    <header class="header">
      <nav class="nav">
        <div class="nav__logo">
          <a href="#" class="nav__logo-link">
            <img src="${logoPath}" alt="Recipedio Logo" />
            <p>Recipedio</p>
          </a>
        </div>
        <ul class="nav__links">
          <li class="nav__item">
            <a href="#home" class="nav__link">Home</a>
          </li>
          <li class="nav__item">
            <a href="#recipe" class="nav__link">Recipe</a>
          </li>
          <li class="nav__item">
            <a href="#community" class="nav__link">Community</a>
          </li>
          <li class="nav__item">
            <a href="#about" class="nav__link">About Us</a>
          </li>
        </ul>
        <div class="nav__auth">
          <input type="text" placeholder="Search..." class="nav__search-box" />
          <img class="nav__search-image" src="${searchIconPath}" alt="Search Icon" />
          <button class="nav__login-btn">
            <img src="${userIconPath}" alt="User Icon" />
          </button>
        </div>
      </nav>
      <div class="hero">
        <div class="hero__content">
          <h1>Cooking Made Fun and Easy: Unleash Your Inner Chef</h1>
          <p>Discover more than <span>10,000 recipes</span> at your fingertips. Find the easiest way to cook with the best recipes!</p>
          <a href="#explore-recipes" class="hero__btn">Explore Recipes</a>
        </div>
        <div class="hero__images">
          <img src="${heroImagePath}" alt="Hero Image" class="hero__image" />
          <img src="${tomatoImagePath}" alt="Tomato Image" class="hero__image-tomato" />
        </div>
      </div>
    </header>
  `;
}
