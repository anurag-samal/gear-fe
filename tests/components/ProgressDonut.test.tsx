import { describe, it, expect } from "vitest";
import { render, screen } from "@solidjs/testing-library";
import ProgressDonut from "../../src/components/ProgressDonut/ProgressDonut";

describe("ProgressDonut", () => {
  it("renders SVG with correct dimensions", () => {
    render(() => <ProgressDonut value={50} size={120} />);
    const svg = document.querySelector("svg");
    expect(svg).toBeInTheDocument();
    expect(svg).toHaveAttribute("width", "120");
    expect(svg).toHaveAttribute("height", "120");
  });

  it("shows label when showLabel is true", () => {
    render(() => <ProgressDonut value={50} showLabel />);
    expect(screen.getByText("50%")).toBeInTheDocument();
  });

  it("hides label when showLabel is false", () => {
    render(() => <ProgressDonut value={50} />);
    expect(screen.queryByText("50%")).not.toBeInTheDocument();
  });

  it("clamps value to 100", () => {
    render(() => <ProgressDonut value={150} showLabel />);
    expect(screen.getByText("100%")).toBeInTheDocument();
  });

  it("clamps value to 0", () => {
    render(() => <ProgressDonut value={-10} showLabel />);
    expect(screen.getByText("0%")).toBeInTheDocument();
  });

  it("uses custom max value", () => {
    render(() => <ProgressDonut value={50} max={200} showLabel />);
    expect(screen.getByText("25%")).toBeInTheDocument();
  });

  it("renders two circles (track and progress)", () => {
    render(() => <ProgressDonut value={50} />);
    const circles = document.querySelectorAll("circle");
    expect(circles.length).toBe(2);
  });
});
