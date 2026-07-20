import type { JSX } from "solid-js";

export type AvatarSize = "xs" | "sm" | "md" | "lg" | "xl";

export interface AvatarProps extends JSX.ImgHTMLAttributes<HTMLImageElement> {
  src?: string;

  alt?: string;

  name?: string;

  size?: AvatarSize;
}
