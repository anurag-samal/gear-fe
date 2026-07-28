import {Theme} from "@/config/Brand";

import type { BadgeShape, BadgeSize, BadgeVariant } from "./Badge.types";

const theme = Theme.getTheme();

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
    background: theme.primary,
    color: "#FFFFFF",
  },

  secondary: {
    background: theme.sidebar,
    color: theme.text,
  },

  success: {
    background: theme.success,
    color: "#FFFFFF",
  },

  warning: {
    background: theme.warning,
    color: "#FFFFFF",
  },

  danger: {
    background: theme.danger,
    color: "#FFFFFF",
  },

  info: {
    background: theme.info ?? "#0EA5E9",
    color: "#FFFFFF",
  },

  neutral: {
    background: theme.border,
    color: theme.text,
  },
};
