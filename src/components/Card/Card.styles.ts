export const CARD_STYLES = {
  root: `
flex

flex-col

rounded-xl

border

border-[var(--theme-border)]

bg-[var(--theme-surface)]

shadow-sm

overflow-hidden
`,

  header: `
flex

items-center

justify-between

gap-4

px-6

py-4

border-b

border-[var(--theme-border)]
`,

  body: `
flex-1

p-6
`,

  footer: `
flex

items-center

justify-between

gap-4

px-6

py-4

border-t

border-[var(--theme-border)]
`,
} as const;