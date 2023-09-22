/* eslint-disable react/prop-types */
// @ts-nocheck
import React from "react";
import { Button } from "../Button";
import { IconClose } from "../Icons";
import styles from "./Modal.module.css";

export const Modal = ({
  variant,
  children,
  hasUiControl,
  title,
  handleClose,
}) => {
  if (variant === "popover") return children;

  const variantContainer = `container--${variant}`;
  const variantWindow = `window--${variant}`;
  return (
    <div
      className={`${styles.container} ${styles[variantContainer] ?? ""}`}
      data-cy="modal-container">
      <div
        className={` ${styles.window} ${styles[variantWindow] ?? ""}`}
        data-cy="modal-window">
        {title && (
          <div key="title" className={styles.title} data-cy="modal-title">
            {title}
          </div>
        )}
        {children}
        {handleClose && hasUiControl && (
          <Button
            key="close-button"
            position="top-right"
            icon={IconClose}
            onClick={handleClose}
            theme={variant === "ui" ? "translucent" : "black"}
          />
        )}
      </div>
    </div>
  );
};

Modal.defaultProps = {
  variant: "media",
};
