import { onMount, type ParentComponent } from "solid-js";

import {Font} from "@/config/Brand";

export const FontProvider: ParentComponent = (props) => {
  onMount(() => {
    Font.apply(Font.DEFAULT_FONT);
  });

  return <>{props.children}</>;
};