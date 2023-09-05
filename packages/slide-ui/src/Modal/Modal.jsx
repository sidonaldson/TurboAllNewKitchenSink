import React from "react";
import { Button } from "../Button";
import { IconClose } from "../Icons";
import styles from "./Modal.module.css";

export const Modal = (props) => {
  if (props.variant === "popover") {
    return props.children;
  }

  const variant_container = `container--${props.variant}`;
  const variant_window = `window--${props.variant}`;
  return (
    <div
      className={`${styles.container} ${styles[variant_container] ?? ""}`}
      data-cy="modal-container"
    >
      <div
        className={` ${styles.window} ${styles[variant_window] ?? ""}`}
        data-cy="modal-window"
      >
        {props.title && (
          <div key="title" className={styles.title} data-cy="modal-title">
            {props.title}
          </div>
        )}
        {props.children}
        {props.handleClose && props.hasUiControl && (
          <Button
            key="close-button"
            position="top-right"
            icon={IconClose}
            onClick={props.handleClose}
            theme={props.variant === "ui" ? "translucent" : "black"}
          />
        )}
      </div>
    </div>
  );
};

Modal.defaultProps = {
  variant: "media",
};
