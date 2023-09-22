// @ts-nocheck
import React from "react";
import Styles from "./Switch.module.css";

export type SwitchProps = {
  activeSide?: string;
  actionLeft?: () => void;
  actionRight?: () => void;
  textLeft?: string;
  textRight?: string;
};

export const Switch = React.memo(
  ({
    activeSide = "left",
    actionLeft = () => undefined,
    actionRight = () => undefined,
    textLeft = "",
    textRight = "",
  }: SwitchProps) => (
    <div
      className={`
        ${Styles.switch} 
        ${
          activeSide === "left"
            ? Styles.switch__active_left
            : Styles.switch__active_right
        }
    `}>
      <button
        className={Styles.switch_button}
        onClick={actionLeft}
        type="button">
        {textLeft}
      </button>
      <button
        className={Styles.switch_button}
        onClick={actionRight}
        type="button">
        {textRight}
      </button>
    </div>
  )
);
