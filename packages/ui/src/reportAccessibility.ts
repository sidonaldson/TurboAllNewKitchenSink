import type React from "react";
import type ReactDOM from "react-dom";

/**
 * reportAccessibility - bootstrap @axe-core/react
 * @param App - the React import to bootstrap to
 * @param config - (optional) https://github.com/dequelabs/axe-core/blob/master/doc/API.md#api-name-axeconfigure
 */

export const reportAccessibility = async (
  App: typeof React,
  Root: typeof ReactDOM,
  config?: Record<string, unknown>
): Promise<void> => {
  if (typeof window !== "undefined" && process.env.NODE_ENV !== "production") {
    const axe = await import("@axe-core/react");
    axe.default(App, Root, 1000, config);
  }
};

export default reportAccessibility;
