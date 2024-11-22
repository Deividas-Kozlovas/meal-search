import "./scss/style.scss";

import renderComponent from "./modules/ui/renderComponents";
import headerComponent from "./components/headerComponent/headerComponent";
import discoverComponent from "./components/discover/discoverComponent";
import aboutComponent from "./components/about/aboutComponent";
import communityComponent from "./components/community/communityComponent";
import mobileAppComponent from "./components/mobileApp/mobileAppComponent";
import footerComponent from "./components/footer/footerComponent";
import getSixMeals from "./modules/api/getSixMeals";
import { rewiev } from "./components/community/rewievData";

renderComponent(headerComponent(), "#header", "Header section was not found");
const sixMeals = await getSixMeals();

renderComponent(
  discoverComponent(sixMeals),
  "#discover",
  "Discover section was not found"
);
renderComponent(aboutComponent(), "#about", "About section was not found");
renderComponent(
  communityComponent(rewiev),
  "#community",
  "Community section was not found"
);
renderComponent(
  mobileAppComponent(),
  "#mobileApp",
  "Mobile section was not found"
);
renderComponent(footerComponent(), "#footer", "Footer section was not found");
