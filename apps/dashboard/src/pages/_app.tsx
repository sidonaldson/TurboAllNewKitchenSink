import React from "react";
import ReactDOM from "react-dom";
import "../styles/globals.css";
import "ui/styles.css";
import "@showhereco/slide-ui/index.css";
import { reportAccessibility } from "ui";
import type { AppProps } from "next/app";

reportAccessibility(React, ReactDOM);

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
