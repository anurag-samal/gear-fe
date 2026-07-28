import { createMemo, splitProps } from "solid-js";

import type { SpinnerProps } from "./Spinner.types";

import {
  SPINNER_BASE_CLASS,
  SPINNER_SIZES,
  SPINNER_STYLES,
} from "./Spinner.styles";

export function Spinner(props: SpinnerProps) {
  const [args, nativeProps] = splitProps(props, ["size", "color", "class"]);

  const spinnerClass = createMemo(
    () => `
      ${SPINNER_BASE_CLASS}
      ${SPINNER_SIZES[args.size ?? "md"]}
      ${args.class ?? ""}
    `,
  );

  const spinnerStyle = createMemo(
    () => SPINNER_STYLES[args.color ?? "current"],
  );

  return (
    <span {...nativeProps} class={spinnerClass()} style={spinnerStyle()} />
  );
}
