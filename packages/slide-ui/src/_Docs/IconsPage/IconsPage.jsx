// @ts-nocheck
import React from "react";
import * as Icons from "../../Icons";

export function IconsPage() {
  return (
    <>
      <h2>Icons</h2>
      <ul
        style={{
          all: "unset",
          color: "white",
          display: "grid",
          gap: 1,
          gridTemplateColumns: "repeat(auto-fill, minmax(128px, 1fr))",
        }}>
        {Object.keys(Icons).map((icon) => (
          <div key={icon}>
            <div
              style={{
                aspectRatio: "1/1",
                backgroundColor: "#444",
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}>
              {Icons[icon]({ size: 24 })}
              <p style={{ paddingTop: 20, fontSize: 12 }}>{icon}</p>
            </div>
          </div>
        ))}
      </ul>
    </>
  );
}
