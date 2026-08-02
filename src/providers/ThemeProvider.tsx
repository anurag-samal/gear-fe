import { onMount, type ParentComponent } from "solid-js";

import {Theme} from "@/config/Brand";

export const ThemeProvider: ParentComponent = (props) => {
  onMount(() => {
    Theme.apply(Theme.DEFAULT_THEME);
  });

  return <>{props.children}</>;
};