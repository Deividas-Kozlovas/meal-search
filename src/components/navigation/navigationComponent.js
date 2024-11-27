import "./navigationComponent.scss";
const logo = require("../../images/logo.png");
const searchIcon = require("../../images/icons/search.png");
const userIcon = require("../../images/icons/user.png");

export default function navigationComponent() {
  return `
    <div class="navigation-container">
      <nav class="nav">
        <div class="nav__logo">
          <a href="#" class="nav__logo-link">
            <img src="${logo}" alt="Recipedio Logo" />
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
        <form class="nav__auth" id="search-meal-form">
          <input
            type="text"
            placeholder="Search..."
            class="nav__search-box"
            id="search-meal-input"
            list="meal-options"
          />
          <datalist id="meal-options"></datalist>
          <img class="nav__search-image" src="${searchIcon}" alt="Search Icon" />
          <button class="nav__login-btn">
            <img src="${userIcon}" alt="User Icon" />
          </button>
        </form>
      </nav>
    </div>
  `;
}
