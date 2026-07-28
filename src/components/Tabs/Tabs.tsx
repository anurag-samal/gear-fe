import * as KTabs from "@kobalte/core/tabs";

import { For, createMemo, splitProps } from "solid-js";

import type { TabsProps } from "./Tabs.types";

import { TABS_STYLES } from "./Tabs.styles";

export function Tabs(props: TabsProps) {
  const [args, nativeProps] = splitProps(props, ["tabs", "class"]);

  const tabsClass = createMemo(
    () => `
      ${TABS_STYLES.root}
      ${args.class ?? ""}
    `,
  );

  return (
    <KTabs.Root {...nativeProps} class={tabsClass()}>
      <KTabs.List class={TABS_STYLES.list}>
        <For each={args.tabs}>
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

      <For each={args.tabs}>
        {(tab) => (
          <KTabs.Content value={tab.id} class={TABS_STYLES.content}>
            {tab.content}
          </KTabs.Content>
        )}
      </For>
    </KTabs.Root>
  );
}
