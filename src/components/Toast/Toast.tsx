import { Show, splitProps } from "solid-js";

import type { ToastProps } from "./Toast.types";

import { toast } from "./ToastStore";

import { TOAST_ICONS, TOAST_STYLES } from "./Toast.styles";

export default function Toast(props: ToastProps) {
  const [args, nativeProps] = splitProps(props, ["toast", "class"]);

  const rootClass = `
    ${TOAST_STYLES.root}
    ${args.class ?? ""}
  `;

  return (
    <div
      {...nativeProps}
      class={rootClass}
      style={{
        "background-color": "var(--theme-surface)",
        "border-color": "var(--theme-border)",
        color: "var(--theme-text)",
      }}
    >
      <div
        class={TOAST_STYLES.icon}
        style={{
          color: `var(--theme-${args.toast.variant})`,
        }}
      >
        {TOAST_ICONS[args.toast.variant]}
      </div>

      <div class={TOAST_STYLES.content}>
        <div class={TOAST_STYLES.title}>{args.toast.title}</div>

        <Show when={args.toast.description}>
          <div class={TOAST_STYLES.description}>{args.toast.description}</div>
        </Show>
      </div>

      <button
        type="button"
        class={TOAST_STYLES.close}
        onClick={() => toast.dismiss(args.toast.id)}
        style={{
          color: "var(--theme-text-muted)",
        }}
      >
        ✕
      </button>
    </div>
  );
}
