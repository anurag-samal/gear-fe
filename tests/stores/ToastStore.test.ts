import { describe, it, expect, beforeEach, vi } from "vitest";
import { toast, toasts } from "../../src/components/Toast/ToastStore";

beforeEach(() => {
  toast.clear();
  vi.useFakeTimers();
});

afterEach(() => {
  vi.useRealTimers();
});

describe("ToastStore", () => {
  it("should add a success toast", () => {
    toast.success("Operation completed");
    expect(toasts().length).toBe(1);
    expect(toasts()[0].title).toBe("Operation completed");
    expect(toasts()[0].variant).toBe("success");
  });

  it("should add toasts of different variants", () => {
    toast.success("Success");
    toast.error("Error");
    toast.warning("Warning");
    toast.info("Info");
    expect(toasts().length).toBe(4);
    expect(toasts().map((t) => t.variant)).toEqual([
      "success",
      "error",
      "warning",
      "info",
    ]);
  });

  it("should remove a toast on dismiss", () => {
    const id = toast.success("Test");
    expect(toasts().length).toBe(1);
    toast.dismiss(id);
    expect(toasts().length).toBe(0);
  });

  it("should clear all toasts", () => {
    toast.success("One");
    toast.error("Two");
    toast.warning("Three");
    expect(toasts().length).toBe(3);
    toast.clear();
    expect(toasts().length).toBe(0);
  });

  it("should include description when provided", () => {
    toast.success("Title", "Description text");
    expect(toasts()[0].description).toBe("Description text");
  });

  it("should auto-dismiss after duration", () => {
    vi.useFakeTimers();
    toast.success("Auto dismiss");
    expect(toasts().length).toBe(1);
    vi.advanceTimersByTime(4000);
    expect(toasts().length).toBe(0);
  });

  it("should use custom duration", () => {
    toast.success("Custom duration", undefined, 1000);
    expect(toasts().length).toBe(1);
    vi.advanceTimersByTime(999);
    expect(toasts().length).toBe(1);
    vi.advanceTimersByTime(1);
    expect(toasts().length).toBe(0);
  });
});
