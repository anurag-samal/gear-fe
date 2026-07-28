import type {
  CardBodyProps,
  CardFooterProps,
  CardHeaderProps,
  CardProps,
} from "./Card.types";

import { CARD_STYLES } from "./Card.styles";

export function Card(props: CardProps) {
  return (
    <div
      class={`
        ${CARD_STYLES.root}
        ${props.class ?? ""}
      `}
    >
      {props.children}
    </div>
  );
}

export function CardHeader(props: CardHeaderProps) {
  return (
    <div
      class={`
        ${CARD_STYLES.header}
        ${props.class ?? ""}
      `}
    >
      {props.children}
    </div>
  );
}

export function CardBody(props: CardBodyProps) {
  return (
    <div
      class={`
        ${CARD_STYLES.body}
        ${props.class ?? ""}
      `}
    >
      {props.children}
    </div>
  );
}

export function CardFooter(props: CardFooterProps) {
  return (
    <div
      class={`
        ${CARD_STYLES.footer}
        ${props.class ?? ""}
      `}
    >
      {props.children}
    </div>
  );
}

