import { splitProps, Show } from "solid-js";
import type { ButtonProps } from "./Button.types";
import { THEME } from "../../config/Brand/theme";
import Spinner from "../Spinner/Spinner";
import {
  BASE_BUTTON_CLASS,
  BUTTON_SIZES,
  BUTTON_VARIANTS,
} from "./Button.logic";

export default function Button(props: ButtonProps) {
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

  const buttonClass = `${BASE_BUTTON_CLASS} 
   ${BUTTON_VARIANTS[args.variant ?? "primary"]}
   ${BUTTON_SIZES[args.size ?? "md"]}
   ${args.fullWidth ? "w-full" : ""}
   ${args.class ?? ""}`;

  const buttonStyle =
    (args.variant ?? "primary") === "primary"
      ? {
          "background-color": THEME.primary,
        }
      : undefined;

  const isDisabled = args.loading || nativeProps.disabled;

  return (
    <button
      {...nativeProps}
      disabled={isDisabled}
      class={buttonClass}
      style={buttonStyle}
    >
      <Show when={!args.loading && args.leftIcon}>{args.leftIcon}</Show>

      <Show when={args.loading}>
        <Spinner size="sm" />
      </Show>

      {args.children}

      <Show when={!args.loading && args.rightIcon}>{args.rightIcon}</Show>
    </button>
  );
}
