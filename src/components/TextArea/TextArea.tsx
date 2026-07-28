import { Show, createMemo, createUniqueId, splitProps } from "solid-js";

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
} from "./TextArea.styles";

export function TextArea(props: TextAreaProps) {
  const [args, nativeProps] = splitProps(props, [
    "label",
    "helperText",
    "error",
    "size",
    "resize",
    "class",
  ]);

  const textAreaId = createMemo(() => nativeProps.id ?? createUniqueId());

  const containerClass = createMemo(
    () => `
      ${TEXTAREA_CONTAINER_CLASS}
      ${args.class ?? ""}
    `,
  );

  const textAreaClass = createMemo(
    () => `
      ${TEXTAREA_FIELD_CLASS}
      ${TEXTAREA_SIZES[args.size ?? "md"]}
      ${TEXTAREA_RESIZE[args.resize ?? "vertical"]}
    `,
  );

  return (
    <div class={containerClass()}>
      <Show when={args.label}>
        <label for={textAreaId()} class={TEXTAREA_LABEL_CLASS}>
          {args.label}
        </label>
      </Show>

      <div class={TEXTAREA_WRAPPER_CLASS}>
        <textarea {...nativeProps} id={textAreaId()} class={textAreaClass()} />
      </div>

      <Show when={args.error}>
        <p class={TEXTAREA_ERROR_CLASS}>{args.error}</p>
      </Show>

      <Show when={!args.error && args.helperText}>
        <p class={TEXTAREA_HELPER_CLASS}>{args.helperText}</p>
      </Show>
    </div>
  );
}
