import homePage from "../../pages/homePage";
import mealPage from "../../pages/mealPage";

const routes = {
  "/": homePage, // When the path is '/', render the homePage
  "/meals": mealPage, // When the path is '/meals', render the mealPage
};

export default routes;
