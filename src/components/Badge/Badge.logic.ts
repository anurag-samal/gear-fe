import { THEME } from "../../config/Brand/all";

import type { BadgeShape, BadgeSize, BadgeVariant } from "./Badge.types";

export const BASE_BADGE_CLASS = `
inline-flex
items-center
justify-center
gap-1.5

font-medium
select-none
whitespace-nowrap
`;

export const BADGE_SIZES: Record<BadgeSize, string> = {
  sm: "px-2 py-0.5 text-xs",
  md: "px-2.5 py-1 text-sm",
  lg: "px-3 py-1.5 text-base",
};

export const BADGE_SHAPES: Record<BadgeShape, string> = {
  rounded: "rounded-lg",
  pill: "rounded-full",
};

export const BADGE_STYLES: Record<
  BadgeVariant,
  {
    background: string;
    color: string;
  }
> = {
  primary: {
    background: THEME.primary,
    color: "#FFFFFF",
  },

  secondary: {
    background: THEME.sidebar,
    color: THEME.text,
  },

  success: {
    background: THEME.success,
    color: "#FFFFFF",
  },

  warning: {
    background: THEME.warning,
    color: "#FFFFFF",
  },

  danger: {
    background: THEME.danger,
    color: "#FFFFFF",
  },

  info: {
    background: THEME.info ?? "#0EA5E9",
    color: "#FFFFFF",
  },

  neutral: {
    background: THEME.border,
    color: THEME.text,
  },
};
