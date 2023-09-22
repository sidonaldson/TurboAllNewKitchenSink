import * as React from "react";
import { CounterButton, NewTabLink, TestJS } from "ui";
import { Switch } from "@showhereco/slide-ui";
import "./App.css";
import "ui/styles.css";
import "@showhereco/slide-ui/index.css";
import { useState } from "react";

function App() {
  const [activeSide, setActiveSide] = useState("left");

  return (
    <main className="container">
      <p className="text-red-700">Hello Tailwind — this text should be red</p>
      <h1 className="title">
        Welcome to <br />
        <span>presenter</span>
      </h1>
      <CounterButton />
      <p className="description">
        Built With{" "}
        <NewTabLink href="https://turbo.build/repo">Turborepo</NewTabLink> +{" "}
        <NewTabLink href="https://vitejs.dev/">Vite</NewTabLink>
      </p>
      <TestJS className="m-4 text-center" />
      <div className="bg-black w-1/2 p-2">
          <Switch
            activeSide={activeSide}
            actionLeft={() => setActiveSide("left")}
            actionRight={() => setActiveSide("right")}
            textLeft="Left sides"
            textRight="Right side"
          />
        </div>
    </main>
  );
}

export default App;
