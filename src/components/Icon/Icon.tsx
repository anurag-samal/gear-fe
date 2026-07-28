import { createMemo, splitProps } from "solid-js";

import type { Component } from "solid-js";

import type { IconProps } from "./Icon.types";

import { ICON_STYLES } from "./Icon.styles";

export function createIcon(
  LucideIcon: Component<IconProps>,
): Component<IconProps> {
  return (props) => {
    const [args, nativeProps] = splitProps(props, [
      "class",
      "size",
      "color",
      "fill",
      "strokeWidth",
      "absoluteStrokeWidth",
    ]);

    const iconClass = createMemo(
      () => `
        ${ICON_STYLES.base}
        ${args.class ?? ""}
      `,
    );

    return (
      <LucideIcon
        {...nativeProps}
        class={iconClass()}
        size={args.size ?? 18}
        color={args.color}
        fill={args.fill}
        strokeWidth={args.strokeWidth ?? 2}
        absoluteStrokeWidth={args.absoluteStrokeWidth}
      />
    );
  };
}