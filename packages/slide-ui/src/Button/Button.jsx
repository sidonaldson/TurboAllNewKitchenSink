import React from "react";
import PropTypes from "prop-types";
import styles from "./Button.module.scss";

export const Button = ({
  className,
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
          style={styleProps.text}
        >
          {text}
        </div>
      );
    } else if (!activeText && activeIcon) {
      return (
        <div
          className={styles.icon}
          style={styleProps.icon}
          data-cy="button-icon"
        >
          {React.createElement(activeIcon, { size: iconSize })}
        </div>
      );
    } else if (activeText && activeIcon) {
      return (
        <>
          <div
            className={styles.icon}
            style={styleProps.icon}
            data-cy="button-icon"
          >
            {React.createElement(activeIcon, { size: iconSize })}
          </div>
          <div
            className={styles.text}
            data-text-align={textAlign}
            style={styleProps.text}
          >
            {activeText}
          </div>
        </>
      );
    }
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
      onClick={onClick}
    >
      {renderContent()}
    </button>
  );
};

export const themes = {
  translucent: {
    text: {
      backgroundColor: "rgba(50, 50, 50, 0.6)",
      color: "white",
    },
    textToggled: {
      backgroundColor: "rgba(50, 50, 50, 1)",
      color: "white",
    },
    icon: {
      backgroundColor: "rgba(50, 50, 50, 0.6)",
      fill: "white",
    },
    iconToggled: {
      backgroundColor: "rgba(50, 50, 50, 1)",
      fill: "white",
    },
  },
  transparent: {
    text: {
      backgroundColor: "transparent",
      fill: "inherit",
    },
    icon: {
      backgroundColor: "transparent",
      fill: "inherit",
    },
  },
  "grey-light": {
    text: {
      backgroundColor: "#b0b0b0",
      color: "black",
    },
    icon: {
      backgroundColor: "#b0b0b0",
      fill: "black",
    },
  },
  "grey-dark": {
    text: {
      backgroundColor: "#333",
      color: "white",
    },
    textToggled: {
      backgroundColor: "#333",
      color: "white",
    },
    icon: {
      backgroundColor: "#333",
      fill: "white",
    },
    iconToggled: {
      backgroundColor: "#333",
      fill: "white",
    },
  },
  black: {
    text: {
      backgroundColor: "black",
      color: "white",
    },
    icon: {
      backgroundColor: "black",
      fill: "white",
    },
  },
  white: {
    text: {
      backgroundColor: "white",
      color: "black",
    },
    icon: {
      backgroundColor: "white",
      fill: "black",
    },
  },
  "clear-white": {
    text: {
      backgroundColor: "rgba(255,255,255,0.6)",
      color: "black",
    },
    icon: {
      backgroundColor: "rgba(255,255,255,0.6)",
      fill: "black",
    },
  },
  green: {
    text: {
      backgroundColor: "#00be5a",
      color: "white",
    },
    icon: {
      backgroundColor: "#00be5a",
      fill: "white",
    },
  },
  red: {
    text: {
      backgroundColor: "#f1545d",
      color: "white",
    },
    icon: {
      backgroundColor: "#f1545d",
      fill: "white",
    },
  },
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
  style: PropTypes.object,
  text: PropTypes.string,
  textAlign: PropTypes.oneOf(["left", "center", "right"]),
  textToggled: PropTypes.string,
  theme: PropTypes.oneOf(Object.keys(themes)),
};
