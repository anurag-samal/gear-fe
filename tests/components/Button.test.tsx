import { describe, it, expect } from "vitest";
import { render, screen } from "@solidjs/testing-library";
import Button from "../../src/components/Button/Button";

describe("Button", () => {
  it("renders children", () => {
    render(() => <Button>Click me</Button>);
    expect(screen.getByText("Click me")).toBeInTheDocument();
  });

  it("renders as disabled when loading", () => {
    render(() => <Button loading>Click</Button>);
    expect(screen.getByRole("button")).toBeDisabled();
  });

  it("renders spinner when loading", () => {
    render(() => <Button loading>Click</Button>);
    const button = screen.getByRole("button");
    const spinner = button.querySelector(".animate-spin");
    expect(spinner).toBeInTheDocument();
  });

  it("does not render children icons when loading", () => {
    const icon = <span data-testid="icon">X</span>;
    render(() => (
      <Button loading leftIcon={icon} rightIcon={icon}>
        Click
      </Button>
    ));
    expect(screen.queryByTestId("icon")).not.toBeInTheDocument();
  });

  it("applies fullWidth class", () => {
    render(() => <Button fullWidth>Full</Button>);
    expect(screen.getByRole("button").className).toContain("w-full");
  });

  it("renders left and right icons", () => {
    render(() => (
      <Button
        leftIcon={<span data-testid="left-icon">L</span>}
        rightIcon={<span data-testid="right-icon">R</span>}
      >
        Click
      </Button>
    ));
    expect(screen.getByTestId("left-icon")).toBeInTheDocument();
    expect(screen.getByTestId("right-icon")).toBeInTheDocument();
  });
});
