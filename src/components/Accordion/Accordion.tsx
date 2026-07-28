import * as KAccordion from "@kobalte/core/accordion";

import { For, splitProps } from "solid-js";

import { Icon } from "@/components/Icon";

import type { AccordionProps } from "./Accordion.types";

import { ACCORDION_STYLES } from "./Accordion.styles";

export function Accordion(props: AccordionProps) {
  const [args, nativeProps] = splitProps(props, [
    "items",
    "class",
  ]);

  return (
    <KAccordion.Root
      {...nativeProps}
      class={`
        ${ACCORDION_STYLES.root}
        ${args.class ?? ""}
      `}
    >
      <For each={args.items}>
        {(item) => (
          <KAccordion.Item
            value={item.id}
            disabled={item.disabled}
            class={ACCORDION_STYLES.item}
          >
            <KAccordion.Trigger class={ACCORDION_STYLES.trigger}>
              <div class={ACCORDION_STYLES.title}>
                {item.leftIcon}
                {item.title}
              </div>

              {item.rightIcon ?? <Icon.ChevronDown />}
            </KAccordion.Trigger>

            <KAccordion.Content class={ACCORDION_STYLES.content}>
              {item.content}
            </KAccordion.Content>
          </KAccordion.Item>
        )}
      </For>
    </KAccordion.Root>
  );
}