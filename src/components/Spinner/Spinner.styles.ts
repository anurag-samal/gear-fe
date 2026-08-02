import {Theme} from "@/config/Brand";

import type { SpinnerColor, SpinnerSize } from "./Spinner.types";


export const SPINNER_BASE_CLASS = `
inline-block
animate-spin
rounded-full
border-2
border-solid
`;

export const SPINNER_SIZES: Record<SpinnerSize, string> = {
  xs: "h-3 w-3",
  sm: "h-4 w-4",
  md: "h-6 w-6",
  lg: "h-8 w-8",
};

export const SPINNER_STYLES: Record<
  SpinnerColor,
  {
    borderColor: string;
    borderTopColor: string;
  }
> = {
  current: {
    borderColor: "currentColor",
    borderTopColor: "transparent",
  },

  white: {
    borderColor: "white",
    borderTopColor: "transparent",
  },

  primary: {
    borderColor: Theme.vars.primary,
    borderTopColor: "transparent",
  },
};
