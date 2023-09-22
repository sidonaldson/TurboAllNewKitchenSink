import React from "react";
import { Hawkeye } from "../..";

export function HawkeyePage() {
  return (
    <>
      <h2>Hawkeye</h2>
      <p>WIP!</p>
      <p>To do: refactor corner-pinning styles to not use `vw` units.</p>
      <br />
      <div
        style={{
          isolation: "isolate",
          position: "relative",
          aspectRatio: "16/9",
          maxWidth: 1024,
          overflow: "hidden",
          background: "linear-gradient(to right, #fc00ff, #00dbde)",
          marginBottom: 40,
        }}>
        <Hawkeye image="https://picsum.photos/480" visible corner="top-right" />
      </div>
    </>
  );
}
