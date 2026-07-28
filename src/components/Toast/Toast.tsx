import { For, Show, splitProps } from "solid-js";

import type { ToastItemProps, ToastProps } from "./Toast.types";

import { toast, toasts } from "./ToastStore";

import { TOAST_ICONS, TOAST_STYLES } from "./Toast.styles";

function ToastItem(props: ToastItemProps) {
  return (
    <div
      class={TOAST_STYLES.root}
      style={{
        "background-color": "var(--theme-surface)",
        "border-color": "var(--theme-border)",
        color: "var(--theme-text)",
      }}
    >
      <div
        class={TOAST_STYLES.icon}
        style={{
          color: `var(--theme-${props.toast.variant})`,
        }}
      >
        {TOAST_ICONS[props.toast.variant]}
      </div>

      <div class={TOAST_STYLES.content}>
        <div class={TOAST_STYLES.title}>
          {props.toast.title}
        </div>

        <Show when={props.toast.description}>
          <div class={TOAST_STYLES.description}>
            {props.toast.description}
          </div>
        </Show>
      </div>

      <button
        type="button"
        class={TOAST_STYLES.close}
        onClick={() => toast.dismiss(props.toast.id)}
        style={{
          color: "var(--theme-text-muted)",
        }}
      >
        ✕
      </button>
    </div>
  );
}

export function Toast(props: ToastProps) {
  const [args, nativeProps] = splitProps(props, ["class"]);

  return (
    <div
      {...nativeProps}
      class={`
        ${TOAST_STYLES.container}
        ${args.class ?? ""}
      `}
    >
      <For each={toasts()}>
        {(toast) => <ToastItem toast={toast} />}
      </For>
    </div>
  );
}