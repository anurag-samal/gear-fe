import { createMemo, splitProps } from "solid-js";

import type {
  CardBodyProps,
  CardFooterProps,
  CardHeaderProps,
  CardProps,
} from "./Card.types";

import { CARD_STYLES } from "./Card.styles";

export function Card(props: CardProps) {
  const [args, nativeProps] = splitProps(props, ["children", "class"]);

  const cardClass = createMemo(
    () => `
      ${CARD_STYLES.root}
      ${args.class ?? ""}
    `,
  );

  return (
    <div
      {...nativeProps}
      class={cardClass()}
    >
      {args.children}
    </div>
  );
}

export function CardHeader(props: CardHeaderProps) {
  const [args, nativeProps] = splitProps(props, ["children", "class"]);

  const cardHeaderClass = createMemo(
    () => `
      ${CARD_STYLES.header}
      ${args.class ?? ""}
    `,
  );

  return (
    <div
      {...nativeProps}
      class={cardHeaderClass()}
    >
      {args.children}
    </div>
  );
}

export function CardBody(props: CardBodyProps) {
  const [args, nativeProps] = splitProps(props, ["children", "class"]);

  const cardBodyClass = createMemo(
    () => `
      ${CARD_STYLES.body}
      ${args.class ?? ""}
    `,
  );

  return (
    <div
      {...nativeProps}
      class={cardBodyClass()}
    >
      {args.children}
    </div>
  );
}

export function CardFooter(props: CardFooterProps) {
  const [args, nativeProps] = splitProps(props, ["children", "class"]);

  const cardFooterClass = createMemo(
    () => `
      ${CARD_STYLES.footer}
      ${args.class ?? ""}
    `,
  );

  return (
    <div
      {...nativeProps}
      class={cardFooterClass()}
    >
      {args.children}
    </div>
  );
}