import type { JSX } from "solid-js";

export interface ProgressDonutProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  value: number;

  max?: number;

  size?: number;

  thickness?: number;

  showLabel?: boolean;
}
