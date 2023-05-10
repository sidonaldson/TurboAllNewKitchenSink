import * as React from "react";
import { CounterButton, NewTabLink } from "ui";
import "./App.css";
import "ui/styles.css";

function App() {
  return (
    <div className="container">
      <p className="text-red-500">Hello Tailwind — this text should be red</p>
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
    </div>
  );
}

export default App;
