// @ts-nocheck
import React from "react";
import Styles from "./Image.module.css";

export type ImageProps = {
  className?: string;
  caption?: string;
  fit?: "fill" | "contain" | "cover" | "none" | "scale-down";
  source?: string;
  sourceWidescreen?: string;
  style?: React.CSSProperties;
};

export const Image = React.memo(
  ({
    className = "",
    caption = "",
    fit = "cover",
    source = "",
    sourceWidescreen = "",
    style,
  }: ImageProps) => {
    return (
      <picture
        className={`${Styles.picture} ${className}`}
        style={style}
        draggable="false"
      >
        {sourceWidescreen.length > 0 && (
          <source media="(min-aspect-ratio: 16/9)" srcSet={sourceWidescreen} />
        )}
        <img src={source} style={{ objectFit: fit }} alt="" draggable="false" />
        {caption.length > 0 && <div className={Styles.caption}>{caption}</div>}
      </picture>
    );
  }
);
