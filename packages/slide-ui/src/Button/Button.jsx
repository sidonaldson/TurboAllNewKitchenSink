// @ts-nocheck
import React from "react";
import PropTypes from "prop-types";
import styles from "./Button.module.scss";
import { themes } from "./themes";

export const Button = ({
  // eslint-disable-next-line react/prop-types
  className,
  // eslint-disable-next-line react/prop-types
  disabled,
  icon,
  iconContainerSize,
  iconPosition,
  iconSize,
  iconToggled,
  isToggled,
  position,
  size = { width: "60px", height: "60px" },
  style,
  text,
  textAlign,
  textToggled,
  theme = "grey-dark",
  onClick = () => {},
}) => {
  const t = themes[theme];

  const renderContent = () => {
    const activeIcon = isToggled ? iconToggled : icon;
    const activeText = isToggled ? textToggled : text;

    const styleProps = {
      icon: {
        "--icon-container-width": iconContainerSize?.width,
        "--icon-container-height": iconContainerSize?.height,
        "--icon-background-color": t.icon?.backgroundColor,
        "--icon-fill": t.icon?.fill,
      },
      text: {
        "--text-background-color": isToggled
          ? t.textToggled.backgroundColor
          : t.text.backgroundColor,
        "--text-color": isToggled ? t.textToggled.color : t.text.color,
      },
    };

    if (activeText && !activeIcon) {
      return (
        <div
          className={styles.text}
          data-text-align={textAlign}
          style={styleProps.text}>
          {text}
        </div>
      );
    }

    if (!activeText && activeIcon) {
      return (
        <div
          className={styles.icon}
          style={styleProps.icon}
          data-cy="button-icon">
          {React.createElement(activeIcon, { size: iconSize })}
        </div>
      );
    }

    if (activeText && activeIcon) {
      return (
        <>
          <div
            className={styles.icon}
            style={styleProps.icon}
            data-cy="button-icon">
            {React.createElement(activeIcon, { size: iconSize })}
          </div>
          <div
            className={styles.text}
            data-text-align={textAlign}
            style={styleProps.text}>
            {activeText}
          </div>
        </>
      );
    }

    return null;
  };

  return (
    <button
      type="button"
      className={`${styles.button} ${className ?? ""}`}
      style={{
        "--button-width": size.width,
        "--button-height": size.height,
        ...style,
      }}
      data-position={position}
      data-icon-side={iconPosition}
      disabled={disabled}
      onClick={onClick}>
      {renderContent()}
    </button>
  );
};

Button.defaultProps = {
  icon: null,
  iconContainerSize: {
    width: "60px",
    height: "60px",
  },
  iconToggled: null,
  iconPosition: "left",
  iconSize: 24,
  isToggled: false,
  onClick: null,
  position: null,
  size: {
    width: "60px",
    height: "60px",
  },
  style: {},
  text: null,
  textAlign: "left",
  textToggled: null,
  theme: "translucent",
};

Button.propTypes = {
  icon: PropTypes.func,
  iconContainerSize: PropTypes.shape({
    width: PropTypes.string,
    height: PropTypes.string,
  }),
  iconToggled: PropTypes.func,
  iconPosition: PropTypes.oneOf(["left", "right"]),
  iconSize: PropTypes.number,
  isToggled: PropTypes.bool,
  onClick: PropTypes.func,
  position: PropTypes.oneOf(["top-left", "top-right", "center"]),
  size: PropTypes.shape({
    width: PropTypes.string,
    height: PropTypes.string,
  }),
  // eslint-disable-next-line react/forbid-prop-types
  style: PropTypes.object,
  text: PropTypes.string,
  textAlign: PropTypes.oneOf(["left", "center", "right"]),
  textToggled: PropTypes.string,
  theme: PropTypes.oneOf(Object.keys(themes)),
};
