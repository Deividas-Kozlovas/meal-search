import "./scss/style.scss";
import renderDom from "./modules/ui/renderDom";
import navigationComponent from "./components/navigation/navigationComponent";
import searchMeals from "./modules/events/searchMeals";
import loadHomePage from "./pages/homePage";
import listMealsByLetter from "./modules/events/listMealsByFirstLetter";
import footerComponent from "./components/footerComponent/footerComponent";
import navigation from "./modules/events/navigation";
import renderMeals from "./modules/ui/renderMeals"; // Import the renderMeals function

renderDom(
  navigationComponent(),
  "#navigation",
  "Navigation component was not found"
);

(async () => {
  try {
    const homepageContent = await loadHomePage();
    renderDom(homepageContent, "#app", "Home page was not found");
    listMealsByLetter();
    searchMeals(renderMeals);
    navigation();
  } catch (error) {
    console.error("Error rendering home page:", error);
    renderDom(
      `<div class="error-message">
        <h1>Error</h1>
        <p>Failed to load the home page. Please try again later.</p>
      </div>`,
      "#app",
      "App container was not found"
    );
  }
})();

renderDom(footerComponent(), "#footer", "Footer component was not found");
