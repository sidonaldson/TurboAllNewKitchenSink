// @ts-nocheck
import React, { useState } from "react";
import { TitleBar, Pager } from "../..";

const slides = [
  { title: "Titles will cross-fade" },
  { title: "Until they disappear" },
  { title: "" },
  { title: "🎉 🎉 🎉" },
];

export function TitleBarPage() {
  const [active, setActive] = useState(0);
  return (
    <>
      <h2>TitleBar</h2>
      <div
        style={{
          position: "relative",
          height: 180,
          maxWidth: 1024,
          background: "linear-gradient(to right, #fc00ff, #00dbde)",
          marginBottom: 40,
        }}>
        <TitleBar text={slides[active].title} />
        <Pager
          format="arrows"
          items={slides}
          active={active}
          setActive={setActive}
        />
      </div>
    </>
  );
}
