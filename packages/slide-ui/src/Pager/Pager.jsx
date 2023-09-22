// @ts-nocheck
import React, { useCallback, useMemo } from "react";
import PropTypes from "prop-types";
import { Button } from "../Button";
import {
  IconArrowBackToStart,
  IconArrowBack,
  IconArrowForward,
} from "../Icons";
import styles from "./Pager.module.css";

export const Pager = ({
  items,
  active,
  setActive,
  format = "arrows",
  inModal = false,
  hasUiControl = true,
  screenshareActive = false,
}) => {
  const previous = useCallback(() => {
    setActive(active === 0 ? items.length - 1 : active - 1);
  }, [items, active, setActive]);

  const next = useCallback(() => {
    setActive(active >= items.length - 1 ? 0 : active + 1);
  }, [items, active, setActive]);

  const renderArrows = useMemo(
    () =>
      hasUiControl && [
        items.length > 3 && (
          <Button
            key="button-back-to-start"
            icon={IconArrowBackToStart}
            onClick={() => setActive(0)}
            style={{ marginRight: 1 }}
            disabled={active === 0}
          />
        ),
        <Button
          key="button-previous"
          icon={IconArrowBack}
          onClick={() => previous()}
        />,
        <div
          key="x-of-y"
          className={styles.progress_xy}
          data-cy="pager-progress">
          {active + 1} of {items.length}
        </div>,
        <Button
          key="button-next"
          icon={IconArrowForward}
          onClick={() => next()}
        />,
      ],
    [items, active, next, previous, setActive, hasUiControl]
  );

  const renderTextButtons = useMemo(
    () =>
      items.map((item, i) => (
        <Button
          text={item.buttonText}
          textAlign="center"
          textToggled={item.buttonText}
          isToggled={active === i}
          key={item.buttonText}
          onClick={() => setActive(i)}
          className={!hasUiControl ? styles.button_passive : null}
        />
      )),
    [items, active, setActive, hasUiControl]
  );

  return (
    <menu
      className={`${styles.menu} ${styles[`menu--${format}`]}`}
      data-cy={`pager-menu-${format}`}
      style={{
        "--items-length": items.length,
        "--separator-before-size": inModal ? "0" : "1px",
        "--offset-top":
          // eslint-disable-next-line no-nested-ternary
          format === "tabs-left" && hasUiControl && inModal === false
            ? screenshareActive
              ? "120px"
              : "60px"
            : "0px",
      }}>
      {format === "arrows" && renderArrows}
      {format === "buttons-left" && renderTextButtons}
      {format === "tabs-left" && renderTextButtons}
      {format === "tabs-bottom" && renderTextButtons}
    </menu>
  );
};

export const formats = ["arrows", "buttons-left", "tabs-left", "tabs-bottom"];

Pager.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  items: PropTypes.array.isRequired,
  active: PropTypes.number.isRequired,
  setActive: PropTypes.func.isRequired,
  format: PropTypes.oneOf(formats),
  inModal: PropTypes.bool,
  hasUiControl: PropTypes.bool,
  screenshareActive: PropTypes.bool,
};
