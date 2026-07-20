import type { JSX } from "solid-js";

export interface CheckboxProps extends JSX.InputHTMLAttributes<HTMLInputElement> {
  label?: string;

  helperText?: string;

  error?: string;
}
