import communityComponent from "../../components/community/communityComponent";
import { rewiev } from "../../components/community/rewievData";

export default function renderCommunity() {
  const community = document.querySelector("#community");

  if (community) {
    community.innerHTML = "";
    community.innerHTML = communityComponent(rewiev);
  } else {
    console.error("Community section was not found");
  }
}
