import "./scss/style.scss";
import renderPage from "./modules/ui/renderPage";
import routes from "./modules/utils/routes";
import headerComponent from "./components/headerComponent/headerComponent"; // Header component
import navigationComponent from "./components/navigation/navigationComponent";

async function handleRoute() {
  const path = window.location.pathname;
  const route = routes[path] || routes["/"];

  const pageContent = await route();

  renderPage(pageContent, "#app", "App container was not found");
}

renderPage(
  navigationComponent(),
  "#navigation",
  "Navigation component was not found"
);

handleRoute();
