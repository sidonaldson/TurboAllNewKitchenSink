import React from "react";
import { SpeakerNotes, TitleBar } from "../..";

const content = `
  <p>A paragraph quisque ultricies vestibulum mattis. Sed ut felis ut erat scelerisque fringilla. Aliquam consequat vestibulum mi, ac tempus leo fringilla et. </p>
  
  <p>Some <strong>unordered</strong> list items:</p>
  <ul>
    <li>Unordered item</li>
    <li>Unordered item</li>
    <li>Unordered item</li>
  </ul>

  <p>And some <em>ordered</em> ones too:</p>
  <ol>
    <li>Ordered item</li>
    <li>Ordered item</li>
    <li>Ordered item</li>
  </ol>
`;
const slidePosition = { s: 0, x: 0, y: 0 };

export function SpeakerNotesPage() {
  return (
    <>
      <h2>SpeakerNotes</h2>
      <div
        style={{
          position: "relative",
          aspectRatio: "16/9",
          maxWidth: 1024,
          overflow: "hidden",
          background: "linear-gradient(to right, #fc00ff, #00dbde)",
          marginBottom: 40,
        }}
      >
        <TitleBar text="👉 👀 👉" />
        <SpeakerNotes
          title="Optional title"
          body={content}
          isCurrent={true}
          position={slidePosition}
        />
        <div
          id={`slide-controls_${slidePosition.s}-${slidePosition.x}-${slidePosition.y}`}
          className="slideControls"
        />
      </div>
    </>
  );
}
