import type { JSX } from "solid-js";

export type ToastVariant = "success" | "error" | "warning" | "info";

export interface ToastData {
  id: string;

  title: string;

  description?: string;

  variant: ToastVariant;

  duration?: number;
}

export interface ToastProps extends JSX.HTMLAttributes<HTMLDivElement> {
  toast: ToastData;
}

export interface ToastContainerProps extends JSX.HTMLAttributes<HTMLDivElement> {}
