import { Show, createMemo, createUniqueId, splitProps } from "solid-js";

import type { InputProps } from "./Input.types";

import {
  INPUT_CONTAINER_CLASS,
  INPUT_FIELD_CLASS,
  INPUT_HELPER_CLASS,
  INPUT_ERROR_CLASS,
  INPUT_LABEL_CLASS,
  INPUT_SIZES,
  INPUT_WRAPPER_CLASS,
} from "./Input.styles";

export function Input(props: InputProps) {
  const [args, nativeProps] = splitProps(props, [
    "label",
    "helperText",
    "error",
    "size",
    "leftIcon",
    "rightIcon",
    "class",
  ]);

  const inputId = createMemo(() => nativeProps.id ?? createUniqueId());

  const containerClass = createMemo(
    () => `
      ${INPUT_CONTAINER_CLASS}
      ${args.class ?? ""}
    `,
  );

  const wrapperClass = createMemo(
    () => `
      ${INPUT_WRAPPER_CLASS}
      ${INPUT_SIZES[args.size ?? "md"]}
    `,
  );

  return (
    <div class={containerClass()}>
      <Show when={args.label}>
        <label for={inputId()} class={INPUT_LABEL_CLASS}>
          {args.label}
        </label>
      </Show>

      <div class={wrapperClass()}>
        <Show when={args.leftIcon}>
          <span class="flex items-center justify-center text-zinc-500">
            {args.leftIcon}
          </span>
        </Show>

        <input {...nativeProps} id={inputId()} class={INPUT_FIELD_CLASS} />

        <Show when={args.rightIcon}>
          <span class="flex items-center justify-center text-zinc-500">
            {args.rightIcon}
          </span>
        </Show>
      </div>

      <Show when={args.error}>
        <p class={INPUT_ERROR_CLASS}>{args.error}</p>
      </Show>

      <Show when={!args.error && args.helperText}>
        <p class={INPUT_HELPER_CLASS}>{args.helperText}</p>
      </Show>
    </div>
  );
}
