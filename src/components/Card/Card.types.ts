import type { JSX } from "solid-js";

export interface CardComponentProps extends JSX.HTMLAttributes<HTMLDivElement> {
  children: JSX.Element;
}

export interface CardTitleProps extends JSX.HTMLAttributes<HTMLHeadingElement> {
  children: JSX.Element;
}

export interface CardDescriptionProps extends JSX.HTMLAttributes<HTMLParagraphElement> {
  children: JSX.Element;
}
