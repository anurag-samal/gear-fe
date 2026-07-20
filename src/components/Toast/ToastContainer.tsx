import { For, splitProps } from "solid-js";

import type { ToastContainerProps } from "./Toast.types";

import Toast from "./Toast";

import { toasts } from "./ToastStore";

import { TOAST_STYLES } from "./Toast.styles";

export default function ToastContainer(props: ToastContainerProps) {
  const [args, nativeProps] = splitProps(props, ["class"]);

  const rootClass = `
    ${TOAST_STYLES.container}
    ${args.class ?? ""}
  `;

  return (
    <div {...nativeProps} class={rootClass}>
      <For each={toasts()}>{(toast) => <Toast toast={toast} />}</For>
    </div>
  );
}
