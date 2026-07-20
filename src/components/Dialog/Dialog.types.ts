import type { JSX } from "solid-js";

import type { DialogRootProps } from "@kobalte/core/dialog";

import type { ButtonProps } from "../Button/Button.types";

export interface DialogButton extends Omit<ButtonProps, "children"> {
  text: string;
}

export interface DialogProps extends Omit<DialogRootProps, "children"> {
  trigger?: string | JSX.Element;

  title?: string | JSX.Element;

  body?: string | JSX.Element;

  buttons?: DialogButton[];

  showCloseButton?: boolean;

  class?: string;
}
