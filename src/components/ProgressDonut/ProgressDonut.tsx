import { Show, splitProps } from "solid-js";

import type { ProgressDonutProps } from "./ProgressDonut.types";

import { Theme } from "../../config/Brand/index";

export default function ProgressDonut(props: ProgressDonutProps) {

  const theme = Theme.getTheme();

  const [args, nativeProps] = splitProps(props, [
    "value",
    "max",
    "size",
    "thickness",
    "showLabel",
    "class",
  ]);

  const size = args.size ?? 120;

  const thickness = args.thickness ?? 10;

  const radius = (size - thickness) / 2;

  const circumference = 2 * Math.PI * radius;

  const percentage = Math.min(
    100,
    Math.max(0, (args.value / (args.max ?? 100)) * 100),
  );

  const strokeOffset = circumference - (percentage / 100) * circumference;

  const svgClass = `
    ${args.class ?? ""}
  `;

  return (
    <div
      class="relative inline-flex items-center justify-center"
      style={{
        width: `${size}px`,
        height: `${size}px`,
      }}
    >
      <svg {...nativeProps} class={svgClass} width={size} height={size}>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="#E4E4E7"
          stroke-width={thickness}
        />

        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={theme.primary}
          stroke-width={thickness}
          stroke-linecap="round"
          stroke-dasharray={`${circumference}`}
          stroke-dashoffset={`${strokeOffset}`}
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
          style={{
            transition: "stroke-dashoffset 300ms ease",
          }}
        />
      </svg>

      <Show when={args.showLabel}>
        <span class="absolute text-lg font-semibold">
          {Math.round(percentage)}%
        </span>
      </Show>
    </div>
  );
}
