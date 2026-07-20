export const DIALOG_STYLES = {
  overlay: `
fixed

inset-0

bg-black/50

backdrop-blur-sm
`,

  positioner: `
fixed

inset-0

flex

items-center

justify-center

p-6
`,

  content: `
w-full

max-w-lg

rounded-xl

border

border-[var(--theme-border)]

bg-[var(--theme-surface)]

shadow-xl

overflow-hidden
`,

  header: `
flex

items-center

justify-between

px-6

py-4

border-b

border-[var(--theme-border)]
`,

  title: `
text-lg

font-semibold

text-[var(--theme-text)]
`,

  body: `
px-6

py-5

text-[var(--theme-text-muted)]
`,

  footer: `
flex

justify-end

gap-3

px-6

py-4

border-t

border-[var(--theme-border)]
`,

  close: `
flex

items-center

justify-center

rounded-md

p-2

transition-colors

hover:bg-[var(--theme-background)]
`,
} as const;
