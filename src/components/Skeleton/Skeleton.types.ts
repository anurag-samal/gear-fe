import type { JSX } from "solid-js";

export interface SkeletonProps extends JSX.HTMLAttributes<HTMLDivElement> {
  width?: string;

  height?: string;
}
