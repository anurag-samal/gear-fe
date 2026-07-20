import type { Component } from "solid-js";

import type { IconProps } from "./Icon.types";

import { ICON_STYLES } from "./Icon.styles";

export function createIcon(
  LucideIcon: Component<IconProps>,
): Component<IconProps> {
  return (props) => (
    <LucideIcon
      {...props}
      class={`
        ${ICON_STYLES.base}
        ${props.class ?? ""}
      `}
      size={props.size ?? 18}
      color={props.color}
      fill={props.fill}
      strokeWidth={props.strokeWidth ?? 2}
      absoluteStrokeWidth={props.absoluteStrokeWidth}
    />
  );
}
