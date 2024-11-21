import "./mobileAppComponent.scss";
const apple = require("../../images/icons/apple.png");
const android = require("../../images/icons/android.png");
const phones = require("../../images/phones.png");

export default function mobileAppComponent() {
  return `
    <div class="aplication">
      <p class="aplication__text">
        Embrace the joy of cooking with our app! Get it on your iPhone or Android. Your kitchen adventure begins now!
      </p>
      <div class="aplication__image-container">
        <img src="${phones}" alt="Preview of app on phones" class="aplication__image" />
      </div>
      <div class="aplication__buttons">
        <a href="#" class="aplication__button aplication__button--apple">
          <img src="${apple}" alt="Apple logo" class="aplication__button-icon" />
          <div class="aplication__button-text">
            <p>Download on the</p>
            <span>App Store</span>
          </div>
        </a>
        <a href="#" class="aplication__button aplication__button--android">
          <img src="${android}" alt="Android logo" class="aplication__button-icon" />
          <div class="aplication__button-text">
            <p>Download on the</p>
            <span>Google Play</span>
          </div>
        </a>
      </div>
    </div>
  `;
}
