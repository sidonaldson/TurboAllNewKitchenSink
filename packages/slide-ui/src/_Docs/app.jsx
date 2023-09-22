// @ts-nocheck
import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ButtonPage } from "./ButtonPage";
import { HawkeyePage } from "./HawkeyePage";
import { IconsPage } from "./IconsPage";
import { ImagePage } from "./ImagePage";
import { ModalPage } from "./ModalPage";
import { PagerPage } from "./PagerPage";
import { PresentationNavigationPage } from "./PresentationNavigationPage";
import { SpeakerNotesPage } from "./SpeakerNotesPage";
import { SwitchPage } from "./SwitchPage";
import { TitleBarPage } from "./TitleBarPage";
import { Layout } from "./Layout";
import "./style.scss";

export const navItems = [
  "Button",
  "Hawkeye",
  "Icons",
  "Image",
  "Modal",
  "Pager",
  "PresentationNavigation",
  "SpeakerNotes",
  "Switch",
  "TitleBar",
];

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout navItems={navItems} />}>
          <Route index element={null} />
          <Route path="Button" element={<ButtonPage />} />
          <Route path="Hawkeye" element={<HawkeyePage />} />
          <Route path="Icons" element={<IconsPage />} />
          <Route path="Image" element={<ImagePage />} />
          <Route path="Modal" element={<ModalPage />} />
          <Route path="Pager" element={<PagerPage />} />
          <Route
            path="PresentationNavigation"
            element={<PresentationNavigationPage />}
          />
          <Route path="SpeakerNotes" element={<SpeakerNotesPage />} />
          <Route path="Switch" element={<SwitchPage />} />
          <Route path="TitleBar" element={<TitleBarPage />} />
          <Route path="*" element={<p>No match</p>} />
        </Route>
      </Routes>
    </Router>
  );
}

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App />);
