import { splitProps } from "solid-js";

import type { CardComponentProps } from "./Card.types";

import { CARD_CLASS } from "./Card.logic";

export default function Card(props: CardComponentProps) {
  const [args, nativeProps] = splitProps(props, ["children", "class"]);

  const cardClass = `
    ${CARD_CLASS}
    ${args.class ?? ""}
  `;

  return (
    <div {...nativeProps} class={cardClass}>
      {args.children}
    </div>
  );
}
