import type { JSX } from "solid-js";

export interface ProgressProps extends JSX.HTMLAttributes<HTMLDivElement> {
  value: number;

  max?: number;

  height?: string;

  showLabel?: boolean;
}
