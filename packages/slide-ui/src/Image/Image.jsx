// @ts-nocheck
/* eslint-disable react/prop-types */
import React from "react";
import styles from "./Image.module.css";

export const Image = ({
  className,
  caption,
  fit = "cover",
  source,
  sourceWidescreen,
  style,
  loadedVariant = "visible",
}) => (
  <picture
    className={`${styles.picture} ${className}`}
    style={style}
    draggable="false"
    data-cy="image-container">
    {sourceWidescreen && (
      <source media="(min-aspect-ratio: 16/9)" srcSet={sourceWidescreen} />
    )}
    <img
      src={source}
      style={{ objectFit: fit }}
      alt=""
      draggable="false"
      data-cy="image"
      onLoad={({ target }) =>
        target.setAttribute("data-loaded", `loaded-${loadedVariant}`)
      }
    />
    {caption && (
      <div data-cy="image-caption" className={styles.caption}>
        {caption}
      </div>
    )}
  </picture>
);
