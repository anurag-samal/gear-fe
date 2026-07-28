import { Show, createMemo, splitProps } from "solid-js";

import type { BadgeProps } from "./Badge.types";

import {
  BASE_BADGE_CLASS,
  BADGE_SHAPES,
  BADGE_SIZES,
  BADGE_STYLES,
} from "./Badge.styles";

export function Badge(props: BadgeProps) {
  const [args, nativeProps] = splitProps(props, [
    "variant",
    "size",
    "shape",
    "dot",
    "leftIcon",
    "rightIcon",
    "children",
    "class",
  ]);

  const badgeClass = createMemo(
    () => `
      ${BASE_BADGE_CLASS}
      ${BADGE_SIZES[args.size ?? "md"]}
      ${BADGE_SHAPES[args.shape ?? "rounded"]}
      ${args.class ?? ""}
    `,
  );

  const badgeStyle = createMemo(() => ({
    background: BADGE_STYLES[args.variant ?? "primary"].background,
    color: BADGE_STYLES[args.variant ?? "primary"].color,
  }));

  return (
    <span
      {...nativeProps}
      class={badgeClass()}
      style={badgeStyle()}
    >
      <Show when={args.dot}>
        <span class="h-2 w-2 rounded-full bg-current" />
      </Show>

      <Show when={args.leftIcon}>
        {args.leftIcon}
      </Show>

      {args.children}

      <Show when={args.rightIcon}>
        {args.rightIcon}
      </Show>
    </span>
  );
}