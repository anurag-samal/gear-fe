import type { AvatarSize } from "./Avatar.types";

export const AVATAR_SIZES: Record<AvatarSize, string> = {
  xs: "h-6 w-6 text-xs",
  sm: "h-8 w-8 text-sm",
  md: "h-10 w-10 text-base",
  lg: "h-12 w-12 text-lg",
  xl: "h-16 w-16 text-xl",
};

export const BASE_AVATAR_CLASS = `
flex
items-center
justify-center

overflow-hidden

rounded-full

bg-zinc-200

font-semibold

text-zinc-700

select-none

shrink-0
`;

export function getInitials(name?: string): string {
  if (!name) return "?";

  const words = name.trim().split(/\s+/);

  if (words.length === 1) {
    return words[0][0].toUpperCase();
  }

  return (words[0][0] + words[words.length - 1][0]).toUpperCase();
}
