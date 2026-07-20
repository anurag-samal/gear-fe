import { splitProps } from "solid-js";

import type { CardComponentProps } from "./Card.types";

import { CARD_HEADER_CLASS } from "./Card.logic";

export default function CardHeader(props: CardComponentProps) {
  const [args, nativeProps] = splitProps(props, ["children", "class"]);

  const cardHeaderClass = `
    ${CARD_HEADER_CLASS}
    ${args.class ?? ""}
  `;

  return (
    <div {...nativeProps} class={cardHeaderClass}>
      {args.children}
    </div>
  );
}
