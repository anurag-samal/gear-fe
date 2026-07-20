export const ACCORDION_STYLES = {
  root: `
w-full
`,

  item: `
border-b

border-[var(--theme-border)]
`,

  trigger: `
flex

items-center

justify-between

gap-3

w-full

px-4

py-4

cursor-pointer

transition-colors

hover:bg-[var(--theme-surface)]

text-[var(--theme-text)]
`,

  title: `
flex

items-center

gap-2

font-medium
`,

  content: `
px-4

pb-4

text-[var(--theme-text-muted)]
`,
} as const;
