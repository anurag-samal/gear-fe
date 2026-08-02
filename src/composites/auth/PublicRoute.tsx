import { Navigate } from "@solidjs/router";
import { type ParentComponent, Show } from "solid-js";

import { authState } from "@/features/auth/auth.store";
import { Spinner } from "@/components/Spinner/Spinner";

export const PublicRoute: ParentComponent = (props) => {
return (
  <Show
    when={authState.initialized}
    fallback={<Spinner/>}
  >
    <Show
      when={!authState.user}
      fallback={<Navigate href="/dashboard" />}
    >
      {props.children}
    </Show>
  </Show>
);
};
