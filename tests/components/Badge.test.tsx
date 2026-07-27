import { describe, it, expect } from "vitest";
import { render, screen } from "@solidjs/testing-library";
import Badge from "../../src/components/Badge/Badge";

describe("Badge", () => {
  it("renders children", () => {
    render(() => <Badge>New</Badge>);
    expect(screen.getByText("New")).toBeInTheDocument();
  });

  it("renders dot indicator", () => {
    render(() => <Badge dot>Status</Badge>);
    const badge = screen.getByText("Status");
    const dot = badge.querySelector("span");
    expect(dot).toBeInTheDocument();
    expect(dot!.className).toContain("rounded-full");
  });

  it("renders left and right icons", () => {
    render(() => (
      <Badge
        leftIcon={<span data-testid="left">L</span>}
        rightIcon={<span data-testid="right">R</span>}
      >
        Label
      </Badge>
    ));
    expect(screen.getByTestId("left")).toBeInTheDocument();
    expect(screen.getByTestId("right")).toBeInTheDocument();
    expect(screen.getByText("Label")).toBeInTheDocument();
  });

  it("applies pill shape class", () => {
    render(() => <Badge shape="pill">Pill</Badge>);
    const badge = screen.getByText("Pill");
    expect(badge.className).toContain("rounded-full");
  });

  it("applies rounded shape class by default", () => {
    render(() => <Badge>Default</Badge>);
    const badge = screen.getByText("Default");
    expect(badge.className).toContain("rounded-lg");
  });

  it("applies size classes", () => {
    render(() => <Badge size="lg">Large</Badge>);
    const badge = screen.getByText("Large");
    expect(badge.className).toContain("text-base");
  });
});
