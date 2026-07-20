import { Show, splitProps } from "solid-js";

import type { JSX } from "solid-js";

import type { ProgressProps } from "./ProgressBar.types";

import { THEME } from "../../config/Brand/all";

const BASE_PROGRESS_CLASS = `
w-full

overflow-hidden

rounded-full

bg-zinc-200
`;

const BASE_PROGRESS_BAR_CLASS = `
h-full

rounded-full

transition-all
duration-300
`;

export default function Progress(props: ProgressProps) {
  const [args, nativeProps] = splitProps(props, [
    "value",
    "max",
    "height",
    "showLabel",
    "class",
  ]);

  const percentage = Math.min(
    100,
    Math.max(0, (args.value / (args.max ?? 100)) * 100),
  );

  const progressClass = `
    ${BASE_PROGRESS_CLASS}
    ${args.class ?? ""}
  `;

  const progressStyle: JSX.CSSProperties = {
    height: args.height ?? "8px",
    ...(nativeProps.style as JSX.CSSProperties),
  };

  const progressBarStyle: JSX.CSSProperties = {
    width: `${percentage}%`,
    "background-color": THEME.primary,
  };

  return (
    <div class="flex items-center gap-3">
      <div {...nativeProps} class={progressClass} style={progressStyle}>
        <div class={BASE_PROGRESS_BAR_CLASS} style={progressBarStyle} />
      </div>

      <Show when={args.showLabel}>
        <span class="text-sm font-medium text-zinc-600">
          {Math.round(percentage)}%
        </span>
      </Show>
    </div>
  );
}
