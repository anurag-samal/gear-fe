import { Match, Switch, createMemo, splitProps } from "solid-js";

import type { AvatarProps } from "./Avatar.types";

import { AVATAR_SIZES, BASE_AVATAR_CLASS, getInitials } from "./Avatar.styles";

export default function Avatar(props: AvatarProps) {
  const [args, nativeProps] = splitProps(props, [
    "src",
    "alt",
    "name",
    "size",
    "class",
  ]);

  const avatarClass = `
    ${BASE_AVATAR_CLASS}
    ${AVATAR_SIZES[args.size ?? "md"]}
    ${args.class ?? ""}
  `;

  const initials = createMemo(() => getInitials(args.name));

  return (
    <div class={avatarClass}>
      <Switch>
        <Match when={args.src}>
          <img
            {...nativeProps}
            src={args.src}
            alt={args.alt ?? args.name ?? "Avatar"}
            class="h-full w-full object-cover"
          />
        </Match>

        <Match when={args.name}>{initials()}</Match>

        <Match when={true}>?</Match>
      </Switch>
    </div>
  );
}
