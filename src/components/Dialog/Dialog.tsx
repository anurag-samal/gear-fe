import * as KDialog from "@kobalte/core/dialog";

import { For, Show, createMemo, splitProps } from "solid-js";

import { Button } from "@/components/Button/Button";

import { Icon } from "@/components/Icon";

import type { DialogProps } from "./Dialog.types";

import { DIALOG_STYLES } from "./Dialog.styles";

export function Dialog(props: DialogProps) {
  const [args, nativeProps] = splitProps(props, [
    "trigger",
    "title",
    "body",
    "buttons",
    "showCloseButton",
    "class",
  ]);

  const dialogClass = createMemo(
    () => `
      ${DIALOG_STYLES.content}
      ${args.class ?? ""}
    `,
  );

  return (
    <KDialog.Root {...nativeProps}>
      <Show when={args.trigger}>
        <KDialog.Trigger>{args.trigger}</KDialog.Trigger>
      </Show>

      <KDialog.Portal>
        <KDialog.Overlay class={DIALOG_STYLES.overlay} />

        <div class={DIALOG_STYLES.positioner}>
          <KDialog.Content class={dialogClass()}>
            <Show when={args.title}>
              <div class={DIALOG_STYLES.header}>
                <KDialog.Title class={DIALOG_STYLES.title}>
                  {args.title}
                </KDialog.Title>

                <Show when={args.showCloseButton ?? true}>
                  <KDialog.CloseButton class={DIALOG_STYLES.close}>
                    <Icon.Close />
                  </KDialog.CloseButton>
                </Show>
              </div>
            </Show>

            <Show when={args.body}>
              <KDialog.Description class={DIALOG_STYLES.body}>
                {args.body}
              </KDialog.Description>
            </Show>

            <Show when={args.buttons?.length}>
              <div class={DIALOG_STYLES.footer}>
                <For each={args.buttons}>
                  {(button) => (
                    <Button {...button}>
                      {button.text}
                    </Button>
                  )}
                </For>
              </div>
            </Show>
          </KDialog.Content>
        </div>
      </KDialog.Portal>
    </KDialog.Root>
  );
}