import React, { useState } from "react";
import { Pager, formats } from "../..";

const items = [
  { buttonText: "Item 1" },
  { buttonText: "Item 2" },
  { buttonText: "Item 3" },
  { buttonText: "Item 4" },
];

const tabsItems = [
  { buttonText: "8" },
  { buttonText: "7" },
  { buttonText: "6" },
  { buttonText: "5" },
  { buttonText: "4" },
  { buttonText: "3" },
  { buttonText: "2" },
  { buttonText: "1" },
  { buttonText: "G" },
  { buttonText: "L" },
];

export function PagerPage() {
  return (
    <>
      <h2>Pager</h2>

      <h3>Formats</h3>

      {formats.map((format) => (
        <div key={format}>
          <h4>{format}</h4>
          <div
            style={{
              position: "relative",
              aspectRatio: "16/9",
              maxWidth: 1024,
              background: "linear-gradient(to right, #fc00ff, #00dbde)",
              marginBottom: 40,
            }}
          >
            <PagerDemo
              format={format}
              items={format === "tabs-left" ? tabsItems : items}
            />
          </div>
        </div>
      ))}
    </>
  );
}

function PagerDemo(props) {
  const [active, setActive] = useState(0);
  return (
    <Pager
      format={props.format}
      items={props.items}
      active={active}
      setActive={setActive}
      inModal={true}
    />
  );
}
