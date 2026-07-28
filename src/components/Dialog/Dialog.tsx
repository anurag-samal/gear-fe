import * as KDialog from "@kobalte/core/dialog";
import { For, Show } from "solid-js";
import { Button } from "@/components/Button/Button";
import { Icon } from "../Icon";
import type { DialogProps } from "./Dialog.types";
import { DIALOG_STYLES } from "./Dialog.styles";

export function Dialog(props: DialogProps) {
  return (
    <KDialog.Root
      open={props.open}
      defaultOpen={props.defaultOpen}
      onOpenChange={props.onOpenChange}
      modal={props.modal}
      preventScroll={props.preventScroll}
      forceMount={props.forceMount}
    >
      <Show when={props.trigger}>
        <KDialog.Trigger>{props.trigger}</KDialog.Trigger>
      </Show>

      <KDialog.Portal>
        <KDialog.Overlay class={DIALOG_STYLES.overlay} />

        <div class={DIALOG_STYLES.positioner}>
          <KDialog.Content
            class={`
              ${DIALOG_STYLES.content}
              ${props.class ?? ""}
            `}
          >
            <Show when={props.title}>
              <div class={DIALOG_STYLES.header}>
                <KDialog.Title class={DIALOG_STYLES.title}>
                  {props.title}
                </KDialog.Title>

                <Show when={props.showCloseButton ?? true}>
                  <KDialog.CloseButton class={DIALOG_STYLES.close}>
                    <Icon.Close />
                  </KDialog.CloseButton>
                </Show>
              </div>
            </Show>

            <Show when={props.body}>
              <KDialog.Description class={DIALOG_STYLES.body}>
                {props.body}
              </KDialog.Description>
            </Show>

            <Show when={props.buttons?.length}>
              <div class={DIALOG_STYLES.footer}>
                <For each={props.buttons}>
                  {(button) => <Button {...button}>{button.text}</Button>}
                </For>
              </div>
            </Show>
          </KDialog.Content>
        </div>
      </KDialog.Portal>
    </KDialog.Root>
  );
}
