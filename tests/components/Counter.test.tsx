import { describe, it, expect } from "vitest";
import { render, screen } from "@solidjs/testing-library";
import Counter from "../../src/components/Counter";

describe("Counter", () => {
  it("renders initial count of 0", () => {
    render(() => <Counter />);
    expect(screen.getByText(/Clicks: 0/)).toBeInTheDocument();
  });

  it("increments on click", () => {
    render(() => <Counter />);
    const button = screen.getByRole("button");
    button.click();
    expect(screen.getByText(/Clicks: 1/)).toBeInTheDocument();
  });

  it("increments multiple times on multiple clicks", () => {
    render(() => <Counter />);
    const button = screen.getByRole("button");
    button.click();
    button.click();
    button.click();
    expect(screen.getByText(/Clicks: 3/)).toBeInTheDocument();
  });
});
