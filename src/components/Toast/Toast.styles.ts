export const TOAST_STYLES = {
  container: `
fixed

top-4
right-4

z-50

flex
flex-col

gap-3
`,

  root: `
flex

items-start

gap-3

min-w-80
max-w-sm

rounded-lg

border

shadow-lg

p-4
`,

  icon: `
shrink-0

text-lg
`,

  content: `
flex-1
`,

  title: `
font-semibold
`,

  description: `
mt-1

text-sm
`,

  close: `
ml-2

cursor-pointer

text-lg

transition-colors
`,
} as const;

export const TOAST_ICONS = {
  success: "✔",
  error: "✖",
  warning: "⚠",
  info: "ℹ",
} as const;
