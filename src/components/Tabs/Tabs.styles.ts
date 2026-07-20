export const TABS_STYLES = {
  root: `
w-full
`,

  list: `
flex

items-center

gap-1

border-b

border-[var(--theme-border)]
`,

  trigger: `
flex

items-center

justify-center

gap-2

px-4

py-2

cursor-pointer

transition-colors

text-[var(--theme-text-muted)]

hover:text-[var(--theme-text)]

data-[selected]:text-[var(--theme-primary)]

data-[selected]:border-b-2

data-[selected]:border-[var(--theme-primary)]
`,

  content: `
pt-4
`,
} as const;
