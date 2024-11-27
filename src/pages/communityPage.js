import communityComponent from "../components/community/communityComponent";
import { rewiev } from "../components/community/rewievData";

export default function communityPage() {
  return `${communityComponent(rewiev)}`;
}
