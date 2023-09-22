// @ts-nocheck
import React from "react";
import { Button, IconClose } from "..";
import Styles from "./Modal.module.css";

export type ModelProps = {
  handleClose?: () => void;
  hasUiControl?: boolean;
  title?: string;
  variant?: string;
} & React.PropsWithChildren;

export const Modal = ({
  children,
  handleClose = () => undefined,
  hasUiControl = false,
  title = "",
  variant = "media",
}: ModelProps) => {
  if (variant === "popover") return children;

  const variantContainer = `container--${variant}`;
  const variantWindow = `window--${variant}`;

  return (
    <div className={`${Styles.container} ${Styles[variantContainer] ?? ""}`}>
      <div className={` ${Styles.window} ${Styles[variantWindow] ?? ""}`}>
        {title.length > 0 && <div className={Styles.title}>{title}</div>}
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
