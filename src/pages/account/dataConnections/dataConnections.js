import graniteTabs from "../../../graniteComponents/graniteTabs";
import dataConnections from "../../../pComponents/dataConnections/dataConnections";
import { sidebarTabs } from "../json/sidebarTabs";
import { connections } from "../json/dataConnections";
import "./dataConnections.css";
const theme = {
  mode: "standard",
};
export { theme };

graniteTabs(sidebarTabs, theme);

dataConnections(connections);
