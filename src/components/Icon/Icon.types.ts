import type { JSX } from "solid-js";

export interface IconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number;

  color?: string;

  fill?: string;

  strokeWidth?: number;

  absoluteStrokeWidth?: boolean;
}
