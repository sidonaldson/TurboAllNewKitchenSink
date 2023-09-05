// @ts-nocheck
import React from "react";
import { Image } from "../..";

export function ImagePage() {
  return (
    <>
      <h2>Image</h2>
      <div
        style={{
          backgroundColor: "black",
          position: "relative",
          aspectRatio: "16/9",
          maxWidth: 1024,
          overflow: "hidden",
          marginBottom: 40,
        }}
      >
        <Image
          source="https://picsum.photos/1600/900"
          fit="cover"
          caption="Lorem ipsum sit dolor"
        />
      </div>
      <div
        style={{
          backgroundColor: "black",
          position: "relative",
          aspectRatio: "16/9",
          maxWidth: 1024,
          overflow: "hidden",
          marginBottom: 40,
        }}
      >
        <Image
          source="https://picsum.photos/900/1600"
          fit="contain"
          caption="Sit dolor lorem ipsum"
        />
      </div>
    </>
  );
}
