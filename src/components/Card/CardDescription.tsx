import { splitProps } from "solid-js";

import type { CardDescriptionProps } from "./Card.types";

import { CARD_DESCRIPTION_CLASS } from "./Card.logic";

export default function CardDescription(props: CardDescriptionProps) {
  const [args, nativeProps] = splitProps(props, ["children", "class"]);

  const cardDescriptionClass = `
    ${CARD_DESCRIPTION_CLASS}
    ${args.class ?? ""}
  `;

  return (
    <p {...nativeProps} class={cardDescriptionClass}>
      {args.children}
    </p>
  );
}
