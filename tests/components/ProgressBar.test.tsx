import { describe, it, expect } from "vitest";
import { render, screen } from "@solidjs/testing-library";
import Progress from "../../src/components/ProgressBar/ProgressBar";

describe("ProgressBar", () => {
  it("renders with correct width percentage", () => {
    render(() => <Progress value={50} />);
    const bar = document.querySelector(".rounded-full.bg-zinc-200 + div") as HTMLElement;
    const fill = document.querySelector('[style*="width"]');
    expect(fill).toBeInTheDocument();
  });

  it("clamps value to 100", () => {
    render(() => <Progress value={150} showLabel />);
    const label = screen.getByText("100%");
    expect(label).toBeInTheDocument();
  });

  it("clamps value to 0", () => {
    render(() => <Progress value={-10} showLabel />);
    const label = screen.getByText("0%");
    expect(label).toBeInTheDocument();
  });

  it("shows label when showLabel is true", () => {
    render(() => <Progress value={75} showLabel />);
    expect(screen.getByText("75%")).toBeInTheDocument();
  });

  it("hides label when showLabel is false", () => {
    render(() => <Progress value={75} />);
    expect(screen.queryByText("75%")).not.toBeInTheDocument();
  });

  it("uses custom max value", () => {
    render(() => <Progress value={50} max={200} showLabel />);
    expect(screen.getByText("25%")).toBeInTheDocument();
  });
});
