import * as React from "react";
import { createRoot } from "react-dom/client";
import { reportAccessibility } from "ui";
import "./index.css";
import App from "./App";

const rootElement = document.getElementById("root");

if (!rootElement) throw new Error("No root element found");

const root = createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportAccessibility(React, root);
