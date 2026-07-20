import type { JSX } from "solid-js";

export type InputSize = "sm" | "md" | "lg";

export interface InputProps extends JSX.InputHTMLAttributes<HTMLInputElement> {
  label?: string;

  helperText?: string;

  error?: string;

  size?: InputSize;

  leftIcon?: JSX.Element;

  rightIcon?: JSX.Element;
}
