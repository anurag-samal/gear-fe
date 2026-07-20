import { splitProps } from "solid-js";

import type { CardTitleProps } from "./Card.types";

import { CARD_TITLE_CLASS } from "./Card.logic";

export default function CardTitle(props: CardTitleProps) {
  const [args, nativeProps] = splitProps(props, ["children", "class"]);

  const cardTitleClass = `
    ${CARD_TITLE_CLASS}
    ${args.class ?? ""}
  `;

  return (
    <h3 {...nativeProps} class={cardTitleClass}>
      {args.children}
    </h3>
  );
}
