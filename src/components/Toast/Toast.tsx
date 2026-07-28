import { For, Show, createMemo, splitProps } from "solid-js";

import type { ToastItemProps, ToastProps } from "./Toast.types";

import { toast, toasts } from "./ToastStore";

import { TOAST_ICONS, TOAST_STYLES } from "./Toast.styles";

function ToastItem(props: ToastItemProps) {
  const [args] = splitProps(props, ["toast"]);

  const rootStyle = createMemo(() => ({
    backgroundColor: "var(--theme-surface)",
    borderColor: "var(--theme-border)",
    color: "var(--theme-text)",
  }));

  const iconStyle = createMemo(() => ({
    color: `var(--theme-${args.toast.variant})`,
  }));

  const closeStyle = createMemo(() => ({
    color: "var(--theme-text-muted)",
  }));

  return (
    <div class={TOAST_STYLES.root} style={rootStyle()}>
      <div class={TOAST_STYLES.icon} style={iconStyle()}>
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
        style={closeStyle()}
      >
        ✕
      </button>
    </div>
  );
}

export function Toast(props: ToastProps) {
  const [args, nativeProps] = splitProps(props, ["class"]);

  const containerClass = createMemo(
    () => `
      ${TOAST_STYLES.container}
      ${args.class ?? ""}
    `,
  );

  return (
    <div {...nativeProps} class={containerClass()}>
      <For each={toasts()}>{(toast) => <ToastItem toast={toast} />}</For>
    </div>
  );
}
