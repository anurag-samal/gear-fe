import { describe, it, expect } from "vitest";
import { getInitials } from "../../src/components/Avatar/Avatar.styles";

describe("getInitials", () => {
  it("returns ? for undefined", () => {
    expect(getInitials(undefined)).toBe("?");
  });

  it("returns ? for empty string", () => {
    expect(getInitials("")).toBe("?");
  });

  it("returns single initial for one name", () => {
    expect(getInitials("John")).toBe("J");
  });

  it("returns first and last initials for two names", () => {
    expect(getInitials("John Doe")).toBe("JD");
  });

  it("returns first and last initials for multiple names", () => {
    expect(getInitials("John Michael Doe")).toBe("JD");
  });

  it("handles lowercase names", () => {
    expect(getInitials("john doe")).toBe("JD");
  });

  it("handles extra whitespace", () => {
    expect(getInitials("  john   doe  ")).toBe("JD");
  });
});
