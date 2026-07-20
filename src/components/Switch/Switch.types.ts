import type { JSX } from "solid-js";

export interface SwitchProps extends JSX.InputHTMLAttributes<HTMLInputElement> {
  label?: string;

  helperText?: string;

  error?: string;
}
