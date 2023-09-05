// @ts-nocheck
import React, { useState } from "react";
import { Button, themes, IconGrid, IconGridOff } from "../..";

export function ButtonPage() {
  const [isToggled, setIsToggled] = useState(false);
  return (
    <>
      <h2>Button</h2>
      <hr />
      <h3>Themes</h3>
      <div
        style={{
          all: "unset",
          display: "grid",
          gap: 20,
          gridTemplateColumns: "repeat(3, 1fr)",
        }}>
        {Object.keys(themes).map((theme) => (
          <div key={theme}>
            <div
              style={{
                width: "100%",
                aspectRatio: "16/9",
                backgroundColor: "#222",
                backgroundImage: "url(https://picsum.photos/480)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}>
              <Button
                text="Lorem ipsum"
                textAlign="center"
                theme={theme}
                size={{ width: "160px", height: "60px" }}
              />
            </div>
            <p style={{ paddingTop: 5 }}>{theme}</p>
          </div>
        ))}
      </div>
      <hr />
      <h3>Text-alignment</h3>
      <div
        style={{
          all: "unset",
          display: "grid",
          gap: 20,
          gridTemplateColumns: "repeat(3, 1fr)",
        }}>
        <Button
          text="Left"
          textAlign="left"
          theme="grey-light"
          size={{ width: "100%", height: "60px" }}
        />
        <Button
          text="Center"
          textAlign="center"
          theme="grey-light"
          size={{ width: "100%", height: "60px" }}
        />
        <Button
          text="Right"
          textAlign="right"
          theme="grey-light"
          size={{ width: "100%", height: "60px" }}
        />
      </div>
      <hr />
      <h3>With position + icons</h3>
      <div
        style={{
          position: "relative",
          minHeight: 60,
          minWidth: 562,
          backgroundColor: "black",
        }}>
        <Button
          position="top-left"
          text="Left"
          textToggled="Left (toggled)"
          textAlign="left"
          icon={IconGrid}
          iconToggled={IconGridOff}
          iconPosition="left"
          theme="translucent"
          size={{ width: "240px", height: "60px" }}
          isToggled={isToggled}
          onClick={() => setIsToggled(!isToggled)}
        />
        <Button
          position="top-right"
          text="Right"
          textToggled="Right (toggled)"
          textAlign="right"
          icon={IconGrid}
          iconToggled={IconGridOff}
          iconPosition="right"
          theme="translucent"
          size={{ width: "240px", height: "60px" }}
          isToggled={isToggled}
          onClick={() => setIsToggled(!isToggled)}
        />
        <Button
          position="center"
          icon={IconGrid}
          iconToggled={IconGridOff}
          iconPosition="right"
          theme="translucent"
          isToggled={isToggled}
          onClick={() => setIsToggled(!isToggled)}
        />
      </div>
    </>
  );
}
