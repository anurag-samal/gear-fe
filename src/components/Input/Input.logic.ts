import type { InputSize } from "./Input.types";

export const INPUT_CONTAINER_CLASS = `
flex
flex-col

gap-1.5

w-full
`;

export const INPUT_LABEL_CLASS = `
text-sm
font-medium

text-zinc-700
`;

export const INPUT_WRAPPER_CLASS = `
flex
items-center

gap-3

rounded-xl

border
border-zinc-300

bg-white

px-4

transition-all
duration-200

focus-within:border-zinc-400
focus-within:ring-2
focus-within:ring-zinc-200
`;

export const INPUT_FIELD_CLASS = `
flex-1

bg-transparent

outline-none

placeholder:text-zinc-400

disabled:cursor-not-allowed
disabled:opacity-60
`;

export const INPUT_HELPER_CLASS = `
text-sm

text-zinc-500
`;

export const INPUT_ERROR_CLASS = `
text-sm

text-red-600
`;

export const INPUT_SIZES: Record<InputSize, string> = {
  sm: "h-9 text-sm",
  md: "h-11 text-sm",
  lg: "h-12 text-base",
};
