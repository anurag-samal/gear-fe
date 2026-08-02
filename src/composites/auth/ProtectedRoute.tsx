import { Navigate } from "@solidjs/router";
import { type ParentComponent, Show } from "solid-js";

import {Spinner} from "@/components/Spinner";
import { authState } from "@/features/auth/auth.store";

export const ProtectedRoute: ParentComponent = (props) => {
return (
  <Show
    when={authState.initialized}
    fallback={<Spinner/>}
  >
    <Show
      when={authState.user}
      fallback={<Navigate href="/auth/login" />}
    >
      {props.children}
    </Show>
  </Show>
);
};
