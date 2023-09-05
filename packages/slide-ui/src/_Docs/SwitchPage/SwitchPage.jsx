import React, { useState } from "react";
import { Switch } from "../..";

export function SwitchPage() {
  const [activeSide, setActiveSide] = useState("left");
  return (
    <>
      <h2>Switch</h2>

      <div style={{ width: 240 }}>
        <Switch
          activeSide={activeSide}
          actionLeft={() => setActiveSide("left")}
          actionRight={() => setActiveSide("right")}
          textLeft="Left side"
          textRight="Right side"
        />
      </div>
    </>
  );
}
