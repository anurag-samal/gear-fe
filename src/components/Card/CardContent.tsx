import { splitProps } from "solid-js";

import type { CardComponentProps } from "./Card.types";

import { CARD_CONTENT_CLASS } from "./Card.logic";

export default function CardContent(props: CardComponentProps) {
  const [args, nativeProps] = splitProps(props, ["children", "class"]);

  const cardContentClass = `
    ${CARD_CONTENT_CLASS}
    ${args.class ?? ""}
  `;

  return (
    <div {...nativeProps} class={cardContentClass}>
      {args.children}
    </div>
  );
}
