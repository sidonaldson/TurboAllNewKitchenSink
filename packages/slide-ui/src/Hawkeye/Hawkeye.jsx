import React from "react";
import PropTypes from "prop-types";
import { Button } from "../Button";
import { IconArrowUpward } from "../Icons";
import styles from "./Hawkeye.module.scss";

export const Hawkeye = (props) => (
  <div
    className={`
      ${styles.hawkeye}
      ${styles[props.corner]}
      ${props.visible ? styles.isVisible : ""} 
    `}
    data-cy="hawkeye"
  >
    <img src={props.image} alt="" data-cy="hawkeye-image" />
    <menu data-cy="hawkeye-menu">
      <Button
        className={styles["button-top-left"]}
        icon={IconArrowUpward}
        data-cy="hawkeye-button-top-left"
      />
      <Button
        className={styles["button-top-right"]}
        icon={IconArrowUpward}
        data-cy="hawkeye-button-top-right"
      />
      <Button
        className={styles["button-bottom-left"]}
        icon={IconArrowUpward}
        data-cy="hawkeye-button-bottom-left"
      />
      <Button
        className={styles["button-bottom-right"]}
        data-cy="hawkeye-button-bottom-right"
        icon={IconArrowUpward}
      />
    </menu>
  </div>
);

Hawkeye.propTypes = {
  image: PropTypes.string.isRequired,
  visible: PropTypes.bool.isRequired,
  corner: PropTypes.oneOf([
    "top-left",
    "top-right",
    "bottom-left",
    "bottom-right",
  ]),
};

Hawkeye.defaultProps = {
  corner: "top-right",
};
