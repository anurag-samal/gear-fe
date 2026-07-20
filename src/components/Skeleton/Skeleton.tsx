import { JSX, splitProps } from "solid-js";

import type { SkeletonProps } from "./Skeleton.types";

const BASE_SKELETON_CLASS = `
animate-pulse

rounded-lg

bg-zinc-200

select-none

shrink-0
`;

export default function Skeleton(props: SkeletonProps) {
  const [args, nativeProps] = splitProps(props, ["width", "height", "class"]);

  const skeletonClass = `
    ${BASE_SKELETON_CLASS}
    ${args.class ?? ""}
  `;

  const skeletonStyle = {
    width: args.width ?? "100%",
    height: args.height ?? "1rem",
    ...(nativeProps.style as JSX.CSSProperties),
  };

  return <div {...nativeProps} class={skeletonClass} style={skeletonStyle} />;
}
