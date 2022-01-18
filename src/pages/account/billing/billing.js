import graniteTabs from "../../../graniteComponents/graniteTabs";
import { sidebarTabs } from "../json/sidebarTabs";
import "./billing.css";
const theme = {
  mode: "standard",
};
export { theme };

graniteTabs(sidebarTabs, theme);
