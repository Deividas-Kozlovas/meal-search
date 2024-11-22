// homePage.js
import headerComponent from "../../components/headerComponent/headerComponent";
import discoverComponent from "../../components/discover/discoverComponent";
import aboutComponent from "../../components/about/aboutComponent";
import communityComponent from "../../components/community/communityComponent";
import mobileAppComponent from "../../components/mobileApp/mobileAppComponent";
import footerComponent from "../../components/footer/footerComponent";
import getSixMeals from "../api/getSixMeals";
import { rewiev } from "../../components/community/rewievData";

export default async function homePage() {
  const sixMeals = await getSixMeals();

  return `
    ${headerComponent()}
    ${discoverComponent(sixMeals)}
    ${aboutComponent()}
    ${communityComponent(rewiev)}
    ${mobileAppComponent()}
    ${footerComponent()}
  `;
}