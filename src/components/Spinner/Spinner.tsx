import { splitProps } from "solid-js";

import type { SpinnerProps } from "./Spinner.types";

import {
  SPINNER_BASE_CLASS,
  SPINNER_SIZES,
  SPINNER_STYLES,
} from "./Spinner.styles";

export function Spinner(props: SpinnerProps) {
  const [args, nativeProps] = splitProps(props, ["size", "color", "class"]);

  const spinnerClass = `
    ${SPINNER_BASE_CLASS}
    ${SPINNER_SIZES[args.size ?? "md"]}
    ${args.class ?? ""}
  `;

  const spinnerStyle = SPINNER_STYLES[args.color ?? "current"];

  return <span {...nativeProps} class={spinnerClass} style={spinnerStyle} />;
}
