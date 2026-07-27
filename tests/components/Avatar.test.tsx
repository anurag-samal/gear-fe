import { describe, it, expect } from "vitest";
import { render, screen } from "@solidjs/testing-library";
import Avatar from "../../src/components/Avatar/Avatar";

describe("Avatar", () => {
  it("renders image when src is provided", () => {
    render(() => (
      <Avatar src="https://example.com/avatar.jpg" name="John Doe" />
    ));
    const img = screen.getByRole("img");
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute("src", "https://example.com/avatar.jpg");
    expect(img).toHaveAttribute("alt", "John Doe");
  });

  it("renders initials when name is provided without src", () => {
    render(() => <Avatar name="John Doe" />);
    expect(screen.getByText("JD")).toBeInTheDocument();
  });

  it("renders fallback when no src or name", () => {
    render(() => <Avatar />);
    expect(screen.getByText("?")).toBeInTheDocument();
  });

  it("renders with the correct size", () => {
    render(() => <Avatar size="lg" />);
    expect(screen.getByText("?")).toBeInTheDocument();
  });
});
