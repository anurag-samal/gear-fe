import { createSignal } from "solid-js";

import type { ToastData, ToastVariant } from "./Toast.types";

const DEFAULT_DURATION = 4000;

const [toasts, setToasts] = createSignal<ToastData[]>([]);

const timers = new Map<string, number>();

const dismiss = (id: string) => {
  const timer = timers.get(id);

  if (timer !== undefined) {
    window.clearTimeout(timer);

    timers.delete(id);
  }

  setToasts((previous) => previous.filter((toast) => toast.id !== id));
};

const clear = () => {
  for (const timer of timers.values()) {
    window.clearTimeout(timer);
  }

  timers.clear();

  setToasts([]);
};

const show = (
  variant: ToastVariant,
  title: string,
  description?: string,
  duration = DEFAULT_DURATION,
) => {
  const id = crypto.randomUUID();

  const toast: ToastData = {
    id,
    variant,
    title,
    description,
    duration,
  };

  setToasts((previous) => [...previous, toast]);

  const timer = window.setTimeout(() => {
    dismiss(id);
  }, duration);

  timers.set(id, timer);

  return id;
};

export const toast = {
  success: (title: string, description?: string, duration?: number) =>
    show("success", title, description, duration),

  error: (title: string, description?: string, duration?: number) =>
    show("error", title, description, duration),

  warning: (title: string, description?: string, duration?: number) =>
    show("warning", title, description, duration),

  info: (title: string, description?: string, duration?: number) =>
    show("info", title, description, duration),

  dismiss,

  clear,
};

export { toasts };
