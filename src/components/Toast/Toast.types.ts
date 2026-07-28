import type { ComponentProps } from "solid-js";

export type ToastVariant = "success" | "error" | "warning" | "info";

export interface ToastData {
  id: string;

  variant: ToastVariant;

  title: string;

  description?: string;

  duration: number;
}

export interface ToastProps extends ComponentProps<"div"> {}

export interface ToastItemProps {
  toast: ToastData;
}
