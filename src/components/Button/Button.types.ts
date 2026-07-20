import type { JSX } from "solid-js";

export type ButtonVariant =
  | "primary"
  | "secondary"
  | "outline"
  | "ghost"
  | "danger";

export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps extends JSX.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;

  loading?: boolean;

  leftIcon?: JSX.Element;
  rightIcon?: JSX.Element;

  fullWidth?: boolean;

  children: JSX.Element;
}
