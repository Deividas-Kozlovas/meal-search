import renderPage from "./modules/ui/renderPage";
import routes from "./modules/utils/routes";
import navigationComponent from "./components/navigation/navigationComponent";
import searchMeals from "./modules/events/searchMeals";

async function handleRoute() {
  const path = window.location.pathname;
  const route = routes[path] || routes["/"];

  const pageContent = await route(); // Fetch content for the current route

  renderPage(pageContent, "#app", "App container was not found");
}

// Render the navigation component
renderPage(
  navigationComponent(),
  "#navigation",
  "Navigation component was not found"
);

// Handle the initial route
handleRoute();

// Initialize search functionality
searchMeals();

// Handle the popstate event for back/forward navigation
window.addEventListener("popstate", () => {
  handleRoute(); // Re-render the current route when the back/forward button is pressed
});
