import { createMemo, splitProps } from "solid-js";
import type { JSX } from "solid-js";

import type { SkeletonProps } from "./Skeleton.types";

import { BASE_SKELETON_CLASS } from "./Skeleton.styles";

export function Skeleton(props: SkeletonProps) {
  const [args, nativeProps] = splitProps(props, ["width", "height", "class"]);

  const skeletonClass = createMemo(
    () => `
      ${BASE_SKELETON_CLASS}
      ${args.class ?? ""}
    `,
  );

  const skeletonStyle = createMemo<JSX.CSSProperties>(() => ({
    width: args.width ?? "100%",
    height: args.height ?? "1rem",
    ...(nativeProps.style as JSX.CSSProperties),
  }));

  return (
    <div {...nativeProps} class={skeletonClass()} style={skeletonStyle()} />
  );
}
