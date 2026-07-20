import type { JSX } from "solid-js";

export type TextAreaSize = "sm" | "md" | "lg";

export type TextAreaResize = "none" | "vertical" | "horizontal" | "both";

export interface TextAreaProps extends JSX.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;

  helperText?: string;

  error?: string;

  size?: TextAreaSize;

  resize?: TextAreaResize;
}
