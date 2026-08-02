import { Show, createMemo, splitProps } from "solid-js";
import type { JSX } from "solid-js";

import { Theme } from "../../config/Brand";

import type { ProgressProps } from "./ProgressBar.types";

import {
  BASE_PROGRESS_BAR_CLASS,
  BASE_PROGRESS_CLASS,
} from "./ProgressBar.styles";


export function Progress(props: ProgressProps) {
  const [args, nativeProps] = splitProps(props, [
    "value",
    "max",
    "height",
    "showLabel",
    "class",
  ]);

  const percentage = createMemo(() =>
    Math.min(100, Math.max(0, (args.value / (args.max ?? 100)) * 100)),
  );

  const progressClass = createMemo(
    () => `
      ${BASE_PROGRESS_CLASS}
      ${args.class ?? ""}
    `,
  );

  const progressStyle = createMemo<JSX.CSSProperties>(() => ({
    height: args.height ?? "8px",
    ...(nativeProps.style as JSX.CSSProperties),
  }));

  const progressBarStyle = createMemo<JSX.CSSProperties>(() => ({
    width: `${percentage()}%`,
    backgroundColor: Theme.vars.primary,
  }));

  return (
    <div class="flex items-center gap-3">
      <div {...nativeProps} class={progressClass()} style={progressStyle()}>
        <div class={BASE_PROGRESS_BAR_CLASS} style={progressBarStyle()} />
      </div>

      <Show when={args.showLabel}>
        <span class="text-sm font-medium text-zinc-600">
          {Math.round(percentage())}%
        </span>
      </Show>
    </div>
  );
}
