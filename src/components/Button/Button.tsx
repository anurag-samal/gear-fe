import { Show, createMemo, splitProps } from "solid-js";

import { Theme } from "@/config/Brand";
import { Spinner } from "@/components/Spinner";

import type { ButtonProps } from "./Button.types";

import {
  BASE_BUTTON_CLASS,
  BUTTON_SIZES,
  BUTTON_VARIANTS,
} from "./Button.styles";

export function Button(props: ButtonProps) {

  const [args, nativeProps] = splitProps(props, [
    "variant",
    "size",
    "loading",
    "leftIcon",
    "rightIcon",
    "fullWidth",
    "children",
    "class",
  ]);

  const buttonClass = createMemo(
    () => `${BASE_BUTTON_CLASS}
      ${BUTTON_VARIANTS[args.variant ?? "primary"]}
      ${BUTTON_SIZES[args.size ?? "md"]}
      ${args.fullWidth ? "w-full" : ""}
      ${args.class ?? ""}`,
  );

  const buttonStyle = createMemo(() =>
    (args.variant ?? "primary") === "primary"
      ? {
          backgroundColor: Theme.vars.primary,
        }
      : undefined,
  );

  const isDisabled = createMemo(
    () => args.loading || nativeProps.disabled,
  );

  return (
    <button
      {...nativeProps}
      disabled={isDisabled()}
      class={buttonClass()}
      style={buttonStyle()}
    >
      <Show when={!args.loading && args.leftIcon}>
        {args.leftIcon}
      </Show>

      <Show when={args.loading}>
        <Spinner size="sm" />
      </Show>

      {args.children}

      <Show when={!args.loading && args.rightIcon}>
        {args.rightIcon}
      </Show>
    </button>
  );
}