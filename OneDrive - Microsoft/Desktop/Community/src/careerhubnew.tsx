import React from "react";
import ReactDOM from "react-dom/client";
import { initializeIcons } from "@fluentui/react/lib/Icons";
import CareerHubAppNew from "./components/CareerHubAppNew";

initializeIcons();

ReactDOM.createRoot(
  document.getElementById("careerhub_root") as HTMLElement
).render(<CareerHubAppNew />);
