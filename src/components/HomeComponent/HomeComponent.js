export default function HomeComponent() {
  return `
      <header class="header">
        <nav class="nav">
          <div class="nav__logo">
            <a href="#" class="nav__logo-link">Logo</a>
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
            <button class="nav__login-btn">Login</button>
          </div>
        </nav>
      </header>
    `;
}
