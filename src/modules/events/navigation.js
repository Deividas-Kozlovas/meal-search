import renderDom from "../ui/renderDom";
import loadHomePage from "../../pages/homePage";
import listMealsByFirstLetter from "./listMealsByFirstLetter";
import searchMeals from "./searchMeals";
import mealsPage from "../../pages/mealsPage";
import getSixMeals from "../api/getSixMeals";
import aboutPage from "../../pages/aboutPage";
import communityPage from "../../pages/communityPage";
import renderMeals from "../ui/renderMeals";
import getRandomMeal from "../events/getRandomMeal";

export default async function navigation() {
  document.body.addEventListener("click", async function (event) {
    const clickedElement = event.target;

    if (
      clickedElement.tagName === "A" &&
      clickedElement.classList.contains("nav-link")
    ) {
      const pageName = clickedElement.getAttribute("href").substring(1);
      event.preventDefault();
      await renderPage(pageName);
    }
  });

  async function renderPage(pageName) {
    switch (pageName) {
      case "home":
        const homepageContent = await loadHomePage();
        renderDom(homepageContent, "#app", "Home page was not found");
        listMealsByFirstLetter();

        searchMeals(renderMeals, "Home page search", getRandomMeal);
        break;

      case "recipe":
        try {
          const mealData = await getSixMeals();
          renderDom(
            mealsPage(mealData, renderMeals, getRandomMeal),
            "#app",
            "Meals page was not found",
            getRandomMeal
          );
        } catch (error) {
          console.error("Error fetching recipe meals:", error);
        }
        break;

      case "about":
        renderDom(aboutPage(), "#app", "About page was not found");
        break;

      case "community":
        renderDom(communityPage(), "#app", "Community page was not found");
        break;

      default:
        console.log("Page not found");
    }
  }
}
