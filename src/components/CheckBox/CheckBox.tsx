import { Show, createUniqueId, splitProps } from "solid-js";

import type { CheckboxProps } from "./CheckBox.types";

import {
  CHECKBOX_CONTAINER_CLASS,
  CHECKBOX_WRAPPER_CLASS,
  CHECKBOX_FIELD_CLASS,
  CHECKBOX_LABEL_CLASS,
  CHECKBOX_HELPER_CLASS,
  CHECKBOX_ERROR_CLASS,
} from "./CheckBox.logic";

export default function Checkbox(props: CheckboxProps) {
  const [args, nativeProps] = splitProps(props, [
    "label",
    "helperText",
    "error",
    "class",
  ]);

  const checkboxId = nativeProps.id ?? createUniqueId();

  const containerClass = `
    ${CHECKBOX_CONTAINER_CLASS}
    ${args.class ?? ""}
  `;

  const wrapperClass = CHECKBOX_WRAPPER_CLASS;

  const checkboxClass = CHECKBOX_FIELD_CLASS;

  const labelClass = CHECKBOX_LABEL_CLASS;

  const helperClass = CHECKBOX_HELPER_CLASS;

  const errorClass = CHECKBOX_ERROR_CLASS;

  return (
    <div class={containerClass}>
      <div class={wrapperClass}>
        <input
          {...nativeProps}
          id={checkboxId}
          type="checkbox"
          class={checkboxClass}
        />

        <Show when={args.label}>
          <label for={checkboxId} class={labelClass}>
            {args.label}
          </label>
        </Show>
      </div>

      <Show when={args.error}>
        <p class={errorClass}>{args.error}</p>
      </Show>

      <Show when={!args.error && args.helperText}>
        <p class={helperClass}>{args.helperText}</p>
      </Show>
    </div>
  );
}
