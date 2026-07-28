import { Show, createMemo, createUniqueId, splitProps } from "solid-js";

import type { SwitchProps } from "./Switch.types";

import {
  SWITCH_CONTAINER_CLASS,
  SWITCH_WRAPPER_CLASS,
  SWITCH_INPUT_CLASS,
  SWITCH_TRACK_CLASS,
  SWITCH_THUMB_CLASS,
  SWITCH_LABEL_CLASS,
  SWITCH_HELPER_CLASS,
  SWITCH_ERROR_CLASS,
} from "./Switch.styles";

export function Switch(props: SwitchProps) {
  const [args, nativeProps] = splitProps(props, [
    "label",
    "helperText",
    "error",
    "class",
  ]);

  const switchId = createMemo(() => nativeProps.id ?? createUniqueId());

  const containerClass = createMemo(
    () => `
      ${SWITCH_CONTAINER_CLASS}
      ${args.class ?? ""}
    `,
  );

  return (
    <div class={containerClass()}>
      <label class={SWITCH_WRAPPER_CLASS}>
        <input
          {...nativeProps}
          id={switchId()}
          type="checkbox"
          class={SWITCH_INPUT_CLASS}
        />

        <div class={SWITCH_TRACK_CLASS}>
          <div class={SWITCH_THUMB_CLASS} />
        </div>

        <Show when={args.label}>
          <span class={SWITCH_LABEL_CLASS}>{args.label}</span>
        </Show>
      </label>

      <Show when={args.error}>
        <p class={SWITCH_ERROR_CLASS}>{args.error}</p>
      </Show>

      <Show when={!args.error && args.helperText}>
        <p class={SWITCH_HELPER_CLASS}>{args.helperText}</p>
      </Show>
    </div>
  );
}
