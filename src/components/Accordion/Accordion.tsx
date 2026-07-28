import * as KAccordion from "@kobalte/core/accordion";

import { For } from "solid-js";

import { Icon } from "../Icon";

import type { AccordionProps } from "./Accordion.types";

import { ACCORDION_STYLES } from "./Accordion.styles";

export function Accordion(props: AccordionProps) {
  return (
    <KAccordion.Root
      multiple={props.multiple}
      collapsible={props.collapsible}
      value={props.value}
      defaultValue={props.defaultValue}
      onChange={props.onChange}
      class={`
        ${ACCORDION_STYLES.root}
        ${props.class ?? ""}
      `}
    >
      <For each={props.items}>
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

