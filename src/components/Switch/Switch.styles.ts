export const SWITCH_CONTAINER_CLASS = `
flex
flex-col

gap-1.5

w-full
`;

export const SWITCH_WRAPPER_CLASS = `
inline-flex
items-center

gap-3

cursor-pointer

select-none
`;

export const SWITCH_INPUT_CLASS = `
peer

sr-only
`;

export const SWITCH_TRACK_CLASS = `
relative

h-6
w-11

rounded-full

bg-zinc-300

transition-colors
duration-200

peer-checked:bg-indigo-600

peer-focus:ring-2
peer-focus:ring-zinc-200

peer-disabled:opacity-60
`;

export const SWITCH_THUMB_CLASS = `
absolute

top-0.5
left-0.5

h-5
w-5

rounded-full

bg-white

transition-transform
duration-200

peer-checked:translate-x-5
`;

export const SWITCH_LABEL_CLASS = `
text-sm
font-medium

text-zinc-700

peer-disabled:opacity-60
`;

export const SWITCH_HELPER_CLASS = `
ml-14

text-sm

text-zinc-500
`;

export const SWITCH_ERROR_CLASS = `
ml-14

text-sm

text-red-600
`;
