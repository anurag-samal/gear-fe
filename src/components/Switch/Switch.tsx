import { Show, createUniqueId, splitProps } from "solid-js";

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
} from "./Switch.logic";

export default function Switch(props: SwitchProps) {
  const [args, nativeProps] = splitProps(props, [
    "label",
    "helperText",
    "error",
    "class",
  ]);

  const switchId = nativeProps.id ?? createUniqueId();

  const containerClass = `
    ${SWITCH_CONTAINER_CLASS}
    ${args.class ?? ""}
  `;

  const wrapperClass = SWITCH_WRAPPER_CLASS;

  const inputClass = SWITCH_INPUT_CLASS;

  const trackClass = SWITCH_TRACK_CLASS;

  const thumbClass = SWITCH_THUMB_CLASS;

  const labelClass = SWITCH_LABEL_CLASS;

  const helperClass = SWITCH_HELPER_CLASS;

  const errorClass = SWITCH_ERROR_CLASS;

  return (
    <div class={containerClass}>
      <label class={wrapperClass}>
        <input
          {...nativeProps}
          id={switchId}
          type="checkbox"
          class={inputClass}
        />

        <div class={trackClass}>
          <div class={thumbClass} />
        </div>

        <Show when={args.label}>
          <span class={labelClass}>{args.label}</span>
        </Show>
      </label>

      <Show when={args.error}>
        <p class={errorClass}>{args.error}</p>
      </Show>

      <Show when={!args.error && args.helperText}>
        <p class={helperClass}>{args.helperText}</p>
      </Show>
    </div>
  );
}
