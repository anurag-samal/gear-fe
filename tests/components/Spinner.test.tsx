import { describe, it, expect } from "vitest";
import { render } from "@solidjs/testing-library";
import Spinner from "../../src/components/Spinner/Spinner";

describe("Spinner", () => {
  it("renders with default size md", () => {
    render(() => <Spinner />);
    const spinner = document.querySelector(".animate-spin")!;
    expect(spinner.className).toContain("h-6");
    expect(spinner.className).toContain("w-6");
  });

  it("renders with custom size", () => {
    render(() => <Spinner size="lg" />);
    const spinner = document.querySelector(".animate-spin")!;
    expect(spinner.className).toContain("h-8");
    expect(spinner.className).toContain("w-8");
  });

  it("renders with xs size", () => {
    render(() => <Spinner size="xs" />);
    const spinner = document.querySelector(".animate-spin")!;
    expect(spinner.className).toContain("h-3");
    expect(spinner.className).toContain("w-3");
  });
});
