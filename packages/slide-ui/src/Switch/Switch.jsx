/* eslint-disable react/prop-types */
// @ts-nocheck
import React from "react";
import styles from "./Switch.module.css";

export const Switch = ({
  activeSide = "left",
  actionLeft,
  actionRight,
  textLeft,
  textRight,
}) => (
  <div
    className={`
        ${styles.switch} 
        ${
          activeSide === "left"
            ? styles.switch__active_left
            : styles.switch__active_right
        }
    `}
    data-cy="switch-container">
    <button
      className={styles.switch_button}
      onClick={actionLeft}
      data-cy="switch-left-side"
      type="button">
      {textLeft}
    </button>
    <button
      className={styles.switch_button}
      onClick={actionRight}
      data-cy="switch-right-side"
      type="button">
      {textRight}
    </button>
  </div>
);
