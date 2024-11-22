import "./scss/style.scss";
import renderPage from "./modules/ui/renderPage";
import routes from "./modules/utils/routes";

async function handleRoute() {
  const path = window.location.pathname;

  const route = routes[path] || routes["/"];

  const pageContent = await route();

  renderPage(pageContent, "#app", "App container was not found");
}

handleRoute();
