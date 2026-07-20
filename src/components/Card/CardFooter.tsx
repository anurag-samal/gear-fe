import { splitProps } from "solid-js";

import type { CardComponentProps } from "./Card.types";

import { CARD_FOOTER_CLASS } from "./Card.logic";

export default function CardFooter(props: CardComponentProps) {
  const [args, nativeProps] = splitProps(props, ["children", "class"]);

  const cardFooterClass = `
    ${CARD_FOOTER_CLASS}
    ${args.class ?? ""}
  `;

  return (
    <div {...nativeProps} class={cardFooterClass}>
      {args.children}
    </div>
  );
}
