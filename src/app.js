import renderDom from "./modules/ui/renderDom";
import navigationComponent from "./components/navigation/navigationComponent";
import searchMeals from "./modules/events/searchMeals";
import loadHomePage from "./pages/homePage";
import filterMeals from "./modules/events/filterMeals";

renderDom(
  navigationComponent(),
  "#navigation",
  "Navigation component was not found"
);

(async () => {
  try {
    const homepageContent = await loadHomePage();
    renderDom(homepageContent, "#app", "Home page was not found");

    searchMeals();
    filterMeals();
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
