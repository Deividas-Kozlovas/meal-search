import "./footerComponent.scss";
const logo = require("../../images/logo.png");
const salad = require("../../images/salad.png");
const eggs = require("../../images/eggs.png");
const eggplant = require("../../images/eggplant.png");

export default function footerComponent() {
  return `
    <div class="footer">
      <div class="footer__top">
        <a href="#" class="footer__logo">
          <img src="${logo}" alt="Recipedio Logo" class="footer__logo-image" />
          <p class="footer__logo-text">Recipedio</p>
        </a>
      </div>
      <div class="footer__left">
          <img src="${salad}" alt="salad" class="footer__salad" />
          <img src="${eggplant}" alt="eggplant" class="footer__eggplant" />
          <img src="${eggs}" alt="eggs" class="footer__eggs" />
        <div class="footer__menu">
          <div class="footer__section">
            <p class="footer__section-title">Menu</p>
            <ul class="footer__links">
              <li class="footer__link-item">
                <a href="#" class="footer__link">Home</a>
              </li>
              <li class="footer__link-item">
                <a href="#" class="footer__link">Recipe</a>
              </li>
              <li class="footer__link-item">
                <a href="#" class="footer__link">Community</a>
              </li>
              <li class="footer__link-item">
                <a href="#" class="footer__link">About Us</a>
              </li>
            </ul>
          </div>
          <div class="footer__section">
            <p class="footer__section-title">Categories</p>
            <ul class="footer__links">
              <li class="footer__link-item">
                <a href="#" class="footer__link">Breakfast</a>
              </li>
              <li class="footer__link-item">
                <a href="#" class="footer__link">Lunch</a>
              </li>
              <li class="footer__link-item">
                <a href="#" class="footer__link">Dinner</a>
              </li>
              <li class="footer__link-item">
                <a href="#" class="footer__link">Dessert</a>
              </li>
              <li class="footer__link-item">
                <a href="#" class="footer__link">Drink</a>
              </li>
            </ul>
          </div>
          <div class="footer__section">
            <p class="footer__section-title">Social</p>
            <ul class="footer__links">
              <li class="footer__link-item">
                <a href="#" class="footer__link">Instagram</a>
              </li>
              <li class="footer__link-item">
                <a href="#" class="footer__link">Twitter</a>
              </li>
              <li class="footer__link-item">
                <a href="#" class="footer__link">Youtube</a>
              </li>
              <li class="footer__link-item">
                <a href="#" class="footer__link">Facebook</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="footer__right">
        <p class="footer__newsletter-text">Sign up for our newsletter</p>
        <form class="footer__form">
          <input
            type="email"
            placeholder="Your Email Address"
            name="email"
            class="footer__input"
          />
          <button type="submit" class="footer__button">Submit</button>
        </form>
      </div>
      </div>
    </div>
  `;
}
