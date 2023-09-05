import React from "react";
import styles from "./Switch.module.css";

export const Switch = ({
  activeSide = "left",
  actionLeft,
  actionRight,
  textLeft,
  textRight,
}) => {
  return (
    <div
      className={`
        ${styles.switch} 
        ${
          activeSide === "left"
            ? styles.switch__active_left
            : styles.switch__active_right
        }
    `}
      data-cy="switch-container"
    >
      <button
        className={styles.switch_button}
        onClick={actionLeft}
        data-cy="switch-left-side"
      >
        {textLeft}
      </button>
      <button
        className={styles.switch_button}
        onClick={actionRight}
        data-cy="switch-right-side"
      >
        {textRight}
      </button>
    </div>
  );
};
