import type { JSX } from "solid-js";
import type { TabsRootProps } from "@kobalte/core/tabs";

export interface Tab {
  id: string;

  label: JSX.Element;

  content: JSX.Element;

  disabled?: boolean;

  leftIcon?: JSX.Element;

  rightIcon?: JSX.Element;
}

export interface TabsProps extends Omit<
  TabsRootProps,
  "children" | "value" | "defaultValue" | "onChange"
> {
  tabs: Tab[];

  value?: string;

  defaultValue?: string;

  onChange?: (value: string) => void;

  variant?: "underline" | "pills" | "contained";

  fullWidth?: boolean;

  class?: string;
}
