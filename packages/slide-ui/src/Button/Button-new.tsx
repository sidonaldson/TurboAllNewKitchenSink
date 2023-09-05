// @ts-nocheck
import React from "react";
import { IconProps } from "../";
import Styles from "./Button.module.scss";

// have to extend CSSProperties to allow CSS variables
declare module "react" {
  interface CSSProperties {
    [key: `--${string}`]: string | number;
  }
}

import { themes, ButtonThemes } from "./Button.themes";

export type ButtonProps = {
  theme?: ButtonThemes;
  textAlign?: string;
  iconToggled?: ({ size }: IconProps) => JSX.Element;
  isToggled?: boolean;
  textToggled?: boolean;
  iconContainerSize?: {
    width: string;
    height: string;
  };
  text?: string;
  icon?: ({ size }: IconProps) => JSX.Element;
  className?: string;
  size?: { width: string; height: string };
  onClick?: () => void;
  position?: string;
  iconSize?: number;
  iconPosition?: string;
  style?: React.CSSProperties;
  disabled?: boolean;
};

export const Button = React.memo(
  ({
    theme = "grey-dark",
    textAlign = "left",
    iconToggled,
    isToggled = false,
    textToggled = false,
    iconContainerSize = {
      width: "60px",
      height: "60px",
    },
    text = "",
    icon,
    className,
    size = { width: "60px", height: "60px" },
    onClick = () => {},
    position,
    iconSize = 24,
    iconPosition = "left",
    style,
    disabled,
  }: ButtonProps) => {
    const Theme = themes[theme];
    const activeIcon = isToggled ? iconToggled : icon;
    const activeText = isToggled ? textToggled : text;
    const iconStyleProps: React.CSSProperties = {
      "--icon-container-width": iconContainerSize?.width,
      "--icon-container-height": iconContainerSize?.height,
      "--icon-background-color": Theme.icon?.backgroundColor,
      "--icon-fill": Theme.icon?.fill,
    };
    const textStyleProps: React.CSSProperties = {
      "--text-background-color":
        isToggled && Theme.textToggled
          ? Theme.textToggled.backgroundColor
          : Theme.text.backgroundColor,
      "--text-color":
        isToggled && Theme.textToggled
          ? Theme.textToggled.color
          : Theme.text.color || "",
    };

    const renderContent = () => {
      if (activeText && !activeIcon)
        return (
          <div
            className={Styles.text}
            data-text-align={textAlign}
            style={textStyleProps}
          >
            {text}
          </div>
        );

      if (!activeText && activeIcon)
        return (
          <div className={Styles.icon} style={iconStyleProps}>
            {React.createElement(activeIcon, { size: iconSize })}
          </div>
        );

      if (activeText && activeIcon) {
        return (
          <>
            <div className={Styles.icon} style={iconStyleProps}>
              {React.createElement(activeIcon, { size: iconSize })}
            </div>
            <div
              className={Styles.text}
              data-text-align={textAlign}
              style={textStyleProps}
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
        className={`${Styles.button} ${className ?? ""}`}
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
  }
);
