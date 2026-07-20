import type { JSX } from "solid-js";

export type SpinnerSize = "xs" | "sm" | "md" | "lg";

export type SpinnerColor = "current" | "white" | "primary";

export interface SpinnerProps extends JSX.HTMLAttributes<HTMLSpanElement> {
  size?: SpinnerSize;
  color?: SpinnerColor;
}
