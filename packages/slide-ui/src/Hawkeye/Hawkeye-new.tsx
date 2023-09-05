// @ts-nocheck
import React from "react";
import { Button, IconArrowUpward } from "..";
import Styles from "./Hawkeye.module.scss";

export type HawkeyeProps = {
  image: string;
  visible: boolean;
  corner?: "top-left" | "top-right" | "bottom-left" | "bottom-right";
};

export const Hawkeye = React.memo(
  ({ image, visible, corner = "top-right" }: HawkeyeProps) => (
    <div
      className={`
      ${Styles.hawkeye}
      ${Styles[corner]}
      ${visible ? Styles.isVisible : ""} 
    `}
    >
      <img src={image} alt="" />
      <menu>
        <Button className={Styles["button-top-left"]} icon={IconArrowUpward} />
        <Button className={Styles["button-top-right"]} icon={IconArrowUpward} />
        <Button
          className={Styles["button-bottom-left"]}
          icon={IconArrowUpward}
        />
        <Button
          className={Styles["button-bottom-right"]}
          icon={IconArrowUpward}
        />
      </menu>
    </div>
  )
);
