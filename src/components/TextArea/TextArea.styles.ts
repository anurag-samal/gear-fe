import type { TextAreaResize, TextAreaSize } from "./TextArea.types";

export const TEXTAREA_CONTAINER_CLASS = `
flex
flex-col

gap-1.5

w-full
`;

export const TEXTAREA_LABEL_CLASS = `
text-sm
font-medium

text-zinc-700
`;

export const TEXTAREA_WRAPPER_CLASS = `
rounded-xl

border
border-zinc-300

bg-white

px-4
py-3

transition-all
duration-200

focus-within:border-zinc-400
focus-within:ring-2
focus-within:ring-zinc-200
`;

export const TEXTAREA_FIELD_CLASS = `
w-full

bg-transparent

outline-none

placeholder:text-zinc-400

disabled:cursor-not-allowed
disabled:opacity-60
`;

export const TEXTAREA_HELPER_CLASS = `
text-sm

text-zinc-500
`;

export const TEXTAREA_ERROR_CLASS = `
text-sm

text-red-600
`;

export const TEXTAREA_SIZES: Record<TextAreaSize, string> = {
  sm: "text-sm",
  md: "text-sm",
  lg: "text-base",
};

export const TEXTAREA_RESIZE: Record<TextAreaResize, string> = {
  none: "resize-none",
  vertical: "resize-y",
  horizontal: "resize-x",
  both: "resize",
};
