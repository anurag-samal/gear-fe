import type { JSX } from "solid-js";

export type BadgeVariant =
  | "primary"
  | "secondary"
  | "success"
  | "warning"
  | "danger"
  | "info"
  | "neutral";

export type BadgeSize = "sm" | "md" | "lg";

export type BadgeShape = "rounded" | "pill";

export interface BadgeProps extends JSX.HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  size?: BadgeSize;
  shape?: BadgeShape;

  dot?: boolean;

  leftIcon?: JSX.Element;
  rightIcon?: JSX.Element;

  children: JSX.Element;
}
