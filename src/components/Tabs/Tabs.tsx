import * as KTabs from "@kobalte/core/tabs";

import { For } from "solid-js";

import type { TabsProps } from "./Tabs.types";

import { TABS_STYLES } from "./Tabs.styles";

export function Tabs(props: TabsProps) {
  return (
    <KTabs.Root
      value={props.value}
      defaultValue={props.defaultValue}
      onChange={props.onChange}
      orientation={props.orientation}
      activationMode={props.activationMode}
      class={`
        ${TABS_STYLES.root}
        ${props.class ?? ""}
      `}
    >
      <KTabs.List class={TABS_STYLES.list}>
        <For each={props.tabs}>
          {(tab) => (
            <KTabs.Trigger
              value={tab.id}
              disabled={tab.disabled}
              class={TABS_STYLES.trigger}
            >
              {tab.leftIcon}

              {tab.label}

              {tab.rightIcon}
            </KTabs.Trigger>
          )}
        </For>
      </KTabs.List>

      <For each={props.tabs}>
        {(tab) => (
          <KTabs.Content value={tab.id} class={TABS_STYLES.content}>
            {tab.content}
          </KTabs.Content>
        )}
      </For>
    </KTabs.Root>
  );
}
