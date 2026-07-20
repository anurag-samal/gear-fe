import { Show, createUniqueId, splitProps } from "solid-js";

import type { TextAreaProps } from "./TextArea.types";

import {
  TEXTAREA_CONTAINER_CLASS,
  TEXTAREA_LABEL_CLASS,
  TEXTAREA_WRAPPER_CLASS,
  TEXTAREA_FIELD_CLASS,
  TEXTAREA_HELPER_CLASS,
  TEXTAREA_ERROR_CLASS,
  TEXTAREA_SIZES,
  TEXTAREA_RESIZE,
} from "./TextArea.logic";

export default function TextArea(props: TextAreaProps) {
  const [args, nativeProps] = splitProps(props, [
    "label",
    "helperText",
    "error",
    "size",
    "resize",
    "class",
  ]);

  const textAreaId = nativeProps.id ?? createUniqueId();

  const containerClass = `
    ${TEXTAREA_CONTAINER_CLASS}
    ${args.class ?? ""}
  `;

  const wrapperClass = `
    ${TEXTAREA_WRAPPER_CLASS}
  `;

  const textAreaClass = `
    ${TEXTAREA_FIELD_CLASS}
    ${TEXTAREA_SIZES[args.size ?? "md"]}
    ${TEXTAREA_RESIZE[args.resize ?? "vertical"]}
  `;

  const labelClass = TEXTAREA_LABEL_CLASS;

  const helperClass = TEXTAREA_HELPER_CLASS;

  const errorClass = TEXTAREA_ERROR_CLASS;

  return (
    <div class={containerClass}>
      <Show when={args.label}>
        <label for={textAreaId} class={labelClass}>
          {args.label}
        </label>
      </Show>

      <div class={wrapperClass}>
        <textarea {...nativeProps} id={textAreaId} class={textAreaClass} />
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
