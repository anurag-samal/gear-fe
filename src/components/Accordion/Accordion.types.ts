import type { JSX } from "solid-js";
import type { AccordionRootProps } from "@kobalte/core/accordion";

export interface AccordionItem {
  id: string;

  title: JSX.Element;

  content: JSX.Element;

  disabled?: boolean;

  leftIcon?: JSX.Element;

  rightIcon?: JSX.Element;
}

export interface AccordionProps extends Omit<
  AccordionRootProps,
  "children" | "value" | "defaultValue" | "onChange"
> {
  items: AccordionItem[];

  value?: string[];

  defaultValue?: string[];

  onChange?: (value: string[]) => void;

  multiple?: boolean;

  collapsible?: boolean;

  class?: string;
}
