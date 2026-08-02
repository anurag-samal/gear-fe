import { onMount, type ParentComponent } from "solid-js";

import { authActions, authState } from "@/features/auth/auth.store";

export const AuthProvider: ParentComponent = (props) => {
  onMount(() => {
    if (!authState.initialized) {
      void authActions.loadProfile();
    }
  });

  return <>{props.children}</>;
};