import * as React from "react";

export const GradientText = ({ classNames = "", text = "" }) => (
    <span
      className={`inline-block bg-gradient-to-r bg-clip-text text-transparent ${classNames}`}
    >
      {text}
    </span>
  );
