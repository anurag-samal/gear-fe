export const TABLE_STYLES = {
  root: `
w-full

overflow-x-auto

bg-[var(--theme-surface)]
`,

  table: `
w-full

border-collapse

text-sm
`,

  header: `
px-4
py-3

text-left

font-semibold

text-[var(--theme-text)]

border-b
border-[var(--theme-border)]
`,

  row: `
border-b
border-[var(--theme-border)]
`,

  cell: `
px-4
py-3

align-middle

text-[var(--theme-text)]

border-b
border-[var(--theme-border)]
`,

  empty: `
py-8

text-center

text-[var(--theme-text-muted)]
`,
} as const;
