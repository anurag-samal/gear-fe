import type { ButtonSize, ButtonVariant } from "./Button.types";

export const BUTTON_VARIANTS: Record<ButtonVariant, string> = {
  primary: `
    text-white
    hover:brightness-95
  `,

  secondary: `
    bg-zinc-100
    text-zinc-900
    hover:bg-zinc-200
  `,

  outline: `
    border
    border-zinc-300
    bg-transparent
    text-zinc-900
    hover:bg-zinc-100
  `,

  ghost: `
    bg-transparent
    text-zinc-700
    hover:bg-zinc-100
  `,

  danger: `
    bg-red-600
    text-white
    hover:bg-red-700
  `,
};

export const BUTTON_SIZES: Record<ButtonSize, string> = {
  sm: "h-9 px-3 text-sm",
  md: "h-10 px-4 text-sm",
  lg: "h-12 px-6 text-base",
};

export const BASE_BUTTON_CLASS = `
inline-flex
items-center
justify-center
gap-2

rounded-lg

font-medium

transition-all
duration-200

cursor-pointer

disabled:cursor-not-allowed
disabled:opacity-60
`;
