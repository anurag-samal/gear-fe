import {
  Show,
  createMemo,
  createUniqueId,
  splitProps,
} from "solid-js";

import type { CheckboxProps } from "./CheckBox.types";

import {
  CHECKBOX_CONTAINER_CLASS,
  CHECKBOX_WRAPPER_CLASS,
  CHECKBOX_FIELD_CLASS,
  CHECKBOX_LABEL_CLASS,
  CHECKBOX_HELPER_CLASS,
  CHECKBOX_ERROR_CLASS,
} from "./CheckBox.styles";

export function Checkbox(props: CheckboxProps) {
  const [args, nativeProps] = splitProps(props, [
    "label",
    "helperText",
    "error",
    "class",
  ]);

  const checkboxId = createMemo(
    () => nativeProps.id ?? createUniqueId(),
  );

  const containerClass = createMemo(
    () => `
      ${CHECKBOX_CONTAINER_CLASS}
      ${args.class ?? ""}
    `,
  );

  return (
    <div class={containerClass()}>
      <div class={CHECKBOX_WRAPPER_CLASS}>
        <input
          {...nativeProps}
          id={checkboxId()}
          type="checkbox"
          class={CHECKBOX_FIELD_CLASS}
        />

        <Show when={args.label}>
          <label
            for={checkboxId()}
            class={CHECKBOX_LABEL_CLASS}
          >
            {args.label}
          </label>
        </Show>
      </div>

      <Show when={args.error}>
        <p class={CHECKBOX_ERROR_CLASS}>
          {args.error}
        </p>
      </Show>

      <Show when={!args.error && args.helperText}>
        <p class={CHECKBOX_HELPER_CLASS}>
          {args.helperText}
        </p>
      </Show>
    </div>
  );
}